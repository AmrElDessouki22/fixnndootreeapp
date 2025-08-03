"use client";

import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const AddNote: React.FC = () => {
  const { addNote } = useNotes();
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addNote(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;