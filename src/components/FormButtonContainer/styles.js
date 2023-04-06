import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

export const Heading = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.navColor};
		text-transform: capitalize;
	`}
`;

export const Paragraph = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.primaryTextColor};
		text-align: center;
		font-size: 1.2rem;
	`}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;
