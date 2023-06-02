import styled from "styled-components";

export const Container = styled.div`
	width: 70%;
	max-width: 70rem;
	z-index: 10;
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 3rem;

	@media (max-width: 530px) {
		width: 80%;
	}
`;
