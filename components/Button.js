import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
border-color: ${props => (props.cart|props.back)?"var(--mainYellow)":"var(--mainWhite)"};
color: ${props => (props.cart|props.back)?"var(--mainYellow)":"var(--mainWhite)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
	background:${props =>(props.cart|props.back)?"var(--mainYellow)":"var(--mainWhite)"};;
	color:${props => (props.cart|props.back)?"var(--mainWhite)":"var(--mainYellow)"};
}
&:focus{
	outline: none;
}
`;