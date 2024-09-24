import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function CardArticle() {
  return (
    <>
      <div className="space-y-4">
        <Card className="border-0 shadow-none">
          <CardContent className="flex gap-4 p-0">
            <CardHeader className="p-2 px-0 rounded-t-md">
              <Image
                src="/images/food.jpg"
                alt="Food"
                width={2070}
                height={1380}
                className="md:w-full max-w-[250px] max-h-[180px] object-cover rounded-md"
              />
            </CardHeader>
            <div className="w-full space-y-2">
              <h1 className="font-bold text-sm line-clamp-2">
                Makanan sehat untuk bayi anda yang kurang nafsu makan
              </h1>
              <p className="text-muted-foreground line-clamp-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni aspernatur earum. Quisquam asperiores autem
                laboriosam deserunt distinctio odit, similique, hic ea, delectus
                commodi mollitia. Dolor voluptas saepe dolorem sint.
              </p>
              <p className="text-muted-foreground text-sm">18 January, 2024</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-none">
          <CardContent className="flex gap-4 p-0">
            <CardHeader className="p-2 px-0 rounded-t-md">
              <Image
                src="/images/food.jpg"
                alt="Food"
                width={2070}
                height={1380}
                className="md:w-full max-w-[250px] max-h-[180px] object-cover rounded-md"
              />
            </CardHeader>
            <div className="w-full space-y-2">
              <h1 className="font-bold text-sm line-clamp-2">
                Makanan sehat untuk bayi anda yang kurang nafsu makan
              </h1>
              <p className="text-muted-foreground line-clamp-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni aspernatur earum. Quisquam asperiores autem
                laboriosam deserunt distinctio odit, similique, hic ea, delectus
                commodi mollitia. Dolor voluptas saepe dolorem sint.
              </p>
              <p className="text-muted-foreground text-sm">18 January, 2024</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-none">
          <CardContent className="flex gap-4 p-0">
            <CardHeader className="p-2 px-0 rounded-t-md">
              <Image
                src="/images/food.jpg"
                alt="Food"
                width={2070}
                height={1380}
                className="md:w-full max-w-[250px] max-h-[180px] object-cover rounded-md"
              />
            </CardHeader>
            <div className="w-full space-y-2">
              <h1 className="font-bold text-sm line-clamp-2">
                Makanan sehat untuk bayi anda yang kurang nafsu makan
              </h1>
              <p className="text-muted-foreground line-clamp-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni aspernatur earum. Quisquam asperiores autem
                laboriosam deserunt distinctio odit, similique, hic ea, delectus
                commodi mollitia. Dolor voluptas saepe dolorem sint.
              </p>
              <p className="text-muted-foreground text-sm">18 January, 2024</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
