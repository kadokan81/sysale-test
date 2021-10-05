import React from 'react';
import './customRadioButton.css';

const CustomRadioButton = ({ lable, nameProps }) => {
	const [checked, setChecked] = React.useState(lable === 100 ? true : false);
	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<label className='container'>
			{lable} мл
			<input
				checked={checked}
				onChange={handleChange}
				type='radio'
				name={nameProps}
				value={lable}
			/>
			<span className='checkmark'></span>
		</label>
	);
};

export default CustomRadioButton;
