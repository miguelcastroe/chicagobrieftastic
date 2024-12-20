import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Home, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { StyleCard } from "../components/StyleCard";
import { SelectedStyle } from "../components/SelectedStyle";
import { styles } from "../data/styles";
import { Style } from "../types/styles";

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);

  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };

  const handleReset = () => {
    setSelectedStyle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        {!selectedStyle ? (
          <>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-text-light text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Chicago Brieftastic
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-left mb-4 text-text-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              ¿Cuál es tu tremendo estilo?
            </motion.h2>
            <motion.p 
              className="text-xl text-left text-text-gray mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre el calzoncillo que mejor se ajusta a tus medidas; perdón, a tus necesidades
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {styles.map((style, index) => (
                <StyleCard
                  key={style.id}
                  style={style}
                  onClick={() => handleStyleSelect(style)}
                />
              ))}
            </div>
          </>
        ) : (
          <SelectedStyle style={selectedStyle} onReset={handleReset} />
        )}
      </main>
      <footer className="text-center py-6 text-text-gray font-mono">
        Calzoncillos Chicago @ 2024
      </footer>
    </div>
  );
};

export default Index;