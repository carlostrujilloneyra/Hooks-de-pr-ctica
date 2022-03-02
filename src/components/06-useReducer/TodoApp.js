import { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';
import StyleItem from '../styles/Item.styled';
import StyleContainer from '../styles/Container.styled';
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
		<>
			<h1>TodoApp ({ todos.length })</h1>
			<hr/>

			<StyleContainer>
				<ul>
					{
						todos.map(todo => {
							const { id, desc, done } = todo;
							return <StyleItem key={id}> {desc}
									<button className='btn btn-danger delete'>Eliminar</button>	
							  	   </StyleItem> ;
							})
					
					}
				</ul>

				<div>
					<h4>Agregar TODO</h4>
					<hr />
					<form>
						<input type="text" 
							name="description" 
							className='form-control'
							placeholder='Aprender...'
							autoComplete='off'
						/>
						<button 
							className='btn btn-outline-primary mt-3 w-100'
						>
							Agregar
						</button>
						
					</form>
				</div>

			</StyleContainer>

		</>
  )
}

export default TodoApp;