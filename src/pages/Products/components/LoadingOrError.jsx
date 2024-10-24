import React from 'react';

const LoadingOrError = ({ loading, error }) => {
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  return null;
};

export default LoadingOrError;