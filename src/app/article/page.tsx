import NavHeader from "@/components/atoms/headers/NavHeader";
import ArticleList from "@/components/organism/article/ArticleList";

export default function ArticlePage() {
  return (
    <>
      <NavHeader title="Artikel" />
      <ArticleList />
    </>
  );
}
