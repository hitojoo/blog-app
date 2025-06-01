import { Metadata } from "next";
import { getList } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import { Pagination } from "@/components/pagination";
import { ArticleList } from "@/components/article-list";

type Props = {
  params: Promise<{
    month: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { month } = params;
  return {
    title: month,
    openGraph: {
      title: month,
    },
    alternates: {
      canonical: `/archivrs/${month}`,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { month } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `publishedAt[begins_with]${month}`,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath={`/archives/${month}`}
      />
    </>
  );
}
