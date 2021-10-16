import styled from "styled-components";



// Used for wrapping a page component
export const Screen = styled.div`
	//background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 255, 255,1)'/%3E%3Cpath d='M20 33L23 20L20 20zM20 7L17 20L20 20z' fill='rgba(234, 251, 247,1)'/%3E%3Cpath d='M 35 20L20 17L20 20zM5 20L20 23L20 20z' fill='rgba(234, 251, 247,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
	background-color: var(--black);
	max-width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: "Montserrat";
	overflow: hidden;
`;

export const containerteam = styled.div`
	max-width: 1500px;
	overflow: hidden;
	border-radius: 4px;
	margin: auto;
`;

export const CenterContainer = styled.div`
	padding: 50px;
	background: linear-gradient(to bottom right, #67b26f, #4ca2cd);
	height: 100vh;
	display: flex;
	align-items: center; //cross axis
	justify-content: center; //main axis
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
	height: 8px;
	width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
	height: 16px;
	width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
	height: 24px;
	width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
	height: 32px;
	width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
	display: flex;
	flex: ${({ flex }) => (flex ? flex : 0)};
	flex-direction: ${({ fd }) => (fd ? fd : "column")};
	justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	background-color: ${({ test }) => (test ? "pink" : "none")};
	width: 100%;
	background-image: ${({ image }) => (image ? `url(${image})` : "none")};
	background-size: cover;
	background-position: center;
	margin: auto;
`;

export const StyledClickable = styled.div`
	:active {
		opacity: 0.6;
	}
`;

export const PrimaryButton = styled.button`
	background-color: var(--white);
	color: var(--black);
	padding: 15px;
	font-weight: bold;
	border: none;
	border-radius: 4px;

	&:hover {
		color: var(--red);
		cursor: pointer;
	}
`;