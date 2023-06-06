import styled, { css } from "styled-components";

const setSecondaryStyles = (theme, type) => {
	if (type === "secondary") {
		return css`
			padding: 1rem 0;
			border-radius: 0.2rem;
			background-color: ${theme.colors.taskBgColor};
			-webkit-box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);
			-moz-box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);
			box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);

			@media (min-width: 460px) {
				display: none;
			}
		`;
	}
};

export const Container = styled.div`
	${({ theme, type }) => css`
		gap: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		& .filtersParagraph {
			text-transform: capitalize;
			transition: 300ms all ease-in-out;
			color: ${theme.colors.circleColor};
		}

		& .filtersParagraph:hover {
			cursor: pointer;
			color: ${theme.colors.primaryTextColor};
		}

		& .filtersParagraph.active {
			color: ${theme.colors.activeColor};
		}

		@media (max-width: 460px) {
			display: ${type === "primary" ? "none" : "flex"};
		}

		${setSecondaryStyles(theme, type)}
	`}
`;
