"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <section>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </section>
  );
};
