import React from 'react';
import RecurringDatePicker from './components/RecurringDatePicker';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">📅 Recurring Date Picker</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-2xl p-6">
        <RecurringDatePicker />
      </div>
    </div>
  );
}

export default App;
