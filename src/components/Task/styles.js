import styled, { css } from "styled-components";
import { Container as CircleStyles } from "../Circle/styles";

export const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.1rem solid ${theme.colors.tertiaryTextColor};
		padding: 1rem;

		.deleteIcon {
			color: ${theme.colors.circleColor};
			transition: all 300ms ease-in-out;
		}

		.deleteIcon:hover {
			color: ${theme.colors.primaryTextColor};
			cursor: pointer;
		}
	`}
`;

export const TitleContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 1.5rem;
		color: ${theme.colors.primaryTextColor};

		${CircleStyles}:hover {
			border-color: ${theme.colors.activeColor};
			cursor: pointer;
		}
	`}
`;
