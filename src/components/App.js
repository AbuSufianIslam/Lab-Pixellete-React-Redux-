import React from 'react';
import Table from './Table';
import store, { addRow, pickColor, AVAILABLE_COLORS } from '../store';
import ColorSelect from './ColorSelect';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
		this.handleColorChange = this.handleColorChange.bind(this);
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleColorChange(event) {
		store.dispatch(pickColor(event.target.value));
	}

	render() {
		return (
			<div id="pixelate">
				<h1>Pixelate</h1>
				<div>
					<button id="add-row" onClick={() => store.dispatch(addRow())}>
						Add a row
					</button>
					<ColorSelect
						colors={AVAILABLE_COLORS}
						onChange={this.handleColorChange}
						selectedColor={this.state.selectedColor}
					/>
				</div>
				<Table grid={this.state.grid} />
			</div>
		);
	}
}
