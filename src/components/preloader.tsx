"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  // Auto-hide preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1],
              y: 0,
            }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/logo/19.png"
              alt="Loading"
              width={140}
              height={140}
              className="opacity-95"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
