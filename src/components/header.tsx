import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border border-b-2 bg-slate-800">
      <Link href="/">
        <h1 className="text-2xl font-bold text-white">シンプルなブログ</h1>
      </Link>
    </header>
  );
}
