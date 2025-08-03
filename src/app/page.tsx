import React from 'react';
import NoteList from '../components/NoteList';

const Page: React.FC = () => {
  return (
    <main>
      <h1>Notes</h1>
      <NoteList />
    </main>
  );
};

export default Page;