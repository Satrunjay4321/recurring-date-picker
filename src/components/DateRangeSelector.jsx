import React from 'react';
import useRecurrenceStore from '../store/useRecurrenceStore';

const DateRangeSelector = () => {
  const startDate = useRecurrenceStore((s) => s.startDate);
  const endDate = useRecurrenceStore((s) => s.endDate);
  const setStartDate = useRecurrenceStore((s) => s.setStartDate);
  const setEndDate = useRecurrenceStore((s) => s.setEndDate);

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-3">📆 Date Range</h2>
      <div className="flex gap-6 flex-wrap">
        {/* Start Date */}
        <div className="flex flex-col">
          <label className="mb-1">Start Date</label>
          <input
            type="date"
            value={startDate || ''}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
            required
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="mb-1">End Date (Optional)</label>
          <input
            type="date"
            value={endDate || ''}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;
