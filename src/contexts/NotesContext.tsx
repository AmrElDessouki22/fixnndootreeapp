"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NotesContextProps {
  notes: string[];
  addNote: (note: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextProps => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
