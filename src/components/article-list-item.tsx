import Link from "next/link";
import Image from "next/image";
import { type Article } from "@/lib/microcms";
import { TagList } from "@/components/tag-list";
import { PublishedDate } from "@/components/date";

type Props = {
  article: Article;
};

export function ArticleListItem({ article }: Props) {
  return (
    <li>
      <Link href={`/articles/${article.id}`} className="flex gap-4">
        {article.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <img
              src={article.thumbnail?.url || `/noimage.png`}
              alt=""
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
              className="h-auto w-60"
            />
          </picture>
        ) : (
          <Image
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            className="h-auto w-60"
          />
        )}
        <dl className="flex flex-col justify-between">
          <dt className="text-2xl font-bold">{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
