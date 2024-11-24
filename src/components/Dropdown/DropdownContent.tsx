import {
  Portal,
  Content,
  DropdownMenuContentProps,
} from '@radix-ui/react-dropdown-menu';

export function DropdownContent({
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <Portal>
      <Content
        sideOffset={sideOffset}
        className='z-50 min-w-[8rem] outline-none overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
        {...props}
      />
    </Portal>
  );
}
