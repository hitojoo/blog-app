import { formatRichText } from "@/lib/utils";
import { type Article } from "@/lib/microcms";
import { PublishedDate } from "@/components/date";
import { TagList } from "@/components/tag-list";
import { Profile } from "@/components/profile";
import styles from "./article.module.css";

type Props = {
  data: Article;
};

export function Article({ data }: Props) {
  return (
    <main className="flex flex-col justify-between items-center">
      <h1 className="text-5xl font-extrabold mb-8">{data.title}</h1>
      <TagList tags={data.tags} />
      <p className="text-sm text-muted-foreground m-8 text-center">
        {data.description}
      </p>
      <div>
        {data.writer && (
          <div>
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
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
      <Profile writer={data.writer} />
    </main>
  );
}
