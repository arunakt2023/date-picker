import { create } from 'zustand';

export const useDatePickerStore = create((set) => ({
  startDate: new Date(),
  recurrence: { type: 'daily', every: 1, dayOfWeek: [], nthDayOfMonth: 1 },
  setStartDate: (date) => set({ startDate: date }),
  setRecurrence: (recurrence) => set({ recurrence }),
}));
