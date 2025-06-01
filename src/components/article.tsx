import { formatRichText } from "@/lib/utils";
import { type Article } from "@/lib/microcms";
import { PublishedDate } from "@/components/date";
import { TagList } from "@/components/tag-list";
import styles from "./article.module.css";

type Props = {
  data: Article;
};

export function Article({ data }: Props) {
  return (
    <main className="space-y-4 p-4">
      <div className="flex justify-end">
        <PublishedDate publishedAt={data.publishedAt || data.createdAt} />
      </div>
      <h1 className="text-4xl font-extrabold mb-8">{data.title}</h1>
      <TagList tags={data.tags} hasLink={false} />
      <p className="text-sm text-muted-foreground">{data.description}</p>
      <div></div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          className="w-[960px] h-auto mb-24"
        />
      </picture>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
}
