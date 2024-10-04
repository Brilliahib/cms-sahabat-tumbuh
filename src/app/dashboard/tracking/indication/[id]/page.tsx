import ArticleDetail from "@/components/organism/article/ArticleDetail";

interface IndicationDetailProps {
  params: { id: number };
}

export default function IndicationDetailPage({
  params,
}: IndicationDetailProps) {
  return (
    <>
      <ArticleDetail id={params.id} />
    </>
  );
}
