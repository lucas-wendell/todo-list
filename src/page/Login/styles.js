import styled, { css } from "styled-components";
import bgImage from "../../assets/bg-desktop-dark.jpg";

export const Container = styled.div`
	${({ theme }) => css`
		width: 100vw;
		height: 100vh;
		background-color: ${theme.colors.bgColor};
		position: relative;
	`}
`;

export const ImageContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	height: 35%;
	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
`;
