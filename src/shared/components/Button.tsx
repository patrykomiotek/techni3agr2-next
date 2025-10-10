import { ComponentPropsWithRef } from "react";

type Props = {
  children: string;
} & ComponentPropsWithRef<"button">;

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button className="bg-slate-600 text-slate-300" {...rest}>
      {children}
    </button>
  );
};
