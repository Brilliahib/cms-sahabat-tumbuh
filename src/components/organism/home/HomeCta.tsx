import { Button } from "@/components/ui/button";

export default function HomeCta() {
  return (
    <>
      <div className="overflow-hidden relative p-4 py-8 bg-primary text-white rounded-xl">
        <div className="text-center flex flex-col items-center justify-center space-y-8">
          <h1 className="font-bold text-3xl">
            Tunggu Apalagi? Cobain Sekarang!
          </h1>
          <p className="max-w-xl">
            Kami percaya bahwa setiap anak berhak mendapatkan kesempatan yang
            sama untuk belajar, bermain, dan berkembang dengan cinta dan
            dukungan penuh. Bergabunglah dengan Sahabat Tumbuh untuk pengalaman
            yang penuh inspirasi dan kebahagiaan.
          </p>
          <Button variant={"secondary"}>Coba Sekarang</Button>
        </div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="50"
            ></circle>
            <circle
              cx="446"
              r="39"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="20"
            ></circle>
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              stroke-opacity="0.08"
              stroke-width="12"
            ></path>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="50"
            ></circle>
            <circle
              cx="446"
              r="39"
              stroke="white"
              stroke-opacity="0.04"
              stroke-width="20"
            ></circle>
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              stroke-opacity="0.08"
              stroke-width="12"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
}
