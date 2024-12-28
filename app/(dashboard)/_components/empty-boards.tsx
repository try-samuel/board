"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = UseApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled cluster",
    })
      .then((id) => {
        toast.success("Cluster created successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create cluster");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="No results found" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">
        Create Your first cluster!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a cluster for your workflow
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Cluster
        </Button>
      </div>
    </div>
  );
};
