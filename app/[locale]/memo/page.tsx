"use client";

import { useEffect, useRef, useState } from "react";
import LinkedinIcon from "@/IconsSVG/LinkedinIcon";

type CardItem = {
  emoji: string;
  text: string;
};

const items: CardItem[] = [
  { emoji: "🔗", text: "Connect IT dots" },
  { emoji: "🌱", text: "Let’s grow together" },
  { emoji: "💛", text: "Power skills" },
  { emoji: "👑", text: "Networking is the King" },
  { emoji: "✅", text: "Feedback" },
  { emoji: "🛠️", text: "Workshops" },
  { emoji: "🎵", text: "#LTaIT vibes" },
  { emoji: "🎮", text: "Game Changer" },
  { emoji: "linkedin", text: "LinkedIn" },
  { emoji: "💡", text: "Power tip" },
  { emoji: "✈️", text: "Let's travel together" },
  { emoji: "🌐", text: "IT Community First" },
  { emoji: "🕰️", text: "Back to the past" },
  { emoji: "📍", text: "R jak Rzeszów" },
  { emoji: "📅", text: "Event" },
];

export default function MemoPage(): JSX.Element {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [pairs, setPairs] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGame = (): void => {
    const duplicated: CardItem[] = [...items, ...items];
    const shuffled: CardItem[] = duplicated.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setPairs(0);
    setTime(0);
    setWin(false);
    setGameStarted(false);

    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    // initialize on mount
    startGame();
    // cleanup on unmount
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // when gameStarted becomes true, start timer if not running
    if (gameStarted && !timer.current) {
      timer.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  }, [gameStarted]);

  // handle matches when two cards flipped
  useEffect(() => {
    if (flipped.length < 2) return;

    const [a, b] = flipped;
    const first = cards[a];
    const second = cards[b];

    const timeout = setTimeout(() => {
      if (first && second && first.text === second.text && first.emoji === second.emoji) {
        setMatched((prev) => [...prev, a, b]);
        setPairs((p) => p + 1);
        setMoves((m) => m + 1);
      } else {
        setMoves((m) => m + 1);
      }

      setFlipped([]);

    }, 800);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped]);

  // stop timer and show win when pairs reach 15
  useEffect(() => {
    if (pairs === 15) {
      setWin(true);
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }
  }, [pairs]);

  const flipCard = (index: number): void => {
    if (flipped.includes(index) || matched.includes(index)) return;
    if (flipped.length === 2) return;

    // start timer on first flip
    if (!gameStarted) setGameStarted(true);

    setFlipped((prev) => {
      // if already one flipped, this will become the second and trigger effect
      if (prev.length === 1 && prev[0] === index) return prev;
      return [...prev, index];
    });
  };

  // small helper to format time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen p-5 md:p-8 bg-gradient-to-br from-[#0c0c0c] via-[#2a2a2a] to-[#0c0c0c] flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl pt-20 font-extrabold mb-2 text-center leading-tight
          bg-gradient-to-r from-white to-[#daf501] bg-clip-text text-transparent drop-shadow-md">
        ! IT Gra Memo !
      </h1>

      <p className="subtitle text-neutral-200 mb-6 text-center text-sm md:text-base">
        Dopasuj pary i dołącz do naszej społeczności
      </p>

      <div className="game-info flex flex-wrap gap-4 md:gap-10 mb-6 items-center justify-center
                      bg-white/90 backdrop-blur-md px-4 md:px-8 py-3 rounded-xl border-2 border-[#daf501]
                      shadow-[0_8px_32px_rgba(218,245,1,0.3)] text-[#0c0c0c] font-semibold text-sm md:text-lg">
        <div>Ruchy: <span id="moves">{moves}</span></div>
        <div>Pary: <span id="pairs">{pairs}</span>/15</div>
        <div>Czas: <span id="time">{formatTime(time)}</span></div>
      </div>

      {/* board container - replicate sizes from original with responsive columns */}
      <div
        className="game-board w-full max-w-[900px] p-5 rounded-[25px] bg-white/5 backdrop-blur-md border-2 border-[#daf501] 
                   shadow-[0_8px_32px_rgba(218,245,1,0.2)]"
      >
        <div
          className="
            grid gap-4
            grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6
            justify-center items-center
          "
          style={{ width: "100%" }}
        >
          {cards.map((item: CardItem, i: number) => {
            const isFlipped = flipped.includes(i) || matched.includes(i);
            const isMatched = matched.includes(i);

            return (
              <button
  key={i}
  onClick={() => flipCard(i)}
  aria-pressed={isFlipped}
  className={`relative overflow-hidden rounded-[20px] flex items-center justify-center
    transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    ${isFlipped ? "bg-gradient-to-br from-[#000000] to-[#434343] border-white text-white" : "bg-gradient-to-br from-[#434343] to-[#ffffff] text-black"}
    ${isMatched ? "bg-gradient-to-br from-[#daf501] to-[#626360] text-white border-[#daf501]" : ""}
    border-2 shadow-[0_8px_32px_rgba(218,245,1,0.2)] cursor-pointer
    hover:translate-y-[-8px] hover:scale-[1.05]
    w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]`}
>

                {/* shine effect (mimics ::before from original) */}
                <span
                  className="absolute top-0 left-[-120%] w-[120%] h-full pointer-events-none
                             bg-[linear-gradient(90deg,transparent_rgba(255,255,255,0.0),rgba(255,255,255,0.22),transparent)]
                             transition-all duration-500"
                  // className toggled by hover using tailwind is tricky for dynamic translate; use group hover by wrapping, but button itself is hovered so:
                  style={{ transform: "translateX(0)" }}
                />
                {/* We'll animate the shine with inline hover via tailwind: */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden
                />

                {/* content */}
                {isFlipped ? (
  item.emoji === "linkedin" ? (
    <div className="card-content text-center px-1 sm:px-2 md:px-3">
      <div className="mb-1 flex justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <LinkedinIcon/>
      </div>
      <div className="text-[10px] sm:text-[12px] md:text-sm font-semibold leading-tight">
        {item.text}
      </div>
    </div>
  ) : (
    <div className="card-content text-center px-1 sm:px-2 md:px-3">
      <div className="text-[24px] sm:text-[28px] md:text-[32px] mb-1 filter drop-shadow-sm">{item.emoji}</div>
      <div className="text-[10px] sm:text-[12px] md:text-sm font-semibold leading-tight">
        {item.text}
      </div>
    </div>
  )
) : (
  <div className="card-back text-[32px] sm:text-[36px] md:text-[40px] text-[#0c0c0c] drop-shadow-md">💻</div>
)}

              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={startGame}
        className="mt-6 px-6 py-3 rounded-[15px] bg-gradient-to-br from-[#daf501] to-[#c4e001]
                   text-[#0c0c0c] font-semibold border-2 border-white shadow-[0_8px_25px_rgba(218,245,1,0.4)]
                   hover:-translate-y-1 transition-transform"
      >
        Nowa Gra
      </button>

      {win && (
        <div className="win-message mt-6 text-[#0c0c0c] text-lg font-semibold text-center bg-white/95 backdrop-blur-md
                        px-6 py-4 rounded-[20px] border-2 border-[#daf501] shadow-[0_8px_32px_rgba(218,245,1,0.4)]">
          🎉 Gratulacje! 🎉
          <br />
          Ukończyłeś grę w {moves} ruchach
          <br />
          w czasie {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}!
          <br />
          <small>Ready to talk about IT! 💪</small>
        </div>
      )}
    </div>
  );
}
