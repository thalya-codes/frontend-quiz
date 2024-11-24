import { IThemeSwitcher } from './IThemeSwitcher';
import SunIcon from '@/assets/sun.svg';
import MoonIcon from '@/assets/moon.svg';

export function ThemeSwitcher({
  theme = 'light',
  toggleThemeMode,
}: IThemeSwitcher) {
  const isDarkMode: boolean = theme === 'dark';

  return (
    <div className='flex gap-2 items-center'>
      <SunIcon />
      <label
        className={`relative flex items-center transition-colors after:transition-all after:ease-in-out after:.20s w-12 h-6 rounded-[100px] after:absolute after:bg-white after:p-2  after:rounded-full ${isDarkMode ? 'after:translate-x-7 bg-chocolate' : 'after:translate-x-1 bg-translucent-chocolate shadow-elevation-1'}`}
        aria-label={`Habilitar dark mode? ${isDarkMode ? 'Sim' : 'Não'}`}
      >
        <input
          type='checkbox'
          className='translate-x-8 rounded-full hidden'
          onChange={({ target }) =>
            toggleThemeMode(target.checked ? 'dark' : 'light')
          }
        />
      </label>
      <MoonIcon />
    </div>
  );
}
