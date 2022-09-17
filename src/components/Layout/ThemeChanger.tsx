import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function ThemeChanger() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [componentDidMount, setComponentDidMount] = useState(false);

  useEffect(() => {
    setComponentDidMount(true);
  }, []);

  if (!componentDidMount) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const buttonStyle =
    'p-2 rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 group';
  const iconStyle = 'w-6 h-6 group-hover:text-teal-500 dark:group-hover:text-teal-400';
  if (currentTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')} className={buttonStyle}>
        <SunIcon className={iconStyle} />
      </button>
    );
  }
  return (
    <button onClick={() => setTheme('dark')} className={buttonStyle}>
      <MoonIcon className={iconStyle} />
    </button>
  );
}

export default ThemeChanger;
