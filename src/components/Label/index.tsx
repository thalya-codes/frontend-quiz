import { LabelHTMLAttributes } from 'react';

export function Label({
  className = '',
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`font-quicksand font-bold text-sm text-chocolate tracking-1 uppercase ${className}`}
      {...props}
    />
  );
}
