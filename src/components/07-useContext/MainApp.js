import AppRouter from "./AppRouter";
import LoginScreen from "./LoginScreen";
import { UserContext } from "./UserContext";

 
 const MainApp = () => {

	const user = {
		id: 1234,
		name: 'Carlos',
		email: 'augusto21_20@hotmail.com'
	}

   return (
	   <UserContext.Provider value={ user }>
		   <AppRouter/>
	   </UserContext.Provider>
   )
 }
 
 export default MainApp;