import { useRef } from 'react';
import '../03-examples/multiple-hooks.css';

const FocusScreen = () => {

	const inputRef = useRef();

	const handleClick = () => {
		// document.querySelector('input').select();
		inputRef.current.select();
	}
	
	return (
		<div>
      		<h1>Focus Screen</h1>
      		<hr />

      		<input 
			  ref={ inputRef }
			  className="form-control" 
			  placeholder="Su nombre" 
			/>

	  		<button 
			  className="btn btn-outline-primary mt-3"
			  onClick={ handleClick }
	  		>
				  Focus
	  		</button>
    	</div>
  );
}

export default FocusScreen;