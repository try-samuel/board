"use clients";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const onCopy = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Link copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopy}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
