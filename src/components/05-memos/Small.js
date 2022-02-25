import React from "react";

const Small = React.memo(( {value} ) => {

  console.log('Ejecutando el componente hijo');

  return (
	<h3> { value } </h3>
  )
})

console.log(Small)

export default Small;