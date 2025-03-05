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
        "group relative inline-flex w-fit cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3",
        classNames,
      ])}
    >
      <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
        {label}
      </span>
      <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
      <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-lime-500 p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </span>
    </Link>
  );
};
