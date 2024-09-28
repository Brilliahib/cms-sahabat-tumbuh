import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface DialogStartGameProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number;
}

export default function DialogStartGame({
  open,
  setOpen,
  id,
}: DialogStartGameProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Mulai Game?</DialogTitle>
            <DialogDescription>
              Bermain game sekarang, Anda harus menyelesaikan game tersebut.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">
              <Link href={`/dashboard/games/${id}`}>Mulai Sekarang</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
