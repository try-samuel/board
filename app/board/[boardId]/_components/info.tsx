"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Tabseparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <section className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go To Dashboard" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="logo" height={28} width={28} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Cluster
            </span>
          </Link>
        </Button>
      </Hint>
      <Tabseparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <Tabseparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant={"board"}>
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </section>
  );
};

export const InfoSkeleton = () => {
  return (
    <section className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
