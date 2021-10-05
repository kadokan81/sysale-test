import { render, fireEvent } from '@testing-library/react';
import AmountOfItems from './amountOfItems';
// encrementButton
test('test increment component', () => {
	// expect(screen.getByText(/1/i)).toBeInTheDocument();
	const { getByText, getByTestId } = render(<AmountOfItems />);
	const countDiv = getByText(/1/i);
	expect(countDiv).toBeInTheDocument();
	const encrButton = getByTestId('encrementButton');
	const result = getByTestId('result');
	expect(result).toBeInTheDocument();
	expect(result.innerHTML).toBe('1');
	fireEvent.click(encrButton);
	expect(result.innerHTML).toBe('2');
});
// decrementButton
test('decriment button', () => {
	const { getByTestId } = render(<AmountOfItems />);
	const result = getByTestId('result');
	expect(result).toBeInTheDocument();
	expect(result.innerHTML).toBe('1');
	const decBtn = getByTestId('decrementButton');
	expect(decBtn).toBeInTheDocument();
	expect(decBtn.innerHTML).toBe('-');
	const encrButton = getByTestId('encrementButton');
	fireEvent.click(encrButton);
	fireEvent.click(encrButton);
	expect(result.innerHTML).toBe('3');
	fireEvent.click(decBtn);
	expect(result.innerHTML).toBe('2');
});
