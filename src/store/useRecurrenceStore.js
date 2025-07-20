import { create } from 'zustand';

const useRecurrenceStore = create((set) => ({
  frequency: 'daily', // daily | weekly | monthly | yearly
  interval: 1,        // every X days/weeks/months
  selectedDays: [],   // e.g. ['Monday', 'Wednesday']
  pattern: '',        // for monthly patterns like 2nd Tuesday
  startDate: null,
  endDate: null,
  generatedDates: [],

  // Setters
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setSelectedDays: (days) => set({ selectedDays: days }),
  setPattern: (pattern) => set({ pattern }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setGeneratedDates: (dates) => set({ generatedDates: dates }),
}));
export default useRecurrenceStore;
