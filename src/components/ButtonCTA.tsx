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
        "bg-zinc-600 rounded-full border-[1px] border-zinc-400 text-white px-4 py-2 drop-shadow-md",
        classNames,
      ])}
      onCanPlay={onClick}
      disabled={disabled}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="font-semibold">{label}</p>
        <span className="bg-[#7fcc03] px-2 py-1 rounded-full text-black">
          →
        </span>
      </div>
    </button>
  );
};
