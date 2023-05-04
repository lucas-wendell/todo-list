import styled, { css } from "styled-components";

export const Label = styled.label`
	${({ theme }) => css`
		width: 100%;
		padding: 1rem;
		border-radius: 0.2rem;
		background-color: ${theme.colors.taskBgColor};

		display: flex;
		align-items: center;
		gap: 1rem;
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		background-color: transparent;
		outline: none;
		border: none;
		color: ${theme.colors.primaryTextColor};
		caret-color: ${theme.colors.activeColor};

		&::placeholder {
			color: ${theme.colors.primaryTextColor};
		}

		&:focus::-webkit-input-placeholder {
			color: transparent;
		}
	`}
`;
