'use client'; 

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const MyDatePicker = ({ selectedDates = [], setSelectedDates }) => { 
  const [showCalendar, setShowCalendar] = useState(false); 

  
  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  
  const handleDateChange = (date) => {
    if (!date) return;

    
    const dateString = date.toLocaleDateString();
    if (selectedDates.some(d => d.toLocaleDateString() === dateString)) {
      
      setSelectedDates(selectedDates.filter(d => d.toLocaleDateString() !== dateString));
    } else {
      
      setSelectedDates([...selectedDates, date]);
    }
  };

  
  const isSelectedDate = (date) => {
    return selectedDates.some(d => d.toLocaleDateString() === date.toLocaleDateString());
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <input
          type="text"
          className="border rounded-md p-2 pr-10"
          value={selectedDates.length > 0 ? selectedDates.map(date => date.toLocaleDateString()).join(', ') : 'Select Dates'} // Show selected dates or default text
          onClick={handleIconClick} 
          readOnly
        />
        <span
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleIconClick}
        >
          <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
        </span>
      </div>
      {showCalendar && (
        <div className="mt-2">
          <DatePicker
            selected={null} 
            onChange={handleDateChange} 
            inline 
            dayClassName={(date) => {
              const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
              const isSelected = isSelectedDate(date);
              return (
                isToday ? 'bg-blue-300 text-white' : 
                isSelected ? 'bg-green-300' : 
                undefined
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyDatePicker;
