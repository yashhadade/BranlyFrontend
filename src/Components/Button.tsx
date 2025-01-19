import { ReactElement } from "react";

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600"
};

const sizeStyle = {
  sm: " py-1 px-2",
  md: " py-2 px-4",
  lg: " py-4 px-6"
};

const defaultStyle = "rounded-md ml-2";

export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, endIcon, onClick } = props;

  return (
    <button
      className={`${variantStyle[variant]} ${sizeStyle[size]} ${defaultStyle} flex items-center`}
      onClick={onClick}
    >
      {startIcon && <span className="pr-2">{startIcon}</span>}
      {text}
      {endIcon && <span className="pl-2">{endIcon}</span>}
    </button>
  );
};
