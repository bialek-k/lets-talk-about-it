"use client";

import { useState, useEffect, useRef } from "react";

const items = [
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

export default function MemoPage() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [pairs, setPairs] = useState(0);
  const [time, setTime] = useState(0);
  const [win, setWin] = useState(false);
  const timer = useRef(null);

  const startGame = () => {
    const duplicated = [...items, ...items];
    const shuffled = duplicated.sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setPairs(0);
    setTime(0);
    setWin(false);

    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (moves === 0) return;
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  }, [moves]);

  const flipCard = (i) => {
    if (flipped.length === 2 || matched.includes(i) || flipped.includes(i)) return;

    setFlipped([...flipped, i]);

    if (flipped.length === 1) {
      setMoves((m) => m + 1);
      const firstIndex = flipped[0];

      setTimeout(() => {
        const first = cards[firstIndex];
        const second = cards[i];

        if (first.text === second.text && first.emoji === second.emoji) {
          setMatched([...matched, firstIndex, i]);
          setPairs((p) => p + 1);

          if (pairs + 1 === 15) {
            setWin(true);
            clearInterval(timer.current);
          }
        }

        setFlipped([]);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-neutral-800 to-black flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-lime-300 bg-clip-text text-transparent">
        IT Gra Memo
      </h1>

      <p className="text-neutral-300 mb-6 text-center">
        Dopasuj pary i dołącz do naszej społeczności
      </p>

      <div className="flex gap-6 mb-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-lime-300 shadow-xl text-lg font-semibold text-white">
        <div>Ruchy: {moves}</div>
        <div>Pary: {pairs}/15</div>
        <div>
          Czas: {String(Math.floor(time / 60)).padStart(2, "0")}:
          {String(time % 60).padStart(2, "0")}
        </div>
      </div>

      <div
        className="
          grid gap-4 mb-6 w-full max-w-2xl 
          grid-cols-3 sm:grid-cols-4 md:grid-cols-5
        "
      >
        {cards.map((item, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(i);

          return (
            <div
              key={i}
              onClick={() => flipCard(i)}
              className={`
                aspect-square rounded-2xl flex items-center justify-center cursor-pointer 
                transition transform relative select-none 
                ${isFlipped ? "bg-neutral-900 border-white" : "bg-neutral-700 border-lime-300"} 
                ${matched.includes(i) ? "bg-lime-400 text-black border-lime-500" : ""}
                border-2 shadow-lg
              `}
            >
              {isFlipped ? (
                item.emoji === "linkedin" ? (
                  <div className="text-center text-sm font-semibold">
                    <div className="flex justify-center mb-1">
                      <svg className="w-6 h-6 bg-white rounded" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="white" />
                        <path
                          d="M20.447 20.452h-3.554v-5.569..."
                          fill="#0077B5"
                        />
                      </svg>
                    </div>
                    {item.text}
                  </div>
                ) : (
                  <div className="text-center text-sm font-semibold">
                    <div className="text-3xl mb-1">{item.emoji}</div>
                    {item.text}
                  </div>
                )
              ) : (
                <div className="text-4xl">💻</div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={startGame}
        className="
          px-6 py-3 rounded-xl bg-lime-400 text-black font-bold 
          border-2 border-white shadow-xl transition hover:scale-105
        "
      >
        Nowa Gra
      </button>

      {win && (
        <div className="mt-6 px-6 py-4 bg-white text-black rounded-xl shadow-xl text-center font-semibold">
          🎉 Gratulacje! 🎉<br />
          Ukończyłeś grę w {moves} ruchach<br />
          w czasie {Math.floor(time / 60)}:
          {String(time % 60).padStart(2, "0")}!
        </div>
      )}
    </div>
  );
}
