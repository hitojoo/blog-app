import { getList } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import { Pagination } from "@/components/pagination";
import { ArticleList } from "@/components/article-list";

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
