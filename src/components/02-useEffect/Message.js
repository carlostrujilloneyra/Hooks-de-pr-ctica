import { useEffect } from "react";


const Message = () => {

	useEffect(() => {

		const mouseMouve = (e) => {
			const coors = {x: e.x, y: e.y}
		}

		window.addEventListener('mousemove', mouseMouve);
		
		return () => {
			window.removeEventListener('mousemove', mouseMouve);
		};
	
	}, []);
	
	return (
    <>
      <h3>Eres sorprendente!</h3>
    </>
  );
};

export default Message;
