import { styled } from "styled-components";

const UI = ({ className, children }) => (
	<div className={className}>{children}</div>
);
const Card = styled(UI)`
	width: 50%;
	padding: 2rem;
	border-radius: 1rem;
	background-color: #fff;
`;

export default Card;
