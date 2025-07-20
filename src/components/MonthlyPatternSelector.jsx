import React from 'react';
import useRecurrenceStore from '../store/useRecurrenceStore';

const ordinals = ['1st', '2nd', '3rd', '4th', 'Last'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const MonthlyPatternSelector = () => {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const pattern = useRecurrenceStore((s) => s.pattern);
  const setPattern = useRecurrenceStore((s) => s.setPattern);

  if (frequency !== 'monthly') return null;

  const handleChange = (type, value) => {
    const updated = { ...pattern, [type]: value };
    setPattern(updated);
  };

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-3">📌 Monthly Pattern</h2>
      <div className="flex gap-4">
        {/* Ordinal Week Selector */}
        <select
          value={pattern?.week || ''}
          onChange={(e) => handleChange('week', e.target.value)}
          className="bg-gray-800 text-white p-2 rounded border border-gray-600"
        >
          <option value="">Select Week</option>
          {ordinals.map((ord) => (
            <option key={ord} value={ord}>{ord}</option>
          ))}
        </select>

        {/* Day Selector */}
        <select
          value={pattern?.day || ''}
          onChange={(e) => handleChange('day', e.target.value)}
          className="bg-gray-800 text-white p-2 rounded border border-gray-600"
        >
          <option value="">Select Day</option>
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthlyPatternSelector;
