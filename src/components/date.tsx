import { Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

type Props = {
  date: string;
};

export function PublishedDate({ date }: Props) {
  return (
    <span className="flex gap-2 text-muted-foreground text-sm items-center">
      <Clock size={20} />
      {formatDate(date)}
    </span>
  );
}
