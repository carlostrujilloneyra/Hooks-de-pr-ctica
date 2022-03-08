import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
  return (

	<Router>
		{/* Se recomienda el div o un fragment */}
		<div>
			<NavBar/>
			{/* Mostramos las rutas */}
			<Routes>
				{/* Ruta */}
				<Route path = "/" element= {<HomeScreen/>} />
				<Route path = "/about" element= {<AboutScreen/>} />
				<Route path = "/login" element= {<LoginScreen/>} />
				{/* Cuando no haya ruta se ejecuta lo de abajo: */}
				<Route path='*' element= {<HomeScreen/>} />
			</Routes>
		</div>
	</Router>
  )
}

export default AppRouter;
