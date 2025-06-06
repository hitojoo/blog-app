"use client";

import { useCallback, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export function SearchField() {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === "Enter" && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing]
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  return (
    <input
      type="search"
      name="q"
      ref={inputRef}
      placeholder="記事を検索..."
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
      className="p-2 border rounded-md flex border-slate-400 text-sm w-full"
    />
  );
}
