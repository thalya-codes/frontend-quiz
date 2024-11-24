import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownContent } from './DropdownContent';
import { DropdownItem } from './DropdownItem';
import { DropdownAvatar } from './DropdownAvatar';
import { Link } from 'react-router';

export function Dropdown() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className='focus:outline-none'>
        <DropdownAvatar fullname='Thalya Stéffany Coimbra Alonso' />
      </DropdownMenuPrimitive.Trigger>

      <DropdownContent>
        <DropdownItem>
          <Link to={'/'}>Item 1</Link>
        </DropdownItem>

        <DropdownItem>
          <Link to={'/'}>Item 2</Link>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenuPrimitive.Root>
  );
}
