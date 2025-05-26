import { type Tag } from "@/lib/microcms";
import { TagList } from "@/components/tag-list";
import { SearchField } from "@/components/search-field";
import { Suspense } from "react";

export function Navigation({ tags }: { tags: Tag[] }) {
  return (
    <nav className="flex flex-col gap-8 justify-center my-12">
      <Suspense
        fallback={
          <input type="search" className="loading" placeholder="Loading..." />
        }
      >
        <SearchField />
      </Suspense>
      <TagList tags={tags} />
    </nav>
  );
}
