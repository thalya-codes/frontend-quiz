import { ITypography } from './ITypography';
import { typografyFontVariants, typografySizeVariants } from './variants';

export const Typography = ({
  as: Tag = 'p',
  fontType = 'primary',
  size = 'sm',
  className = '',
  children,
}: ITypography) => {
  return (
    <Tag
      className={`${typografySizeVariants[size]} ${typografyFontVariants[fontType]} ${className}`}
    >
      {children}
    </Tag>
  );
};
