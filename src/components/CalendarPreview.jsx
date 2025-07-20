import React, { useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useRecurrenceStore from '../store/useRecurrenceStore';
import generateDates from '../utils/generateDates';

const CalendarPreview = () => {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const interval = useRecurrenceStore((s) => s.interval);
  const startDate = useRecurrenceStore((s) => s.startDate);
  const endDate = useRecurrenceStore((s) => s.endDate);

  const generatedDates = useMemo(() => {
    return generateDates({ frequency, interval, startDate, endDate });
  }, [frequency, interval, startDate, endDate]);

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-4">📅 Preview Calendar</h2>

      <div className="max-w-md mx-auto border border-gray-600 rounded-xl overflow-hidden bg-white">
        <Calendar
          tileClassName={({ date }) =>
            generatedDates.some(d => d.toDateString() === date.toDateString()) ? 'bg-purple-400 text-white rounded-lg' : ''
          }
        />
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Generated Dates:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {generatedDates.map((d, i) => (
            <li key={i}>{d.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPreview;
