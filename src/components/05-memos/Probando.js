import { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effect.css';
import Small from './Small';

const Probando = () => {
	
	const [show, setShow] = useState( false );

	const { counter, increment } = useCounter( 10 );

	return (
		<div>
			<h1>Probando</h1>
			< Small value = { counter }/>
			<hr />
			<button
				className="btn btn-primary"
				onClick={ increment }
			>Incrementar
			</button>

			<button
				className="btn btn-primary ms-2"
				onClick={ () => {
					setShow( !show )
				} }
			>Mostrar/Ocultar { JSON.stringify( show ) }
			</button>


		</div>
  )
}

export default Probando;