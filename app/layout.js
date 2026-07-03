import StyledComponentsRegistry from '../lib/registry';
import './globals.css';
import Script from 'next/script';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';
import { ThemeProvider } from '@/components/ThemeProvider';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Muhammad Sahil | Full Stack MERN Developer',
  description:
    'Portfolio of Muhammad Sahil, a Full Stack MERN Developer, Software Engineer, and AI instructor.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{__html: `(() => {
            try {
              const t = localStorage.getItem('theme');
              if (t) {
                document.documentElement.dataset.theme = t;
                if (t === 'dark') document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
              } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.dataset.theme = 'dark';
                document.documentElement.classList.add('dark');
              }
            } catch (e) { }
          })();`}}
        />
        <StyledComponentsRegistry>
          <CustomProvider>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </CustomProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
