import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme, borderType }) => css`
		width: 100%;
		color: ${theme.colors.primaryTextColor};
		border: 1px solid
			${borderType === "primary"
				? theme.colors.primaryTextColor
				: theme.colors.borderColor};

		border-radius: 0.3rem;
		padding: 1rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	`}
`;

export const Label = styled.label`
	width: 100%;
`;

export const Paragraph = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.primaryTextColor};
		font-weight: ${theme.fontWeights.bold};
		margin-bottom: 0.5rem;
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		border: none;
		color: ${theme.colors.primaryTextColor};
		background-color: transparent;
		width: 100%;
		outline: none;

		&::placeholder {
			color: ${theme.colors.primaryTextColor};
		}
	`}
`;
