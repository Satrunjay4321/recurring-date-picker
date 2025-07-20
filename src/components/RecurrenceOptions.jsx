import React from 'react';
import useRecurrenceStore from '../store/useRecurrenceStore';

const options = ['daily', 'weekly', 'monthly', 'yearly'];

const RecurrenceOptions = () => {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const setFrequency = useRecurrenceStore((s) => s.setFrequency);

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-3">🔁 Recurrence Type</h2>
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setFrequency(option)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 
              ${
                frequency === option
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-600 hover:bg-gray-500'
              }
            `}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
