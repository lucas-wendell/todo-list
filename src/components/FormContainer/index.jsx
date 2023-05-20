import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { SubmitButton } from "../SubmitButton";
import { FormInput } from "../FormInput";

import { Container, Paragraph, InputContainer, Form } from "./styles";
import { AuthContext } from "../../contexts/authContext";

export const FormContainer = () => {
	const { logInWithEmail, unsetError, loginError } = useContext(AuthContext);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = ({ email, password }) => {
		unsetError();
		logInWithEmail(email, password);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<FormInput
						type="email"
						error={errors.email || loginError}
						labelText="Email"
						placeholder="Example@gmail.com"
						register={register("email", {
							required: "Required",
							pattern: {
								value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
								message: "Entered value does not match email format",
							},
						})}
						icon={<RiLockPasswordLine size="1.6rem" />}
					/>

					<FormInput
						type="password"
						labelText="Passaword"
						placeholder="Type your password"
						register={register("password", {
							required: "Required",
							minLength: {
								value: 3,
								message: "Your password must be more than 3 characters",
							},
						})}
						error={errors.password || loginError}
						icon={<AiOutlineUser size="1.6rem" />}
					/>
				</InputContainer>
				<SubmitButton type="submit">Sign In</SubmitButton>
			</Form>
			<Paragraph>
				Don&apos;t have account?<Link>Sign Up</Link>
			</Paragraph>
		</Container>
	);
};
