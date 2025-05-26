import { Metadata } from "next";
import { getList, getTag } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import { Pagination } from "@/components/pagination";
import { ArticleList } from "@/components/article-list";

type Props = {
  params: Promise<{
    tagId: string;
    name: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { tagId } = params;
  const tag = await getTag(tagId);
  return {
    title: tag.name,
    openGraph: {
      title: tag.name,
    },
    alternates: {
      canonical: `/tags/${params.tagId}`,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { tagId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  });
  // const tag = await getTag(tagId);
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  );
}
