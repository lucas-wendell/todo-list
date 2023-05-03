import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		padding: 1.5rem;
		align-items: center;
		justify-content: space-between;
		color: ${theme.colors.circleColor};
		border-top: 0.1rem solid ${theme.colors.tertiaryTextColor};

		.filtersParagraph {
			text-transform: capitalize;
			transition: 300ms all ease-in-out;
		}

		.filtersParagraph:hover {
			cursor: pointer;
			color: ${theme.colors.primaryTextColor};
		}

		.filtersParagraph.active {
			color: ${theme.colors.activeColor};
		}
	`}
`;

export const FiltersContainer = styled.div`
	gap: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
