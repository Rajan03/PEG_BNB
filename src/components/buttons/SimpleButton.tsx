"use client";

type Props = {
  action?: string;
  clickHandler: () => void;
  className?: string;
  children?: React.ReactNode;
};

const SimpleButton = (props: Props) => {
  return (
    <button
      onClick={() => props.clickHandler()}
      className={`bg-primary-600 border-none outline-none rounded-sm px-5 py-3 
      text-white text-2xl font-light tracking-wider ${props.className}`}
    >
      {props.children || props.action}
    </button>
  );
};

export default SimpleButton;
