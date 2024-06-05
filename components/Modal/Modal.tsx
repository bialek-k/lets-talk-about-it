'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

export interface Data {
  title: string;
  content: RichTextContent;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data?: Data;
}
export const MapWindow = ({ isOpen, setIsOpen, data }: ModalProps) => {
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
          className="bg-slate-900/20 backdrop-blur fixed h-screen inset-0 z-50 grid items-baseline overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, x: '100vw', y: '-100vh' }}
            animate={{ scale: 1, x: 0, y: 0 }}
            exit={{ scale: 0, x: '100vw', y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-main-black border-2 inset-y-12 md:inset-0 border-solid border-main-yellow text-white p-6 rounded-lg w-full md:max-w-3xl  shadow-xl cursor-default relative overflow-hidden flex flex-col items-center gap-10 overflow-y-auto m-auto"
          >
            {/* Button Close */}
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute w-7 h-7 z-30 top-4 right-4 flex items-center justify-center hamburger hamburger_active`}
            />
            <div className="pt-6">
              {data && (
                <RichText
                  content={data.content}
                  renderers={{
                    p: ({ children }) => {
                      return <p className="m-0 mt-2">{children}</p>;
                    },
                  }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
