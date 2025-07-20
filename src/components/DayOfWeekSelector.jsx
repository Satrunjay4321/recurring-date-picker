import React from 'react';
import useRecurrenceStore from '../store/useRecurrenceStore';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DayOfWeekSelector = () => {
  const frequency = useRecurrenceStore((s) => s.frequency);
  const selectedDays = useRecurrenceStore((s) => s.selectedDays);
  const setSelectedDays = useRecurrenceStore((s) => s.setSelectedDays);

  if (frequency !== 'weekly') return null; // Show only for weekly

  const toggleDay = (day) => {
    const updated =
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day];
    setSelectedDays(updated);
  };

  return (
    <div className="bg-gray-700 p-4 rounded-xl shadow text-gray-100">
      <h2 className="text-lg font-semibold mb-3">📅 Select Weekdays</h2>
      <div className="flex flex-wrap gap-2">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium
              ${
                selectedDays.includes(day)
                  ? 'bg-blue-500 text-white shadow'
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-100'
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DayOfWeekSelector;
