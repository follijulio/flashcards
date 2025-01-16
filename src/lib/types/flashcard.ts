export type Nivel = {
  dificuldade: string;
  cor: string;
};

export type FlashCard = {
  materia: string;
  pergunta: string;
  resposta: string;
  nivel: Nivel;
};
