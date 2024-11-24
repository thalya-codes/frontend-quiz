type ThemeVariants = 'light' | 'dark'

export interface IThemeSwitcher {
    theme:  ThemeVariants 
    toggleThemeMode: (theme:ThemeVariants) => void
}