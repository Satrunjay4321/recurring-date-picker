import React from 'react';
import useRecurrenceStore from '../store/useRecurrenceStore';

const IntervalSelector = () => {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const interval = useRecurrenceStore((s) => s.interval);
  const setInterval = useRecurrenceStore((s) => s.setInterval);

  const labelMap = {
    daily: 'day(s)',
    weekly: 'week(s)',
    monthly: 'month(s)',
    yearly: 'year(s)',
  };

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-3">⏱️ Interval</h2>
      <div className="flex items-center gap-4">
        <label htmlFor="interval" className="font-medium">
          Every
        </label>
        <input
          id="interval"
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value || 1))}
          className="w-20 p-2 bg-gray-800 border border-gray-600 rounded text-white text-center"
        />
        <span className="text-gray-300">{labelMap[frequency]}</span>
      </div>
    </div>
  );
};

export default IntervalSelector;
