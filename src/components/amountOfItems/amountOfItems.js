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
		<div className='counter'>
			<span
				className={`btn btn-big ${amount === 1 ? 'disable' : ''}`}
				onClick={decrementAmount}>
				-
			</span>
			{amount}
			<span className='btn' onClick={incrementAmount}>
				+
			</span>
		</div>
	);
};

export default AmountOfItems;
