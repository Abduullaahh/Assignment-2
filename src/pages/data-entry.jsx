import React from 'react';
import DataEntryForm from '../components/DataEntryForm';

const DataEntry = ({ onSubmit }) => {
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Portfolio</h1>
        <DataEntryForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default DataEntry;