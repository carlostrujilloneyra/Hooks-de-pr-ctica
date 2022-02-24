import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effect.css';

const RealExampleRef = () => {

	const [show, setShow] = useState(false);

  return (
	<div>
		<h3>RealExampkeRef</h3>
		<hr />

		{ show && <MultipleCustomHooks/> }

		<button 
			className="btn btn-primary mt-4"
			onClick={ () => {
				setShow( !show );
			} }
		>
			Show / Hide
		</button>
	</div>
  )
}

export default RealExampleRef;