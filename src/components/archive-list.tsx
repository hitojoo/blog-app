import { ArchiveListItem } from "./archive-list-item";

type Props = {
  monthlyCounts: {
    totalCount: number;
    month: string;
  }[];
};

export function ArchiveList({ monthlyCounts }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {monthlyCounts.map((count) => (
        <li key={count.month}>
          <ArchiveListItem totalCount={count.totalCount} month={count.month} />
        </li>
      ))}
    </ul>
  );
}
