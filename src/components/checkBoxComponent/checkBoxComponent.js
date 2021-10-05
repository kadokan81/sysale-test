import React from 'react';
import CustomRadioButton from '../customRadioButton/customRadioButton';

const CheckBoxComponent = ({ name }) => {
	const litrag = [100, 200, 300];
	return (
		<div style={{ marginTop: '70px', marginLeft: '20px' }}>
			{litrag.map((ell) => (
				<CustomRadioButton lable={ell} key={ell} nameProps={name} />
			))}
		</div>
	);
};

export default CheckBoxComponent;
