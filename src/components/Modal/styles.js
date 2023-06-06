import styled, { css } from "styled-components";

const handleVisibilityChange = (visibility) => css`
	display: ${visibility ? "flex" : "none"};
`;

export const Container = styled.div`
	${({ isVisible }) => css`
		position: absolute;
		z-index: 20;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		align-items: center;
		justify-content: center;
		${handleVisibilityChange(isVisible)}
	`}
`;

export const ModalContainer = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.taskBgColor};
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		gap: 2rem;
		border-radius: 1rem;
		padding: 2rem;
		width: 60%;

		@media (max-width: 400px) {
			padding: 1.5rem;
		}
	`}
`;

export const ModalHeader = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		color: ${theme.colors.primaryTextColor};

		& h2 {
			text-transform: uppercase;
			letter-spacing: 0.15rem;
		}

		& svg {
			cursor: pointer;
		}
	`}
`;

export const ModalContent = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		color: ${theme.colors.primaryTextColor};
		text-align: center;

		& img {
			max-width: 30rem;
		}

		& h3 {
			margin-bottom: 1rem;
			font-size: 1.6rem;
		}

		& p {
			font-size: 1.2rem;
		}

		@media (max-width: 590px) {
			& img {
				max-width: 20rem;
			}
		}

		@media (max-width: 400px) {
			& img {
				max-width: 15rem;
			}
		}
	`}
`;
