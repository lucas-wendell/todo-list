import styled, { css } from "styled-components";
import bgImage from "../../assets/bg-desktop-dark.jpg";

export const Container = styled.div`
	${({ theme }) => css`
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: ${theme.colors.bgColor};
	`}
`;

export const ImageContainer = styled.div`
	left: 0;
	right: 0;
	height: 35%;
	position: absolute;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${bgImage});
`;
