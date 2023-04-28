import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.taskBgColor};
		width: 60%;
		max-width: 70rem;
		z-index: 100;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding: 3rem;
	`}
`;
