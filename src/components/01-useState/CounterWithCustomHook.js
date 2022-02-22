import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

	const { state, increment, reset, decrement }= useCounter();
	
	return (
	  <>
	  <h1>Counter with Hook: {state}</h1>
	  <hr />

	  <button className="btn btn-primary" onClick={increment} > +1 </button>
	  <button className="btn btn-secondary" onClick={reset} > Reset </button>
	  <button className="btn btn-primary" onClick={decrement} > -1 </button>

	  </>
  )
}

export default CounterWithCustomHook;