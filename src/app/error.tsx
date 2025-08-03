"use client";

import React from 'react';

const ErrorBoundary: React.FC = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  React.useEffect(() => {
    // Error listener or similar setup
    return () => {
      // Cleanup if needed
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;