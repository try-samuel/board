import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </main>
  );
};

export default BoardIdPage;
