import React from 'react';
import AddNote from '../../components/AddNote';
import NoteList from '../../components/NoteList';

const NotesPage: React.FC = () => {
  return (
    <main>
      <h1>Notes</h1>
      <AddNote />
      <NoteList />
    </main>
  );
};

export default NotesPage;