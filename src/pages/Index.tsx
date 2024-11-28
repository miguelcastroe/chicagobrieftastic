import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Home, ArrowRight } from "lucide-react";
import { toast } from "sonner";

type Style = {
  id: string;
  name: string;
  description: string;
  phrases: string[];
  color: string;
  icon: JSX.Element;
};

const styles: Style[] = [
  {
    id: "largo-milano",
    name: "Largo Milano",
    description: "Para quienes tienen historias largas de contar",
    phrases: [
      "Tan largo como tus anécdotas de viernes por la noche",
      "Porque las mejores historias necesitan espacio",
      "Como tu lista de conquistas: largo y memorable",
    ],
    color: "bg-card",
    icon: <div className="w-20 h-8 bg-text-white rounded-full animate-float" />,
  },
  {
    id: "grande-luxe",
    name: "Grande Luxe",
    description: "Para los que necesitan espacio porque siempre traen algo grande",
    phrases: [
      "Porque lo bueno viene en paquetes grandes",
      "Espacio de lujo para tus grandes ambiciones",
      "Cuando necesitas ese extra de confianza",
    ],
    color: "bg-card",
    icon: (
      <div className="flex gap-2">
        <div className="w-8 h-8 bg-text-white rounded-full animate-float" />
        <div className="w-8 h-8 bg-text-white rounded-full animate-float" />
      </div>
    ),
  },
  {
    id: "silhouette-noir",
    name: "Silhouette Noir",
    description: "Para los que buscan discreción máxima pero siempre sorprenden",
    phrases: [
      "Misterioso por fuera, sorprendente por dentro",
      "La discreción nunca se vio tan bien",
      "Para los que guardan los mejores secretos",
    ],
    color: "bg-card",
    icon: <div className="w-16 h-16 bg-text-white rounded-full animate-blob" />,
  },
  {
    id: "rocket-deluxe",
    name: "Rocket Deluxe",
    description: "Siempre listos para despegar en 3... 2... 1",
    phrases: [
      "¡Preparado para el despegue!",
      "Alcanza nuevas alturas con cada movimiento",
      "Para los que siempre apuntan alto",
    ],
    color: "bg-card",
    icon: (
      <div className="relative w-16 h-16">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-text-white transform rotate-45 animate-rocket" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-text-white rounded-full animate-rocket" />
      </div>
    ),
  },
];

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
    setCurrentPhraseIndex(0);
  };

  const handleNextPhrase = () => {
    if (selectedStyle) {
      setCurrentPhraseIndex((prev) => 
        (prev + 1) % selectedStyle.phrases.length
      );
    }
  };

  const handleShare = () => {
    if (selectedStyle) {
      navigator.clipboard.writeText(
        `¡Descubrí que mi estilo es ${selectedStyle.name} en Chicago Briefs Matcher! 🩲✨`
      );
      toast.success("¡Link copiado al portapapeles!");
    }
  };

  const handleReset = () => {
    setSelectedStyle(null);
    setCurrentPhraseIndex(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        {!selectedStyle ? (
          <>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-8 text-text-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Cuál es tu estilo?
            </motion.h1>
            <motion.p 
              className="text-xl text-center text-text-gray mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre el calzón que mejor se ajusta a ti y a tus necesidades
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {styles.map((style, index) => (
                <motion.div
                  key={style.id}
                  className={`style-card ${style.color} text-white h-64 flex flex-col justify-between`}
                  onClick={() => handleStyleSelect(style)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="style-icon mb-4">{style.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                    <p className="text-white/90">{style.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`${selectedStyle.color} p-8 rounded-2xl mb-8 text-white`}>
              <div className="mb-6">{selectedStyle.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{selectedStyle.name}</h2>
              <p className="text-xl mb-6">{selectedStyle.phrases[currentPhraseIndex]}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleNextPhrase}
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
                  onClick={handleReset}
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
        )}
      </main>
      <footer className="text-center py-6 text-text-gray font-mono">
        Calzoncillos Chicago @ 2024
      </footer>
    </div>
  );
};

export default Index;