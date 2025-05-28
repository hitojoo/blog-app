import Link from "next/link";
import { type Tag } from "@/lib/microcms";
import { Badge } from "@/components/ui/badge";

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Badge variant="secondary" className="hover:bg-slate-300 duration-300">
        <Link href={`/tags/${tag.id}`}>#{tag.name}</Link>
      </Badge>
    );
  }
  return <Badge variant="secondary">#{tag.name}</Badge>;
}
