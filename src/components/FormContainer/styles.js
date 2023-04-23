import styled, { css } from "styled-components";

export const Container = styled.div`
	gap: 2.5rem;
	width: 100%;
	display: flex;
	padding-top: 3rem;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Form = styled.form`
	gap: 2.5rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const InputContainer = styled.div`
	width: 100%;
	gap: 1.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Paragraph = styled.p`
	${({ theme }) => css`
		gap: 0.2rem;
		display: flex;
		font-size: 1.2rem;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.09rem;
		font-weight: ${theme.fontWeights.bold};
		color: ${theme.colors.primaryTextColor};

		& > a {
			position: relative;
			text-decoration: none;
			color: ${theme.colors.activeColor};
		}

		& > a::after{
			left: 0;
			width: 0;
			content: '';
			height: .2rem;
			bottom: -0.2rem;
			position: absolute;
      transition: all 300ms ease-in-out;
		}

		& > a:hover::after {
			width: 100%;
			height: .2rem;
			background-color: ${theme.colors.activeColor};
	`}
`;
