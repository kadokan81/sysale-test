import React, { useState } from 'react';
import CheckIcon from '../icon/CheckIcon';
import './dropDownComponent.css';
const DropDownComponent = () => {
	const [list, setList] = useState(false);
	const [color, setColor] = useState('Цвет ');
	const colors = ['Желтый', 'Красный', 'Зеленый'];

	const onSelectHAndler = (color) => {
		setColor(color);
		setList(false);
	};
	return (
		<div className='dd-wrapper'>
			<div className='dd-header'>
				<div className='dd-header-title' onClick={() => setList(!list)}>
					{color}{' '}
					<span
						style={{
							display: 'inline-block',
							transform: [{ rotate: list ? '180deg' : '-180deg' }],
						}}>
						<CheckIcon />
					</span>
				</div>
			</div>
			{list && (
				<div className='dd-list'>
					{colors.map((ell, ind) => (
						<div
							className='dd-list-item'
							onClick={() => onSelectHAndler(ell)}
							key={ind}>
							{ell}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDownComponent;
