import { twMerge } from "tailwind-merge";

type PropTypes = {
  title: string;
  className?: string;
};

function Tag(props: PropTypes) {
  const { title, className } = props;
  return (
    <div
      className={twMerge(
        "text-xs border border-[#0E612C] bg-[rgba(14,97,44,0.1)] px-1.5 py-0.5 rounded",
        className
      )}
    >
      {title}
    </div>
  );
}

export default Tag;
