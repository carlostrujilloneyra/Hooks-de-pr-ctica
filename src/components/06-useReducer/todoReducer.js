import { initialState } from "./TodoApp";


export const todoReducer = (state =  initialState, action) => {
	switch (action.type) {
		case ('add'):
		return [...state, action.payload];
		
		default:
			return state;
	}

}