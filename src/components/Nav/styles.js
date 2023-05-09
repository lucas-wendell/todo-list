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
			cursor: pointer;
		}
	`}
`;
