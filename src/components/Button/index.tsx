import { buttonVariants } from './variants';
import { IButton } from './IButton';

export function Button({
  className = '',
  variant = 'purple',
  ...props
}: IButton) {
  return (
    <button
      {...props}
      className={`w-full  font-quicksand font-bold transition-all ease-in-out hover:bg-opacity-90 text-white tracking-1 shadow-elevation-2 rounded-lg py-4 uppercase text-center ${buttonVariants[variant]} ${className}`}
    />
  );
}
