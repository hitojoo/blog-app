import { Metadata } from "next";
import { getList } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import { Pagination } from "@/components/pagination";
import { ArticleList } from "@/components/article-list";

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  return {
    title: "「" + searchParams.q + "」の検索結果",
    openGraph: {
      title: "「" + searchParams.q + "」の検索結果",
    },
    alternates: {
      canonical: `/search/p/${params.current}?q=${searchParams.q}`,
    },
  };
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/search"
        q={searchParams.q}
      />
    </>
  );
}
