'use client';

import '../scss/style.scss';

import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';

interface SettingContainerProps {
	icon: React.ReactNode;
	title: string;
	info: { title: string; content?: string }[];
}

export default function SettingContainer({
	title,
	info,
	icon,
}: SettingContainerProps) {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };
	return (
		<>
			<div className="p-4 rounded-xl shadow max-w-xl w-full mx-auto bg-white mb-5">
				<div className="flex gap-2 items-center mb-2">
					<span>{icon}</span>
					<span className="text-[#AAC7E7]">{title}</span>
				</div>
				<div className="">
					{info.map((item, index) => (
						<div
							className="flex justify-between items-center mb-3 select-none"
							onClick={() => props.setOpenModal('dismissible')}
							key={index}
						>
							<div className="flex-1 cursor-pointer">
								<h3 className="font-medium text-lg">{item.title}</h3>
								{item.content && (
									<span className="text-[#AAC7E7]">{item.content}</span>
								)}
							</div>
							<span>
								<IoIosArrowForward />
							</span>
							<Modal
								dismissible
								show={props.openModal === 'dismissible'}
								onClose={() => props.setOpenModal(undefined)}
							>
								<Modal.Header>{item.title}</Modal.Header>
								<Modal.Body>{item.content && <p>{item.content}</p>}</Modal.Body>
							</Modal>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
