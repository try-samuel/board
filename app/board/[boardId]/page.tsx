import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Canvas boardId={params.boardId} />
    </main>
  );
};

export default BoardIdPage;
