import { FormEventHandler, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
  const { mutate, pending } = UseApiMutation(api.board.update);
  const { isOpen, onClose, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    if (isOpen) {
      setTitle(initialValues.title);
      document.body.style.pointerEvents = "auto"; // Ensure pointer events are enabled when modal is open
    }

    return () => {
      document.body.style.pointerEvents = "auto"; // Clean up pointer events style when modal is dismissed
    };
  }, [isOpen, initialValues.title]);

  const onSave: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({ id: initialValues.id, title })
      .then(() => {
        toast.success("Cluster renamed successfully");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename cluster");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit cluster title</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Enter a new title for this cluster
        </DialogDescription>
        <form onSubmit={onSave} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for this cluster"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
