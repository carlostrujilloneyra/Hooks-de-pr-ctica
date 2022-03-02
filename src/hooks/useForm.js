import { useState } from "react";

const useForm = (initialState = {}) => {
	
	const [values, setValues] = useState(initialState);

	// Para resetear el input después de registrar
	const reset = () => {
		setValues(initialState);
	}

	// Aquí capta el valor del input o lo que vas escribiendo
	const handleInputChange = ({target}) => {

		setValues({
			...values,
			[target.name]: target.value
		});
	}

	return [ values, handleInputChange, reset ];

}

export default useForm;