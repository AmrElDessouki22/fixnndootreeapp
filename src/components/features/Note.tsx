"use client";

import React from 'react';

interface NoteProps {
  content: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
  return (
    <div className="border p-2 mb-2 rounded">
      {content}
    </div>
  );
};

export default Note;
