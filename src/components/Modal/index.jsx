import React, { useState } from "react";
import ErrorImage from "../../assets/modal-error-image.svg";
import { MdClose } from "react-icons/md";

import { Container, ModalContainer, ModalHeader, ModalContent } from "./styles";

export const Modal = () => {
	const [isVisible, setVisibility] = useState(false);

	return (
		<Container isVisible={isVisible}>
			<ModalContainer>
				<ModalHeader>
					<h2>Todo</h2>
					<MdClose
						size="1.8rem"
						className="deleteIcon"
						onClick={() => setVisibility((prevVisibility) => !prevVisibility)}
					/>
				</ModalHeader>
				<ModalContent>
					<img src={ErrorImage} alt="error-illustration" />
					<div>
						<h3>Something went wrong</h3>
						<p>
							For some reason we could not update your task. Please try again or
							make sure you are connect.
						</p>
					</div>
				</ModalContent>
			</ModalContainer>
		</Container>
	);
};
