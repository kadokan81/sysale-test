import React from 'react';
import './goldBtn.css';

const GoldButton = ({ children, size }) => {
	return (
		<button className={size === 'small' ? 'btn-gold-small' : 'btn-gold-medium'}>
			{children}
		</button>
	);
};

export default GoldButton;
