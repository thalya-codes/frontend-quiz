import { InputHTMLAttributes } from 'react';

export function Input({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`focus:outline-none relative z-10 w-full rounded-md  bg-medium-purple text-chocolate font-quicksand font-medium text-base tracking-1 px-6 py-3 placeholder:text-chocolate placeholder:text-opacity-70 ${className}`}
    />
  );
}
