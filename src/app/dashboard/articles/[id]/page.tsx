import ArticleDetail from "@/components/organism/article/ArticleDetail";

interface ArticleDetailProps {
  params: { id: number };
}

export default function GameDetailPage({ params }: ArticleDetailProps) {
  return (
    <>
      <ArticleDetail id={params.id} />
    </>
  );
}
