import { useReducer } from 'react';
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
	
	// Forma más simple

	const [ todos, dispatch ] = useReducer(todoReducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id:new Date().getTime(),
			desc: 'Nueva tarea',
			done: false
		}

		const action = {
			type: 'add',
			payload: newTodo
		}

		dispatch(action);
	
	}

	return (
		<>
			<h1>TodoApp ({ todos.length })</h1>
			<hr/>

			<StyleContainer>
				<ul>
					{
						todos.map(todo => {
							const { id, desc, done } = todo;
							return <StyleItem key={id}> <p>{desc}
									<button 
										className='btn btn-danger delete'
									>	Eliminar
									</button>	
									</p>
							  	   </StyleItem> ;
							})
					
					}
				</ul>

				<div>
					<h4>Agregar TODO</h4>
					<hr />
					<form onSubmit={ handleSubmit }>
						<input type="text" 
							name="description" 
							className='form-control'
							placeholder='Aprender...'
							autoComplete='off'
						/>
						<button 
							className='btn btn-outline-primary mt-3 w-100'
							type='submit'
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