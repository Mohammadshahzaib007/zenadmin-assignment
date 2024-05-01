import { twMerge } from "tailwind-merge";

type PropTypes = {
  className?: string;
  children: React.ReactNode;
};

function Container(props: PropTypes) {
  const { className, children } = props;
  return <div className={twMerge("mx-auto max-w-[80rem] px-4", className)}>{children}</div>;
}

export default Container;
