import React from "react";

import { Container } from "./styles";
import { FormButtonContainer } from "../FormButtonContainer";
import { FormContainer } from "../FormContainer";
import { AuthProvider } from "../../authContext/index";
export const LoginForm = () => {
	return (
		<Container>
			<AuthProvider>
				<FormButtonContainer />
				<FormContainer />
			</AuthProvider>
		</Container>
	);
};
