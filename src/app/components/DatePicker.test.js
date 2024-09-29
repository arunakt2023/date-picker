import { render, screen, fireEvent } from '@testing-library/react';
import MyDatePicker from './DatePicker';

test('renders the date picker', () => {
  render(<MyDatePicker selectedDates={[]} setSelectedDates={jest.fn()} />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

test('shows selected dates when a date is clicked', () => {
  const setSelectedDates = jest.fn();
  render(<MyDatePicker selectedDates={[]} setSelectedDates={setSelectedDates} />);
  
  
});