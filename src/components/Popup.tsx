import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const openHouseImage = "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-27%2FMiniMax-M2.1%2F2016507940642496657%2F61941e7d1cd250b02b8c211003c43bde08525b815b3f94eb48b5dae40f00893a..jpeg?Expires=1774642322&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=R3H62w3lqRP96nAEQI81ma3WvDY%3D";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup Content - Image Only */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/90 shadow-lg text-charcoal/70 transition-all duration-300 hover:text-gold hover:scale-110"
              aria-label="Close popup"
            >
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>

            {/* Image only */}
            <img
              src={openHouseImage}
              alt="Palacio Open House - April 3rd, 2026"
              className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;