import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Style } from "../types/styles";

export const StyleCard = ({ style, onClick }: { style: Style; onClick: () => void }) => {
  // Get initial description from shortest phrases
  const shortPhrases = [...style.phrases]
    .sort((a, b) => a.length - b.length)
    .filter(phrase => phrase.length < 60); // Filter phrases that are likely to fit in one line
  
  const [currentDescription, setCurrentDescription] = useState(shortPhrases[0] || style.description);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    if (changeCount >= 2) return; // Stop after two changes

    const interval = setInterval(() => {
      // Get a random phrase from the filtered short phrases
      const randomPhrase = shortPhrases[Math.floor(Math.random() * Math.min(shortPhrases.length, 3))];
      if (randomPhrase) {
        setCurrentDescription(randomPhrase);
        setChangeCount(prev => prev + 1);
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [shortPhrases, changeCount]);

  return (
    <motion.div
      className={`style-card ${style.color} text-white h-64 flex flex-col justify-between`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="style-icon mb-4">{style.icon}</div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
        <p className="text-white/90 text-sm truncate">{currentDescription}</p>
      </div>
    </motion.div>
  );
};