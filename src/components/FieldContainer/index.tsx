import { HTMLAttributes } from 'react';

export function FieldContainer({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`flex flex-col gap-1 ${className}`} />;
}
