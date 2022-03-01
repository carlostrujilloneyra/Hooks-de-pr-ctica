import { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';
import StyleItem from '../styles/Item.styled';
import './styles.scss';
import StyleList from '../styles/List.styled';

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

			<StyleList>
				{
					todos.map(todo => {
						const { id, desc, done } = todo;
						return <StyleItem key={id}>{desc}</StyleItem> ;
					})
				}
			</StyleList>
		</div>
  )
}

export default TodoApp;