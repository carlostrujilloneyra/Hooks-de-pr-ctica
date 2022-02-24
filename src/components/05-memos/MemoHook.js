import { useEffect, useMemo, useState } from 'react';
import { ProcesoPesado } from '../../helpers/ProcesoPesado';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

const MemoHook = () => {

	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);
	
	const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [ counter ]);
	
	
	return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>{" "}
      </h3>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-primary ms-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
}

export default MemoHook;