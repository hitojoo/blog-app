import Link from "next/link";

export function Header() {
  return (
    <header className="p-4 space-y-2">
      <h1 className="text-2xl font-bold">
        <Link href="/">スコーン日記</Link>
      </h1>
      <p className="text-sm text-muted-foreground">
        IT技術系の情報を中心に書き留めます。フロントエンド中心です。
      </p>
    </header>
  );
}
