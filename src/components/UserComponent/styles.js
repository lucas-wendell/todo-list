import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media (max-width: 768px) {
		gap: 0.5rem;
	}
`;

export const ProfileContainer = styled.div`
	${({ theme }) => css`
		padding: 0.2rem;
		background-color: ${theme.colors.primaryTextColor};
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		& .buttonDiv {
			position: absolute;
			background-color: ${theme.colors.circleColor};
			width: 100%;
			height: 100%;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			transition: all 300ms ease-in-out;

			button {
				background: none;
				border: none;
				cursor: pointer;
				color: ${theme.colors.errorColor};
			}

			&:hover {
				opacity: 0.8;
			}
		}

		.onErrorIcon {
			color: ${theme.colors.taskBgColor};
		}

		& > img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

		@media (max-width: 768px) {
			width: 4rem;
			height: 4rem;

			.buttonDiv {
				display: none;
			}
		}

		@media (max-width: 768px) {
			width: 3rem;
			height: 3rem;
		}
	`}
`;

export const TextContainer = styled.div`
	p {
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		p {
			font-size: 1.1rem;
		}

		h1 {
			font-size: 1.6rem;
		}
	}

	@media (max-width: 768px) {
		p {
			font-size: 0.8rem;
		}

		h1 {
			font-size: 1.4rem;
		}
	}
`;
