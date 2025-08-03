import '../styles/globals.css';

import { NotesProvider } from '../context/NotesContext';

export const metadata = {
  title: 'Notes App',
  description: 'A simple notes app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}