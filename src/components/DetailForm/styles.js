import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

export const Paragraph = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.borderColor};
		font-weight: 700;
	`}
`;

export const Line = styled.div`
	${({ theme }) => css`
		height: 2px;
		width: 100%;
		background-color: ${theme.colors.borderColor};
	`}
`;
