import { type Tag } from "@/lib/microcms";
import { TagListItem } from "@/components/tag-list-item";

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className="flex flex-wrap gap-4">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}
