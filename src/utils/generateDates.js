// utils/generateDates.js
import { addDays, addWeeks, addMonths, addYears, isBefore, parseISO } from 'date-fns';

export default function generateDates({ frequency, interval, startDate, endDate }) {
  const dates = [];
  if (!startDate || !interval) return [];

  let current = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : addMonths(current, 3); // fallback 3 months

  while (isBefore(current, end) || current.toDateString() === end.toDateString()) {
    dates.push(new Date(current));

    if (frequency === 'daily') current = addDays(current, interval);
    else if (frequency === 'weekly') current = addWeeks(current, interval);
    else if (frequency === 'monthly') current = addMonths(current, interval);
    else if (frequency === 'yearly') current = addYears(current, interval);
    else break;
  }

  return dates;
}
