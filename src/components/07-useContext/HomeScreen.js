import { useContext } from "react";
import { UserContext } from "./UserContext";


const HomeScreen = () => {
  // Para tener acceso al user que cree en MainApp:

  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
}

export default HomeScreen;