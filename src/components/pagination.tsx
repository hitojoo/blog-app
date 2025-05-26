import Link from "next/link";
import { LIMIT } from "@/constants";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export function Pagination({
  totalCount,
  current = 1,
  basePath = "",
  q,
}: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map(
    (_, i) => i + 1
  );
  return (
    <ul className="flex items-center justify-center p-4 mt-8">
      {pages.map((p) => (
        <li key={p} className="mx-4">
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : "")}
              className="flex justify-center items-center w-9 h-9 rounded"
            >
              {p}
            </Link>
          ) : (
            <span className="flex justify-center items-center w-9 h-9 rounded bg-slate-100">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
