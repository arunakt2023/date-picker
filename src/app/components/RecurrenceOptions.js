"use client";

import React, { useState } from 'react';

const RecurrenceOptions = ({ onRecurrenceChange }) => {
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [customRecurrence, setCustomRecurrence] = useState({
    every: 1, 
    dayOfWeek: [], 
    nthDayOfMonth: 1, 
  });

  
  const handleRecurrenceTypeChange = (event) => {
    const type = event.target.value;
    setRecurrenceType(type);
    onRecurrenceChange({ type, customRecurrence });
  };

  
  const handleCustomChange = (field, value) => {
    const updatedRecurrence = { ...customRecurrence, [field]: value };
    setCustomRecurrence(updatedRecurrence);
    onRecurrenceChange({ type: recurrenceType, ...updatedRecurrence });
  };

  return (
    <div className="p-4">
      <label>Select Recurrence Pattern:</label>
      <select
        value={recurrenceType}
        onChange={handleRecurrenceTypeChange}
        className="border p-2 rounded mb-4"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      
      {recurrenceType === 'daily' && (
        <div>
          <label>Every X days:</label>
          <input
            type="number"
            min="1"
            value={customRecurrence.every}
            onChange={(e) => handleCustomChange('every', e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      )}

      {recurrenceType === 'weekly' && (
        <div>
          <label>Select Days of the Week:</label>
          <div className="flex space-x-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`day-${index}`}
                  value={day}
                  onChange={(e) => {
                    const newDays = [...customRecurrence.dayOfWeek];
                    if (e.target.checked) {
                      newDays.push(day);
                    } else {
                      const dayIndex = newDays.indexOf(day);
                      if (dayIndex > -1) newDays.splice(dayIndex, 1);
                    }
                    handleCustomChange('dayOfWeek', newDays);
                  }}
                />
                <label htmlFor={`day-${index}`}>{day}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === 'monthly' && (
        <div>
          <label>On the nth day of the month:</label>
          <input
            type="number"
            min="1"
            value={customRecurrence.nthDayOfMonth}
            onChange={(e) => handleCustomChange('nthDayOfMonth', e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      )}

      {recurrenceType === 'yearly' && (
        <div>
          <label>Every X years:</label>
          <input
            type="number"
            min="1"
            value={customRecurrence.every}
            onChange={(e) => handleCustomChange('every', e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
