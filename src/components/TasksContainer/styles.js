import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.taskBgColor};
		border-radius: 0.2rem;
		/* min-height: 20rem; */
		display: flex;
		flex-direction: column;
	`}
`;
