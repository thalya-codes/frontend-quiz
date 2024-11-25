import { Dropdown } from '../Dropdown/Dropdown';
import { ThemeSwitcher } from '../ThemeSwitcher';

export function Header() {
  return (
    <header className='px-20 flex justify-end items-center gap-6'>
      <ThemeSwitcher theme={'light'} toggleThemeMode={(theme) => {}} />

      <Dropdown />
    </header>
  );
}
