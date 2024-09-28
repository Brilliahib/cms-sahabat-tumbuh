interface GameTitleProps {
  title: string;
  type: string;
}

export default function GameTitle({ title, type }: GameTitleProps) {
  return (
    <>
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="md:text-2xl font-bold text-base ">{title}</h1>
        <p className="md:text-md text-muted-foreground">{type}</p>
      </div>
    </>
  );
}
