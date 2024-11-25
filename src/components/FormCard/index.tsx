import { HTMLAttributes } from 'react';

export function FormCard({
  className = '',
  ...props
}: HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      className={`bg-white py-8 px-6 flex flex-col gap-8 rounded-2xl ${className}`}
    />
  );
}
