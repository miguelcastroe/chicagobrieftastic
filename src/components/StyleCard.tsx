import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Style } from "../types/styles";

export const StyleCard = ({ style, onClick }: { style: Style; onClick: () => void }) => {
  const [currentDescription, setCurrentDescription] = useState(style.description);

  useEffect(() => {
    const interval = setInterval(() => {
      // Sort phrases by length and get the shortest ones (top 3)
      const shortestPhrases = [...style.phrases].sort((a, b) => a.length - b.length).slice(0, 3);
      // Pick a random phrase from the shortest ones
      const randomPhrase = shortestPhrases[Math.floor(Math.random() * shortestPhrases.length)];
      setCurrentDescription(randomPhrase);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [style.phrases]);

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
        <p className="text-white/90 text-sm">{currentDescription}</p>
      </div>
    </motion.div>
  );
};