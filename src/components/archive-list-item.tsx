import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatMonth } from "@/lib/utils";

type Props = {
  totalCount: number;
  month: string;
};

export function ArchiveListItem({ totalCount, month }: Props) {
  return (
    totalCount !== 0 && (
      <div className="flex items-center">
        <Link href={`/archives/${month}`}>
          <Button variant="link">
            <p className="font-normal">
              {formatMonth(month)[0]}年{formatMonth(month)[1]}月
            </p>
          </Button>
        </Link>
        <Badge variant="outline">{totalCount}</Badge>
      </div>
    )
  );
}
