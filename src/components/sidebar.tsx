import type { Writer, Tag } from "@/lib/microcms";
import React, { Suspense } from "react";
import { TagList } from "@/components/tag-list";
import { Profile } from "@/components/profile";
import { SearchField } from "@/components/search-field";
import { Search, Tag as TagIcon, UserPen } from "lucide-react";

type TitleProps = {
  name: string;
  icon: React.ReactElement;
};

type SidebarProps = {
  writer: Writer;
  tags: Tag[];
};

const Title = ({ name, icon }: TitleProps) => {
  return (
    <div className="flex gap-2 items-center mb-4 text-slate-800">
      {icon}
      <p className="font-bold">{name}</p>
    </div>
  );
};

export const Sidebar = ({ writer, tags }: SidebarProps) => {
  return (
    <div className="w-[240px] space-y-12 bg-white">
      {/* 検索 */}
      <div>
        <Title name="Search" icon={<Search />} />
        <Suspense
          fallback={
            <input type="search" className="loading" placeholder="Loading..." />
          }
        >
          <SearchField />
        </Suspense>
      </div>

      {/* プロフィール */}
      <div>
        <Title name="Profile" icon={<UserPen />} />
        <Profile writer={writer} />
      </div>

      {/* タグ */}
      <div>
        <Title name="Tags" icon={<TagIcon />} />
        <TagList tags={tags} />
      </div>
    </div>
  );
};
