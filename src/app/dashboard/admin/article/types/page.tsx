import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import ArticleTypeList from "@/components/organism/admin/article/ArticleTypesList";

export default function DashboardAdminArticleTypes() {
  return (
    <>
      <DashboardTitle title="Tipe Artikel" />
      <ArticleTypeList />
    </>
  );
}
