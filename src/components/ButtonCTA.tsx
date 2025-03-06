import { cx } from "class-variance-authority";
type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  classNames?: string;
};

export const ButtonCTA = ({ label, onClick, disabled, classNames }: Props) => {
  return (
    <button
      className={cx([
        "flex cursor-pointer w-fit text-white items-center gap-2 rounded-xl border border-white/[0.14] bg-stone-900 hover:bg-stone-950 transition px-3 py-1 text-sm",
        disabled && "opacity-50 cursor-not-allowed",
        classNames,
      ])}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      {label}
    </button>
  );
};
