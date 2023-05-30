import styled, { css } from "styled-components";

const handleOnActive = (isActive, theme) => css`
	background: ${isActive
		? " linear-gradient(125deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 100%)"
		: "none"};
	border: ${isActive ? "none" : `0.1rem solid ${theme.colors.circleColor}`};
`;

export const Container = styled.div`
	${({ theme, isActive }) => css`
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		transition: all 300ms ease-in-out;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;

		${handleOnActive(isActive, theme)}/* ${isActive} */
	`}
`;
