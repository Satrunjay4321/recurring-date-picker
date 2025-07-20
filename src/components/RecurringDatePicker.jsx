import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import IntervalSelector from './IntervalSelector';
import DayOfWeekSelector from './DayOfWeekSelector';
import MonthlyPatternSelector from './MonthlyPatternSelector';
import DateRangeSelector from './DateRangeSelector';
import CalendarPreview from './CalendarPreview';

const RecurringDatePicker = () => {
  return (
    <div className="space-y-6">
      <RecurrenceOptions />
      <IntervalSelector />
      <DayOfWeekSelector />
      <MonthlyPatternSelector />
      <DateRangeSelector />
      <CalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;
