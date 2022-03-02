import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import StyleItem from '../styles/Item.styled';
import StyleContainer from '../styles/Container.styled';
import useForm from '../../hooks/useForm';
import './styles.scss';

// Estado inicial
// const initialState = [{
// 	id:new Date().getTime(),
// 	desc: 'Aprender React',
// 	done: false
// }];

const init = () => {
	// return [{
	// 	id:new Date().getTime(),
	// 	desc: 'Aprender React',
	// 	done: false
	// }];

	return JSON.parse(localStorage.getItem('todos')) || [] ;
}

const TodoApp = () => {

	const [ todos, dispatch ] = useReducer(todoReducer, [], init);

	// Efecto con el localStorage
	useEffect(() => {
		localStorage.setItem('todos',JSON.stringify(todos))
	}, [ todos ]);
	
	const [{ description }, handleInputChange, reset] = useForm({
		// Se relaciona con el description de name del input
		description: ''
	})
	
	const handleSubmit = (e) => {
		e.preventDefault();

		// Pequeña validación a la hora de registrar un campo
		if(description.trim().length <= 1){
			return ;
		}

		const newTodo = {
			id:new Date().getTime(),
			desc: description,
			done: false
		}

		const action = {
			type: 'add',
			payload: newTodo
		}
		
		dispatch(action);
		reset();
	}

	// Eliminar "todo (elemento)"
	const handelDelete = (todoId) => {
		
		const action = {
			type: 'delete',
			payload: todoId
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
							return <StyleItem key={id}> 
									<p>{desc}
									<button 
										className='btn btn-danger delete'
										onClick={ () => handelDelete(id) }
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
			 				name = 'description'
							className='form-control'
							placeholder='Aprender...'
							autoComplete='off'
							value={ description }
							onChange={handleInputChange}
							id = { 'input' }
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