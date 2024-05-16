import { AnimatePresence, motion } from 'framer-motion';

interface MapWindowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data?: string | null;
}
const MapWindow = ({ isOpen, setIsOpen, data }: MapWindowProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
          }}
          className="bg-slate-900/20 backdrop-blur  fixed h-screen inset-0 z-50 grid items-baseline overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, x: '100vw', y: '-100vh' }}
            animate={{ scale: 1, x: 0, y: 0 }}
            exit={{ scale: 0, x: '100vw', y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-main-black border-2 border-solid border-main-yellow text-white p-6 rounded-lg w-full max-w-[328px] lg:max-w-[640px] shadow-xl cursor-default relative overflow-hidden flex flex-col items-center gap-10 overflow-y-auto m-auto"
          >
            {/* Button Close */}
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute w-7 h-7 z-30 top-4 right-4 flex items-center justify-center hamburger hamburger_active`}
            >
              <span />
            </button>
            <iframe
              src={`https://maps.google.com/maps?q=${data}}&z=10&output=embed`}
              width="100%"
              height="450"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapWindow;
