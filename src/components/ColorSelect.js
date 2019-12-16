import React from 'react';

const ColorSelect = (props) => {
	const { colors, onChange, selectedColor } = props;
	return (
		<select onChange={onChange} value={selectedColor}>
			{colors.map((color) => (
				<option key={color} value={color}>
					{color}
				</option>
			))}
		</select>
	);
};

export default ColorSelect;
