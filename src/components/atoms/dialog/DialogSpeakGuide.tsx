import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogCalculationGuideProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogSpeakGuide({
  open,
  setOpen,
}: DialogCalculationGuideProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Panduan Penggunaan</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              Fitur ini memungkinkan Anda untuk mendengar pengucapan huruf-huruf
              alfabet dengan mudah. Berikut adalah langkah-langkah untuk
              menggunakannya:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Ketik Kalimat:</strong> Gunakan kolom input untuk
                mengetikkan kalimat yang ingin Anda dengar.
              </li>
              <li>
                <strong>Ucapkan Kalimat:</strong> Setelah mengetik kalimat, klik
                tombol "Ucapkan" untuk mendengar pengucapan kalimat tersebut.
              </li>
              <li>
                <strong>Klik Huruf:</strong> Anda juga dapat langsung
                mendengarkan pengucapan huruf dengan mengklik huruf yang
                tersedia.
              </li>
            </ol>
            <p>Selamat mencoba!</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
