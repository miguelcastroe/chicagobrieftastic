import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Share2, Home, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Style } from "../types/styles";

export const SelectedStyle = ({ 
  style, 
  onReset 
}: { 
  style: Style; 
  onReset: () => void;
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % style.phrases.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [style.phrases.length]);

  const handleShare = () => {
    navigator.clipboard.writeText(
      `¡Descubrí que mi estilo es ${style.name} en Chicago Briefs Matcher! 🩲✨`
    );
    toast.success("¡Link copiado al portapapeles!");
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${style.color} p-8 rounded-2xl mb-8 text-white`}>
        {style.id === "largo-milano" ? (
          <img 
            src="/lovable-uploads/95582cbf-a331-47cc-98bd-66e9c2b08c75.png" 
            alt="Largo Milano" 
            className="w-48 h-48 object-contain mx-auto mb-6 rounded-2xl" 
          />
        ) : (
          <div className="mb-6">{style.icon}</div>
        )}
        <h2 className="text-3xl font-bold mb-4">{style.name}</h2>
        <p className="text-xl mb-6">{style.phrases[currentPhraseIndex]}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setCurrentPhraseIndex((prev) => (prev + 1) % style.phrases.length)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors"
          >
            Quiero más <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors"
          >
            Compartir <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" /> Inicio
          </button>
        </div>
      </div>
      <p className="text-xl text-text-gray">
        Ya sabes cuál es tu match perfecto. Ahora falta que tus amigas lo descubran.
      </p>
    </motion.div>
  );
};