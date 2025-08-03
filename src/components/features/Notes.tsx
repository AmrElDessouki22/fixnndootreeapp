"use client";

import React, { useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';
import Note from './Note';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Notes: React.FC = () => {
  const { notes, addNote } = useNotes();
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a new note"
        />
        <Button onClick={handleAddNote}>Add Note</Button>
      </div>
      <div>
        {notes.map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
