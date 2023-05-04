import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		width: 1.5rem;
		height: 1.5rem;
		border: 0.1rem solid ${theme.colors.circleColor};
		border-radius: 50%;
		transition: all 300ms ease-in-out;
	`}
`;
