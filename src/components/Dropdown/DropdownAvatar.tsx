import { IDropdownAvatar } from './IDropdown';

export function DropdownAvatar({ fullname }: IDropdownAvatar) {
  const [firstName, secondName] = fullname.split('');
  const initials = (firstName[0] + secondName[0]).toUpperCase();

  return (
    <span className='font-quicksand bg-chocolate hover:bg-translucent-chocolate rounded-full box-content w-8 h-8 p-1  text-white  flex items-center justify-center'>
      {initials}
    </span>
  );
}
