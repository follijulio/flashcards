"use client";

import { FlashCard } from "@/lib/types/flashcard";
import { useState } from "react";
import { Nothing_You_Could_Do, Kalam } from "next/font/google";

const n = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"]
});

const k = Kalam({
  weight: "400",
  subsets: ["latin"]
});

interface FlipCardProps {
  flashcard: FlashCard;
}

interface cardProps {
  className: string;
  children: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card-container max-w-[70%] max-h-[90%]"
      onClick={handleClick}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <Card className="flip-card-front flex flex-col gap-8">
          <div className="w-full flex justify-between items-center ">
            <h2 className={`${n.className} text-6xl`}>
              {flashcard.materia}
            </h2>
            <span
              className={`h-10 w-28 flex justify-center items-center text-xl text-white `}
            >
              PERGUNTA
            </span>
          </div>
          <div className="flex justify-center items-center py-12">
            <p>
              {flashcard.pergunta} - FRENTE
            </p>
          </div>
        </Card>
        <Card className="flip-card-back flex flex-col gap-8">
          <div className="w-full flex justify-between items-center ">
            <h2 className={`${n.className} text-6xl`}>
              {flashcard.materia}
            </h2>
            <span
              className={`h-8 w-20 rounded-full  flex justify-center items-center text-xl text-white`}
            >
              RESPOSTA
            </span>
          </div>
          <div className="flex justify-center items-center py-12">
            <p>
              {flashcard.resposta} - FUNDO
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Card: React.FC<cardProps> = ({ className, children }) => {
  return (
    <div
      className={`w-full h-full border-2 rounded-xl border-white bg-gradient-to-tr from-[#12123f] to-[#0b0030] p-12 text-white text-3xl select-none ${k.className} ${className}`}
    >
      {children}
    </div>
  );
};

export default FlipCard;
