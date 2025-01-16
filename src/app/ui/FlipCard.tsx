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
        <Card className="flip-card-front">
          <p>
            {flashcard.pergunta}
          </p>
        </Card>
        <Card className="flip-card-back">
          <p>
            {flashcard.resposta}
          </p>
        </Card>
      </div>
    </div>
  );
};

const Card: React.FC<cardProps> = ({ className, children }) => {
  return (
    <div
      className={` w-full h-full border-2 rounded-xl border-white  ${className}`}
    >
      {children}
    </div>
  );
};

export default FlipCard;
