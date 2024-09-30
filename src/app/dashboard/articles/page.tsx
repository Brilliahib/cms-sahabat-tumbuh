import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import ArticleList from "@/components/organism/article/ArticleList";

export default function DashboardArticlesPage() {
  return (
    <>
      <DashboardTitle title="Artikel" />
      <ArticleList />
    </>
  );
}
