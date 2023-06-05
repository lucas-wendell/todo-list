import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		padding: 1.5rem;
		align-items: center;
		justify-content: space-between;
		color: ${theme.colors.circleColor};

		.clearParagraph {
			cursor: pointer;
		}
	`}
`;
