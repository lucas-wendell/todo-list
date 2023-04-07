import React from "react";

import { Container } from "./styles";
import { Form } from "./styles";
import { InputContainer } from "./styles";
import { FormInput } from "../FormInput";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
export const FormContainer = () => {
	return (
		<Container>
			<Form>
				<InputContainer>
					<FormInput
						type="email"
						error={true}
						labelText="Email"
						placeholder="Example@gmail.com"
						register="ola"
						icon={<RiLockPasswordLine size="1.6rem" />}
					/>

					<FormInput
						type="password"
						error={true}
						labelText="Passaword"
						placeholder="Type your password"
						register="ola"
						icon={<AiOutlineUser size="1.6rem" />}
					/>
				</InputContainer>
			</Form>
			<p>
				Don&apos;t have account?<span>Sign Up</span>
			</p>
		</Container>
	);
};
