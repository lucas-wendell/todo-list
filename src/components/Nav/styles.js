import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.navColor};
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		.heading {
			letter-spacing: 0.8rem;
		}

		.iconContainer {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.7rem;
		}

		.iconContainer button {
			color: ${theme.colors.navColor};
			height: 1.5rem;
			background: none;
			border: none;

			& svg {
				cursor: pointer;
			}
		}

		.logOutButton {
			display: none;
		}

		@media (max-width: 768px) {
			.logOutButton {
				display: block;
			}
		}
	`}
`;
