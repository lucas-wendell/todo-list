import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.taskBgColor};
		border-radius: 0.2rem;
		display: flex;
		flex-direction: column;
		-webkit-box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);
		-moz-box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);
		box-shadow: 0px 0px 49px -9px rgba(0, 0, 0, 0.56);
	`}
`;
