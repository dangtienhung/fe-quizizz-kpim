import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

export default function AuthForm() {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const [modalPlacement, setModalPlacement] = useState<string>('center');

	const props = { openModal, setOpenModal, modalPlacement, setModalPlacement };
	return (
		<Modal
			dismissible
			position={props.modalPlacement}
			show={props.openModal === 'dismissible'}
			onClose={() => props.setOpenModal(undefined)}
		>
			<Modal.Body>
				<div>
					<div className="p-1 ">Google</div>
					<div className="p-1 ">Mircrosoft</div>
				</div>
				<div className="">
					<div className="">
						<span>Or</span>
					</div>
					<form className="flex flex-col gap-4">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email1" value="Your email" />
							</div>
							<TextInput
								id="email1"
								placeholder="name@flowbite.com"
								className="w-full"
								required
								type="email"
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="password1" value="Your password" />
							</div>
							<TextInput
								id="password1"
								required
								type="password"
								className="w-full"
							/>
						</div>
						<Button type="submit">Submit</Button>
					</form>
				</div>
			</Modal.Body>
		</Modal>
	);
}
