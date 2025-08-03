"use client";

import React from 'react';

const ErrorBoundary: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorBoundary;
