import styled, { css } from "styled-components";

export const Button = styled.button`
	${({ theme }) => css`
		gap: 1rem;
		width: 100%;
		display: flex;
		padding: 1rem 0;
		align-items: center;
		border-radius: 0.3rem;
		justify-content: center;
		background-color: transparent;
		color: ${theme.colors.primaryTextColor};
		border: 1px solid ${theme.colors.borderColor};
	`}
`;
