import { useTheme } from '@/context/ThemeContext';

const ToggleButton = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/50 bg-white/50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <img
        src={isDark ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg'}
        alt={isDark ? 'Light mode' : 'Dark mode'}
        className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
      />
    </button>
  );
};

export default ToggleButton;
