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
    description: "Para quienes siempre tienen algo que contar y algo que mostrar. Espacio extra para historias largas y necesidades aún más largas.",
    phrases: [
      "Porque cuando crece la historia también necesitas un poco más de espacio.",
      "El ajuste perfecto para los narradores que nunca saben cuándo parar.",
      "Diseñado para quienes siempre dejan a los demás con la boca abierta por sus cuentos, claro.",
      "Ideal para quien necesita que todo esté en su sitio aunque nunca lo esté.",
      "Largo Milano porque a veces las cosas no dejan de crecer.",
      "Si tu creatividad necesita espacio imagina lo demás.",
      "Diseñado para quienes saben que lo largo siempre llama la atención.",
      "Porque mentir es un arte y este calzoncillo es la obra maestra.",
      "Perfecto para esos días en que todo se siente más largo.",
      "Cuando lo que tienes merece espacio, Largo Milano lo tiene todo."
    ],
    color: "bg-card",
    icon: <div className="mt-5 w-8 h-20 bg-text-white rounded-full animate-float transform rotate-90" />,
  },
  {
    id: "grande-luxe",
    name: "Grande Luxe",
    description: "Para los que necesitan espacio para todo lo que llevan. Un lujo para quienes saben que el tamaño sí importa.",
    phrases: [
      "Grande Luxe porque aquí las cosas no se esconden, se destacan.",
      "Diseñado para quienes saben que todo es mejor en tamaño XL.",
      "Perfecto para quien siempre tiene más que ofrecer.",
      "Porque el lujo no es solo una opción, es una necesidad.",
      "Grande Luxe porque lo extraordinario necesita soporte premium.",
      "Diseñado para grandes movimientos y grandes momentos.",
      "El ajuste perfecto para quienes nunca viajan ligeros.",
      "Ideal para los que siempre piensan en grande y no solo piensan.",
      "Porque lo bueno se lleva pero lo grande se disfruta.",
      "Cuando sabes que el espacio extra nunca está de más, Grande Luxe está contigo."
    ],
    color: "bg-card",
    icon: (
      <div className="mt-5 flex gap-2">
        <div className="w-8 h-8 bg-text-white rounded-full animate-float" />
        <div className="w-8 h-8 bg-text-white rounded-full animate-float" />
      </div>
    ),
  },
  {
    id: "silhouette-noir",
    name: "Silhouette Noir",
    description: "Para los que no hacen ruido pero siempre dejan huella. Discreción elegante para quien sabe sorprender.",
    phrases: [
      "El misterio que siempre lleva a algo más interesante.",
      "Silhouette Noir discreción máxima, estilo absoluto.",
      "Diseñado para quienes saben que lo bueno se esconde hasta que no puede más.",
      "Ligero, cómodo y tan tentador como lo que llevas debajo.",
      "Para los que prefieren moverse en silencio pero dejar huella.",
      "Porque el misterio siempre atrae más de lo que imaginas.",
      "Silhouette Noir el arte de lo sutil con un toque atrevido.",
      "El calzoncillo que dice tranquilo pero poderoso.",
      "Para quien prefiere lo discreto pero nunca lo aburrido.",
      "Porque lo que no se muestra siempre intriga más."
    ],
    color: "bg-card",
    icon: <div className="mt-5 w-12 h-12 bg-text-white rounded-full animate-pulse-slow" />,
  },
  {
    id: "rocket-deluxe",
    name: "Rocket Deluxe",
    description: "Para quienes siempre están listos para despegar y nunca fallan al aterrizar. Velocidad, estilo y energía, todo en uno.",
    phrases: [
      "Rocket Deluxe porque hay misiones que no pueden esperar.",
      "Cuando necesitas estar listo en 3, 2, 1 este calzoncillo es para ti.",
      "Diseñado para quienes no solo llegan rápido sino con estilo.",
      "Perfecto para quienes siempre tienen combustible de sobra.",
      "Porque aquí no hablamos de aterrizar, hablamos de llegar alto, muy alto.",
      "El modelo que acompaña cada misión importante o la más atrevida.",
      "Rocket Deluxe tan cómodo que querrás usarlo hasta para dormir pero no podrás.",
      "Para los que siempre apuntan alto sin importar el desafío.",
      "Porque la cuenta regresiva siempre termina en algo explosivo.",
      "Listo para despegar y siempre aterrizando en el lugar correcto."
    ],
    color: "bg-card",
    icon: (
      <div className="mt-5 relative w-16 h-16">
        <div className="absolute bottom-0 left-[30%] -translate-x-1/2 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43.3px] border-text-white transform rotate-45 animate-rocket" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
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
