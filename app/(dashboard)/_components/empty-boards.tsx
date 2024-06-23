import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="No results found" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create Your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your workflow
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  );
};
