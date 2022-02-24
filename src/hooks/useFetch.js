import { useEffect, useRef, useState } from "react";


const useFetch = (url) => {

	const isMounted = useRef(true);

	useEffect(() => {
	
	  return () => {
		  isMounted.current = false;
	  }

	}, []);
	

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null
	});

	useEffect(() => {

		fetch(url)
		.then( resp => resp.json())
		.then(data => {
			
			if(isMounted.current){
				setState({
					data,
					loading: false,
					error: null
				});
			}
		})

	}, [url]);

	return state;
}

export default useFetch;