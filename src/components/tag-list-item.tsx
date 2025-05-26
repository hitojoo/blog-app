import Link from "next/link";
import { type Tag } from "@/lib/microcms";

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link
        className="bg-slate-200 p-1 text-xs border rounded-xl hover:bg-slate-300 duration-300"
        href={`/tags/${tag.id}`}
      >
        #{tag.name}
      </Link>
    );
  }
  return (
    <span className="bg-slate-200 p-1 text-xs border rounded-xl hover:bg-slate-300 duration-300">
      #{tag.name}
    </span>
  );
}
