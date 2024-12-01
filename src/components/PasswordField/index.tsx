import { usePassword } from '@/hooks/usePassword';
import { Label } from '@/components/Label';
import { Input } from '../Input';
import EyeOpenIcon from '@/assets/eye-open.svg';
import EyeCloseIcon from '@/assets/eye-close-solid.svg';
import { IPasswordField } from './IPasswordField';

export const PasswordField = ({ ...props }: IPasswordField) => {
  const {
    showPassword,
    passwordFieldType,
    passwordIconButtonSupportText,
    togglePasswordVisibility,
  } = usePassword();

  return (
    <>
      <Label htmlFor='password-field'>Senha</Label>

      <div className='relative'>
        <Input id='password-field' type={passwordFieldType} placeholder='****' {...props} />

        <button
          type='button'
          onClick={togglePasswordVisibility}
          className='w-5 fill-chocolate  absolute z-50 right-6 top-1/3'
          aria-label={passwordIconButtonSupportText}
          title={passwordIconButtonSupportText}
        >
          {showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    </>
  );
};
