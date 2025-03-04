import { cx } from "class-variance-authority";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  classNames?: string;
};

export const LinkCTA = ({ label, href, classNames }: Props) => {
  return (
    <Link
      href={href}
      passHref
      className={cx([
        "inline-block bg-zinc-600 rounded-full border-[1px] border-zinc-400 text-white px-4 py-2 drop-shadow-lg",
        classNames,
      ])}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="font-semibold">{label}</p>
        <span className="bg-[#7fcc03] w-[40px] h-[40px] flex justify-center items-center rounded-full text-black">
          →
        </span>
      </div>
    </Link>
  );
};
