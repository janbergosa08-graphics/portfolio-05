'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type Theme } from './ThemeProvider';

const themeOptions: { value: Theme; label: string; Icon: typeof Moon }[] = [
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'system', label: 'System', Icon: Monitor },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-end p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:p-4 sm:pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div
        className="pointer-events-auto inline-flex flex-col items-center border border-line bg-panel/95 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur"
        aria-label="Theme preference"
        role="group"
      >
        {themeOptions.map(({ value, label, Icon }) => {
          const active = theme === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setTheme(value)}
              className={`theme-switcher-option group relative inline-flex h-8 w-8 items-center justify-center text-[11px] transition-[color,box-shadow] duration-200 ${
                active
                  ? 'theme-switcher-option--active shadow-[0_0_14px_var(--accent-glow)]'
                  : 'hover:shadow-[0_0_12px_var(--accent-glow)]'
              }`}
              aria-label={`${label} theme${active ? ', selected' : ''}`}
              aria-pressed={active}
              title={`${label} theme`}
            >
              <Icon
                className={`theme-switcher-icon h-3.5 w-3.5 shrink-0 transition-[fill,stroke-width] duration-200 ${
                  active ? 'fill-current stroke-[2.4]' : 'fill-none stroke-2'
                }`}
                aria-hidden
              />
              <span className="theme-switcher-tooltip pointer-events-none absolute right-full mr-2 whitespace-nowrap border border-line bg-panel px-2 py-1 text-[10px] opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                {label} theme{active ? ' (selected)' : ''}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
