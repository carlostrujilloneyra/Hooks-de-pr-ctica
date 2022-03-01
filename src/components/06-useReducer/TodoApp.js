import { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';
import './styles.scss';

// Estado inicial
const initialState = [{
	id:new Date().getTime(),
	desc: 'Aprender React',
	done: false
}];

const TodoApp = () => {
	// const [state, dispatch] = useReducer(reducer, initialState, init);

	// Forma más simple
	const [ todos ] = useReducer(todoReducer, initialState);
	console.log(todos)
	return (
		<div>
			<h1>TodoApp ({ todos.length })</h1>
			<hr/>

			<ul>
				{
					todos.map(todo => {
						const { id, desc, done } = todo;
						return <li key={id}>{desc}</li> ;
					})
				}
			</ul>
		</div>
  )
}

export default TodoApp;