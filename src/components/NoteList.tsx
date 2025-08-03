"use client";

import React from 'react';
import { useNotes } from '../context/NotesContext';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem key={note.id} id={note.id} content={note.content} />
      ))}
    </div>
  );
};

export default NoteList;