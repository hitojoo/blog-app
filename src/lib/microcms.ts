import {
  createClient,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { env } from "@/env";
import { notFound } from "next/navigation";

/**
 * Initialize Client SDK.
 * @see https://developers.microcms.io/docs/microcms-client-reference
 */
export const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});

// types
/** タグ */
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

/** ライター */
export type Writer = {
  name: string;
  profile: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

/** ブログ */
export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  writer?: Writer;
};

/** 記事 */
export type Article = Blog & MicroCMSContentId & MicroCMSDate;

/** ブログ一覧を取得 */
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blog",
      queries,
    })
    .catch(notFound);
  return listData;
};

/** 月別ブログ一覧を取得 */
export const getMonthlyArticles = (months: string[]) => {
  return months.map(async (month) => {
    const data = await client.getList<Article>({
      endpoint: "blog",
      queries: {
        limit: 100,
        filters: `publishedAt[begins_with]${month}`,
      },
    });
    return {
      totalCount: data.totalCount,
      month: month,
    };
  });
};

/** 記事の詳細を取得 */
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: "blog",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

/** タグの一覧を取得 */
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: "tags",
      queries,
    })
    .catch(notFound);

  return listData;
};

// タグの詳細を取得
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: "tags",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

/** ライターを取得 */
export const getWriter = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getList<Writer>({
      endpoint: "writers",
      queries,
    })
    .catch(notFound);

  return data;
};
