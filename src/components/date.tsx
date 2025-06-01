import { formatDate } from "@/lib/utils";

type Props = {
  publishedAt: string;
};

export function PublishedDate({ publishedAt }: Props) {
  return (
    <div className="flex gap-4">
      <span className="flex gap-2 text-muted-foreground text-xs items-center">
        {formatDate(publishedAt)}
      </span>
    </div>
  );
}
