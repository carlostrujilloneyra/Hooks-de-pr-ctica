import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './multiple-hooks.css';

const MultipleCustomHooks = () => {

	const { counter, increment }  = useCounter(1);

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	const { author, quote } = (!loading && data.length > 0) && data[0];

	return (
    <div>
      <h2>BreakingBad useFetch</h2>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center" role="alert">
          Loading...
        </div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{author}</p>
          <footer className="blockquote-footer">{quote}</footer>
        </blockquote>
      )}

	  <button 
    className="btn btn-primary" 
	  onClick={ increment }
	  >Siguiente quote
	  </button>
    </div>
  );
}

export default MultipleCustomHooks;