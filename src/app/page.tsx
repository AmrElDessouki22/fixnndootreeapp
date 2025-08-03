import React from 'react';
import Notes from '../components/features/Notes';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <Notes />
    </div>
  );
};

export default HomePage;
