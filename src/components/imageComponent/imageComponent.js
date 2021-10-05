import React, { useState } from 'react';
import './imageComponent.css';

const ImageComponent = ({ srcs, srcOnHover, alt }) => {
	const [scale, setScale] = useState(false);
	return (
		<img
			className='mainImage'
			src={!scale ? srcs : srcOnHover}
			alt={alt}
			onMouseOver={() => {
				setScale(true);
			}}
			onMouseOut={() => {
				setScale(false);
			}}
		/>
	);
};

export default ImageComponent;
