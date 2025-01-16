"use client";

import { FlashCard } from "@/lib/types/flashcard";
import { useState } from "react";

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
        <Card className="flip-card-front flex flex-col">
          <div className="w-full flex justify-between items-center"> 
          <h2>
            {flashcard.materia}
          </h2>
          <span className={`h-4 w-10 rounded-full bg-[#ffffff] flex justify-center items-center text-xs text-black`}>{flashcard.nivel.dificuldade}</span>
          </div>
          <p>
            {flashcard.pergunta} - FRENTE
          </p>
        </Card>
        <Card className="flip-card-back">
          <p>
            {flashcard.resposta} - FUNDO  
          </p>
        </Card>
      </div>
    </div>
  );
};

const Card: React.FC<cardProps> = ({ className, children }) => {
  return (
    <div
      className={` w-full h-full border-2 rounded-xl border-white bg-gradient-to-tr from-blue-900 to-slate-600 p-12 text-white text-3xl select-none ${className}`}
    >
      {children}
    </div>
  );
};



export default FlipCard;
