import InstagramLogo from '@/assets/instagram-logo.svg';
import LinkedInLogo from '@/assets/linkedin-logo.svg';
import GithubLogo from '@/assets/github-logo-code-hand-draw.svg';
import { SocialMediaLinkItem } from '@/components/SocialMediaLinkItem';

export function Footer() {
  return (
    <footer className='flex-col gap-4 sm:flex-row py-6 px-20 bg-translucent-white absolute bottom-0 w-full flex justify-between items-center'>
      <p className='w-full block text-center text-chocolate font-poppins text-base tracking-[6%]'>
        2024 © Todos os direitos reservados - Desenvolvido por{' '}
        <strong>Thalya Stéffany</strong>
      </p>

      <ul className='flex gap-4'>
        <SocialMediaLinkItem
          href='https://www.linkedin.com/in/thalya-steffany/'
          ariaLabel='Ir para o perfil no LinkedIn de Thalya'
          variant='mint'
        >
          <LinkedInLogo />
        </SocialMediaLinkItem>

        <SocialMediaLinkItem
          href='https://www.instagram.com/thalya.codes/'
          ariaLabel='Ir para o perfil no Instagram de Thalya'
          variant='yellow'
        >
          <InstagramLogo />
        </SocialMediaLinkItem>

        <SocialMediaLinkItem
          href='https://github.com/thalya-codes/'
          ariaLabel='Ir para o perfil no GitHub de Thalya'
          variant='peach'
        >
          <GithubLogo />
        </SocialMediaLinkItem>
      </ul>
    </footer>
  );
}
