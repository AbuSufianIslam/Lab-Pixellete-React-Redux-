import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
	return (
		<table>
			<tbody>
				{props.grid.map((row, rowIndex) => <TableRow key={rowIndex} rowIndex={rowIndex} row={row} />)}
			</tbody>
		</table>
	);
};

export default Table;
