"use client";

import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

type NoteItemProps = {
  id: string;
  content: string;
};

const NoteItem: React.FC<NoteItemProps> = ({ id, content }) => {
  const { editNote, deleteNote } = useNotes();
  const [isEditing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEdit = () => {
    if (isEditing) {
      editNote(id, newContent);
    }
    setEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <p>{content}</p>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;