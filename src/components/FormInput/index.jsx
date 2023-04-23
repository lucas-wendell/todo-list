import React, { useState } from "react";
import P from "prop-types";
import { Container, Label, Paragraph, Input } from "./styles";

export const FormInput = ({
	labelText,
	type,
	placeholder,
	register,
	error,
	icon,
}) => {
	const [focusValue, setFocusValue] = useState(false);

	return (
		<Label>
			<Paragraph>{labelText}</Paragraph>
			<Container borderType={focusValue ? "primary" : "secondary"}>
				{icon}
				<Input
					onFocus={() => setFocusValue(true)}
					onBlur={() => setFocusValue(false)}
					type={type}
					placeholder={placeholder}
					error={error ? "sim" : "não"}
					{...register}
				/>
			</Container>
		</Label>
	);
};

FormInput.propTypes = {
	labelText: P.string.isRequired,
	type: P.string.isRequired,
	placeholder: P.string.isRequired,
	register: P.object,
	error: P.object,
	icon: P.node.isRequired,
};
