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
      placeholder="Search..."
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
      className="p-4 border rounded-full flex border-slate-400"
    />
  );
}
