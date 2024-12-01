import GoogleLogo from '@/assets/google-logo.svg';
import GithubLogo from '@/assets/github-logo.svg';
import { Typography } from '@/components/Typography';
import { IThirdPartyConnectionSection } from './IThirdPartyConnectionSection';

export const ThirdPartyConnectionSection = ({
  text,
  googleSupportText,
  githubSupportText,
}: IThirdPartyConnectionSection) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <Typography size='sm' className='font-medium'>
        {text}
      </Typography>

      <div className='flex gap-4'>
        <button
          type='button'
          className='fill-chocolate w-6'
          title={googleSupportText}
        >
          <GoogleLogo />
        </button>

        <button
          type='button'
          className='fill-chocolate w-7'
          title={githubSupportText}
        >
          <GithubLogo />
        </button>
      </div>
    </div>
  );
};
