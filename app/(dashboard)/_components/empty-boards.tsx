"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const createBoard = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    createBoard({
      orgId: organization.id,
      title: "Untitled board",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="No results found" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create Your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your workflow
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
