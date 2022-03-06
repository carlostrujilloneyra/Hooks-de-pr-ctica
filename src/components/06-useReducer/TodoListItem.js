import StyleItem from "../styles/Item.styled";

const TodoListItem = ({todo, index, handelDelete, handelToggle}) => {

	const {id, desc, done} = todo;
  
  return (
    
      <StyleItem key={id}>
        <p className={`${done && "complete"}`} onClick={() => handelToggle(id)}>
          {" "}
          {index + 1}. {desc}
          <button
            className="btn btn-danger delete"
            onClick={() => handelDelete(id)}
          >
            {" "}
            Eliminar
          </button>
        </p>
      </StyleItem>
  );
}

export default TodoListItem;


