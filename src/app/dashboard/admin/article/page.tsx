import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import ArticleAdminList from "@/components/organism/admin/article/ArticleAdminList";

export default function DashboardAdminArticle() {
  return (
    <>
      <DashboardTitle title="Artikel" />
      <ArticleAdminList />
    </>
  );
}
