import styled, { css } from "styled-components";

export const Button = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primaryTextColor};
		background-color: ${theme.colors.activeColor};
		width: 100%;
		padding: 1rem 0;
		cursor: pointer;
		border-radius: 0.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.09rem;
		font-weight: ${theme.fontWeights.bold};
		color: ${theme.colors.primaryTextColor};
		font-size: 1.2rem;
		position: relative;
		transition: 1s linear;

		&:hover {
			background-color: transparent;
		}

		&::before {
			content: "";
			position: absolute;
			top: -2px;
			left: -2px;
			width: 0;
			height: 0;
			background: transparent;
			border: 2px solid transparent;
			border-radius: 0.4rem;
		}

		&:hover::before {
			animation: animate 1s linear forwards;
		}

		@keyframes animate {
			0% {
				width: 0;
				height: 0;
				border-top-color: ${theme.colors.primaryTextColor};
				border-right-color: transparent;
				border-bottom-color: transparent;
				border-left-color: transparent;
			}

			50% {
				width: 100%;
				height: 0;
				border-top-color: ${theme.colors.primaryTextColor};
				border-right-color: ${theme.colors.primaryTextColor};
				border-bottom-color: transparent;
				border-left-color: transparent;
			}

			100% {
				width: 100%;
				height: 100%;
				border-top-color: ${theme.colors.primaryTextColor};
				border-right-color: ${theme.colors.primaryTextColor};
				border-bottom-color: transparent;
				border-left-color: transparent;
			}
		}

		&::after {
			content: "";
			position: absolute;
			top: -2px;
			left: -2px;
			width: 0;
			height: 0;
			background: transparent;
			border: 2px solid transparent;
			border-radius: 0.4rem;
		}

		&:hover::after {
			animation: animates 1s linear forwards;
		}

		@keyframes animates {
			0% {
				width: 0;
				height: 0;
				border-top-color: transparent;
				border-right-color: transparent;
				border-bottom-color: transparent;
				border-left-color: ${theme.colors.primaryTextColor};
			}

			50% {
				width: 0;
				height: 100%;
				border-top-color: transparent;
				border-right-color: transparent;
				border-bottom-color: ${theme.colors.primaryTextColor};
				border-left-color: ${theme.colors.primaryTextColor};
			}

			100% {
				width: 100%;
				height: 100%;
				border-top-color: transparent;
				border-right-color: transparent;
				border-bottom-color: ${theme.colors.primaryTextColor};
				border-left-color: ${theme.colors.primaryTextColor};
			}
		}
	`}
`;
