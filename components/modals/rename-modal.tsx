import { useEffect, useState } from "react";
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

export const RenameModal = () => {
  const {} = UseApiMutation(api.board.update);
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

  const onSave = () => {
    // Add your save logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave();
          }}
          className="space-y-4"
        >
          <Input
            disabled={false}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for this board"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
