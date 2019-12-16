import React from 'react';
import TableCell from './TableCell';

const TableRow = (props) => {
	return (
		<tr>
			{props.row.map((color, cellIndex) => (
				<TableCell key={cellIndex} rowIndex={props.rowIndex} cellIndex={cellIndex} color={color} />
			))}
		</tr>
	);
};

export default TableRow;
