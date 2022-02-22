import './counter.css';

const CounterWithCustomHook = () => {
  return (
	  <>
	  <h1>Counter with Hook: {0}</h1>
	  <hr />

	  <button className="btn"> +1 </button>
	  <button className="btn"> -1 </button>
	  </>
  )
}

export default CounterWithCustomHook;