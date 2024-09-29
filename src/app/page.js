"use client";

import MyDatePicker from './components/DatePicker';
import RecurrenceOptions from './components/RecurrenceOptions';
import { useDatePickerStore } from './store';

export default function Home() {
  const { startDate, recurrence, setStartDate, setRecurrence } = useDatePickerStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">Date Picker with Recurrence</h1>

        <div className="mb-6">
          <MyDatePicker onDateChange={setStartDate} />
        </div>

        <div className="mb-6">
          <RecurrenceOptions onRecurrenceChange={setRecurrence} />
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-2">Selected Start Date: <span className="font-medium">{startDate ? startDate.toLocaleDateString() : "None"}</span></p>
          <p>Recurrence: <span className="font-medium">{JSON.stringify(recurrence)}</span></p>
        </div>
      </div>
    </div>
  );
}
