'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <h1>Home page</h1>
      {isMounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Hello World
        </motion.div>
      )}
    </>
  );
}
