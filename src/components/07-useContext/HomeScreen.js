import { useContext } from "react";
import { UserContext } from "./UserContext";


const HomeScreen = () => {
  // Para tener acceso al user que cree en MainApp:

  // const userContext = useContext(UserContext);
  
  const { user } = useContext(UserContext);

  const {id, name, job} = user;

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <h3>Id:{ id }</h3>
      <h3>Name: { name } </h3>
      <h3>Job:{ job }</h3>
    </div>
  );
}

export default HomeScreen;