import { type Article } from "@/lib/microcms";
import { ArticleListItem } from "@/components/article-list-item";

type Props = {
  articles?: Article[];
};

export function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="flex flex-col gap-8">
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
