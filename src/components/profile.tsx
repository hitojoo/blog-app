import { type Writer } from "@/lib/microcms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { env } from "@/env";
import { Button } from "./ui/button";

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
        <Avatar className="w-16 h-16">
          <AvatarImage src={writer?.image?.url} alt="@nexu3510"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-sm text-slate-500">{writer?.name}</p>
          <Link href={env.X_PROFILE_URL} target="_blank">
            <Button variant="ghost" size="icon">
              <svg
                viewBox="0 0 1200 1227"
                xmlns="http://www.w3.org/2000/svg"
                role="none"
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">{writer?.profile}</p>
      </div>
    </div>
  );
}
