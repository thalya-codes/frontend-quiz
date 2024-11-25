import { Item } from '@radix-ui/react-dropdown-menu';
import { IDropdownItem } from './IDropdown';

export function DropdownItem({ inset, ...props }: IDropdownItem) {
  return (
    <Item
      className={`relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        ${inset && 'pl-8'}`}
      {...props}
    />
  );
}
