import React from "react";

import { Container, Paragraph } from "./styles";
import { Form } from "./styles";
import { InputContainer } from "./styles";
import { FormInput } from "../FormInput";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
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
			<Paragraph>
				Don&apos;t have account?<Link>Sign Up</Link>
			</Paragraph>
		</Container>
	);
};
