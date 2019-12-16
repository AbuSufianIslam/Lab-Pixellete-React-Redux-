import React from 'react';
import store, { colorize } from '../store';

export default class TableCell extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(row, col) {
		store.dispatch(colorize(row, col));
	}
	render() {
		const { cellIndex, color, rowIndex } = this.props;
		return <td className={color} onClick={() => this.handleClick(rowIndex, cellIndex)} />;
	}
}
