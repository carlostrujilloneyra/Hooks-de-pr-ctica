import styled from "styled-components";

const StyleContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1,1fr);
	row-gap: 1.2rem;

	@media screen and (min-width: 900px){
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1.2rem;
		row-gap: 0;
	}
`;


export default StyleContainer;