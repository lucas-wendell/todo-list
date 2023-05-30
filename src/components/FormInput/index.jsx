import React, { useState } from "react";
import P from "prop-types";
import { Container, Label, Paragraph, Input, ErrorSpan } from "./styles";

export const FormInput = ({
	labelText,
	type,
	placeholder,
	register,
	error,
	icon,
}) => {
	const [focusValue, setFocusValue] = useState(false);
	let borderValue = error ? "tertiary" : focusValue ? "primary" : "secondary";

	return (
		<Label>
			<Paragraph>{labelText}</Paragraph>
			<Container borderType={borderValue}>
				{icon}
				<Input
					onFocus={() => setFocusValue(true)}
					onBlurCapture={() => setFocusValue(false)}
					type={type}
					placeholder={placeholder}
					error={error ? "sim" : "não"}
					{...register}
				/>
			</Container>
			{error && <ErrorSpan>{error.message}</ErrorSpan>}
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
