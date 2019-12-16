import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const numCol = 20;

export const AVAILABLE_COLORS = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'indigo',
	'violet',
	'black',
	'white',
	'brown'
];

const initialState = {
	grid: [],
	selectedColor: AVAILABLE_COLORS[0]
};

const ADD_ROW = 'ADD_ROW';
const PICK_COLOR = 'PICK_COLOR';
const COLORIZE = 'COLORIZE';

export const addRow = () => ({
	type: ADD_ROW
});

export const pickColor = (color) => ({
	type: PICK_COLOR,
	color
});

export const colorize = (row, column) => ({
	type: COLORIZE,
	row,
	column
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ROW:
			//const numCol = state.grid[0].length;
			const newRow = Array(numCol).fill('');
			return { ...state, grid: [ ...state.grid, newRow ] };
		case PICK_COLOR:
			return { ...state, selectedColor: action.color };
		case COLORIZE:
			const newGrid = [ ...state.grid ];
			newGrid[action.row] = [ ...newGrid[action.row] ];
			newGrid[action.row][action.column] = state.selectedColor;
			return { ...state, grid: newGrid };
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
