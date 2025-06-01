import { formatMonth } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    month: string;
  }>;
};

export default async function ArchivesLayout(props: Props) {
  const params = await props.params;
  const { children } = props;
  const { month } = params;
  return (
    <div>
      <p className="font-bold mb-2">
        {formatMonth(month)[0]}年{formatMonth(month)[1]}月の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
