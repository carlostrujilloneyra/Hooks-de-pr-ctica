import useFetch from '../../hooks/useFetch';
import './multiple-hooks.css';

const MultipleCustomHooks = () => {

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

	const { author, quote } = !!data && data[0];

	console.log(author, quote);


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
          <p>Hola Mundo</p>
          <footer className="blockquote-footer">Carlos</footer>
        </blockquote>
      )}
    </div>
  );
}

export default MultipleCustomHooks;