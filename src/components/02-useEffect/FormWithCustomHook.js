import useForm from '../../hooks/useForm';
import './effect.css';

const FormWithCustomHook = () => {

	// Usando el custom hook para el formulario

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: ''
	});

	const {name, email, password} = formValues;

	// Función al hacer click en enviar o apretar enter

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	}

	return (
		
	  <form onSubmit={ handleSubmit }>
	  <h1>FormWithCustomHook</h1>
	  <hr />

	  <div className='form-group'>
		  <input 
		  type="text" 
		  name="name"
		  className='form-control'
		  placeholder='Tu nombre'
		  autoComplete='off'
		  value={name}
		  onChange= {handleInputChange}
		  />
	  </div>

	  <div className='form-group'>
		  <input 
		  type="text" 
		  name="email"
		  className='form-control'
		  placeholder='email@gmail.com'
		  autoComplete='off'
		  value={email}
		  onChange= {handleInputChange}
		  />
	  </div>

	  <div className='form-group'>
		  <input 
		  type="password" 
		  name="password"
		  className='form-control'
		  placeholder='*****'
		  value={password}
		  onChange= {handleInputChange}
		  />
	  </div>

	  <button type="submit" className='btn btn-primary'>Enviar</button>

	  </form>
  )
}

export default FormWithCustomHook;