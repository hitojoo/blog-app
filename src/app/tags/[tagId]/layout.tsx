import { getTag } from "@/lib/microcms";
import { TagListItem } from "@/components/tag-list-item";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    tagId: string;
  }>;
};

export default async function TagsLayout(props: Props) {
  const params = await props.params;

  const { children } = props;

  const { tagId } = params;
  const tag = await getTag(tagId);
  return (
    <div>
      <p className="mb-2">
        <TagListItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
