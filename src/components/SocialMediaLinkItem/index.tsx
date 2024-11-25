import { ISocialMediaLinkItem } from './ISocialMediaLinkItem';
import { socialMediaVariants } from './variants';

export function SocialMediaLinkItem({
  children,
  href,
  ariaLabel,
  variant = 'yellow',
}: ISocialMediaLinkItem) {
  return (
    <li
      className={`shadow-elevation-2 flex justify-center items-center rounded-full w-8 h-8 ${socialMediaVariants[variant]}`}
    >
      <a href={href} target='_blank' aria-label={ariaLabel} rel='noreferrer'>
        {children}
      </a>
    </li>
  );
}
