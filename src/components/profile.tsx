import { type Writer } from "@/lib/microcms";

type Props = {
  writer?: Writer;
};

export function Profile({ writer }: Props) {
  if (!writer) {
    return null;
  }
  return (
    <div>
      <picture>
        <source
          type="image/webp"
          srcSet={`${writer?.image?.url}?fm=webp&fit=crop&96&h=96 1x, ${writer?.image?.url}?fm=webp&fit=crop&w=96&h=96&dpr=2 2x`}
        />
        <img
          src={writer?.image?.url}
          alt=""
          width={writer?.image?.width}
          height={writer?.image?.height}
        />
      </picture>
      <div>
        <p>{writer?.name}</p>
        <p>{writer?.profile}</p>
      </div>
    </div>
  );
}
