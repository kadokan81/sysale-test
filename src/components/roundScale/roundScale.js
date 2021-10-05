import React, { useState } from 'react';
import CheckIcon from '../icon/CheckIcon';
import ScaleIcon from '../icon/ScaleIcon';
import './roundScale.css';

const RoundScale = () => {
	const [check, setCheck] = useState(false);
	return (
		<div className='circle' onClick={() => setCheck(!check)}>
			{check ? <CheckIcon /> : <ScaleIcon />}
		</div>
	);
};

export default RoundScale;
