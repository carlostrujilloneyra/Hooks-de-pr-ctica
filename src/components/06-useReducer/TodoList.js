import TodoListItem from "./TodoListItem";
import './styles.scss';

const TodoList = ({todos, handelDelete, handelToggle}) => {

	return (
		<ul>
		{
			todos.map((todo, index) => {
				return  < TodoListItem
				key = {todo.id}
				todo = {todo}
				index= {index}
				handelToggle = {handelToggle}
				handelDelete = {handelDelete}
				/>;
			})
		}
		</ul>
	);
}

export default TodoList;







