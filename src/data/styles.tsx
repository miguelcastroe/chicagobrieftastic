import React from "react";
import { Style } from "../types/styles";

export const styles: Style[] = [
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
    icon: <div className="mt-5 w-8 h-20 bg-text-white rounded-full animate-float transform rotate-90" />
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
    )
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
    icon: <div className="mt-5 w-12 h-12 bg-text-white rounded-full animate-pulse-slow" />
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
        <div 
          className="absolute bottom-0 left-[30%] -translate-x-1/2 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43.3px] border-text-white transform rotate-45 animate-rocket" 
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} 
        />
      </div>
    )
  }
];
