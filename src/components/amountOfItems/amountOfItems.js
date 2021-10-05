import React, { useState } from 'react';
import './amountOfItems.css';

const AmountOfItems = () => {
	const [amount, setAmount] = useState(1);

	const decrementAmount = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		} else return;
	};
	const incrementAmount = () => {
		setAmount(amount + 1);
	};

	return (
		<div className='counter' data-testid='counter'>
			<span
				data-testid='decrementButton'
				className={`btn btn-big ${amount === 1 ? 'disable' : ''}`}
				onClick={decrementAmount}>
				-
			</span>
			<span data-testid='result'>{amount}</span>

			<span
				className='btn'
				onClick={incrementAmount}
				data-testid='encrementButton'>
				+
			</span>
		</div>
	);
};

export default AmountOfItems;
