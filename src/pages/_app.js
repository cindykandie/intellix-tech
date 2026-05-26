import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="page-enter">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
