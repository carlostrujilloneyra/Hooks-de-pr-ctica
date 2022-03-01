const initialState = [{
	id:1,
	tarea:'Comprar pan',
	done: false
}];


const todoReducer = (state = initialState, action) => {

	if(action?.type === 'agregar'){
		return [...state, action.payload];
	}

	return state;
}

let todos = todoReducer();
console.log(todos)

const newTodo ={
	id:2,
	tarea: 'Comprar leche',
	done: false
} 

const agregarTodoAction = {
	type:'agregar',
	payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos);