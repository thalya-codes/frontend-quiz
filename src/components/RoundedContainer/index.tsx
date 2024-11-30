import { IRoundedContainer } from './IRoundedContainer';
import { roundedContainerVariants } from './variants';

export const RoundedContainer = ({
  type = 'default',
  variant = 'white',
  children,
  className = '',
}: IRoundedContainer) => {
  return (
    <div
      className={`
        w-full h-full p-5 rounded-xl shadow-elevation-1 text-chocolate font-quicksand
        ${roundedContainerVariants[variant]} ${type === 'icon' ? 'w-14 w- h-12 font-bold' : ''}        
        ${className}
      `}
    >
      {children}
    </div>
  );
};
