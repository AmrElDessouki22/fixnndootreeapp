import React from 'react';
import '../globals.css';
import { NotesProvider } from '../contexts/NotesContext';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

export const metadata = {
  title: 'Note App',
  description: 'A simple note-taking application.',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NotesProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </NotesProvider>
  );
};

export default RootLayout;
