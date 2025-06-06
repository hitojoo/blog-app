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
    <li className="list-none">
      <Link href={`/articles/${article.id}`}>
        <div className="flex gap-8 items-center p-4 border-b border-b-slate-300 pb-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
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
                className="h-[126px] w-[180px]"
              />
            </picture>
          ) : (
            <Image
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
              className="h-[126px] w-[180px]"
            />
          )}
          <dl className="space-y-2">
            <dd>
              <PublishedDate
                publishedAt={article.publishedAt || article.createdAt}
              />
            </dd>
            <dt className="text-2xl font-bold">{article.title}</dt>
            <dd>
              <TagList tags={article.tags} hasLink={false} />
            </dd>
            <dt className="text-muted-foreground text-sm text-wrap">
              {article.description}
            </dt>
          </dl>
        </div>
      </Link>
    </li>
  );
}
