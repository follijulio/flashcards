"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import FlipCard from "@/app/ui/FlipCard";
import { useParams } from "next/navigation";

const mockQuestao = {
  materia: "História",
  pergunta:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum accusantium qui unde ipsam et ab soluta, officia dolorem, architecto pariatur esse modi quod distinctio repellat numquam dignissimos quidem. Soluta, eum!",
  resposta:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum accusantium qui unde ipsam et ab soluta, officia dolorem, architecto pariatur esse modi quod distinctio repellat numquam dignissimos quidem. Soluta, eum!",
  nivel: {
    dificuldade: "fácil",
    cor: "#186207"
  }
};

const page: React.FC = () => {
  const params = useParams();
  const materia = params.materia;
  if (materia) {
    console.log("HELLO");
  }

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <FlipCard flashcard={mockQuestao} />
    </div>
  );
};
export default page;
