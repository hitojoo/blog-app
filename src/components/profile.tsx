import { type Writer } from "@/lib/microcms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  writer?: Writer;
};

export function Profile({ writer }: Props) {
  if (!writer) {
    return null;
  }
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={writer?.image?.url} sizes=""></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold">{writer?.name}</p>
      </div>
      <p className="text-sm text-muted-foreground">{writer?.profile}</p>
    </div>
  );
}
