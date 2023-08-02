'use client';

import { AiOutlinePlusCircle, AiOutlineSetting } from 'react-icons/ai';
import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';

import Image from 'next/image';
import { IoIosLogOut } from 'react-icons/io';
import Link from 'next/link';
import { VscLibrary } from 'react-icons/vsc';

export default function Sidebar() {
	const menus = [
		{ id: 1, name: 'Thư viện của tôi', icon: <VscLibrary /> },
		{ id: 2, name: 'Cài đặt', icon: <AiOutlineSetting /> },
		{ id: 3, name: 'Đăng xuất', icon: <IoIosLogOut /> },
	];
	const [isActive, setIsActive] = useState<number>(0);
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };
	return (
		<>
			<div className="min-h-screen w-full max-w-[200px] border-r shadow">
				<div className="p-2">
					<Link href={`/`} className="inline-block">
						<Image
							src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
							alt="logo"
							width={146}
							height={40}
							className="w-2/3 object-cover"
						/>
					</Link>
				</div>
				<div className="w-full text-center">
					<button
						className="btn bg-primary hover:bg-primary text-white my-4 w-[170px] mx-auto"
						onClick={() => props.setOpenModal('dismissible')}
					>
						<span>
							<AiOutlinePlusCircle size={24} />
						</span>
						<span>Tạo mới</span>
					</button>
				</div>
				<div className="">
					{menus.map((menu, index) => (
						<div
							className={`flex h-10 items-center px-4 hover:bg-[#F2F2F2] text-[#6D6D6D] gap-2 cursor-pointer ${
								isActive === index ? 'bg-[#F2F2F2] !text-primary' : 'bg-white'
							}`}
							key={menu.id}
							onClick={() => setIsActive(index)}
						>
							<span>{menu.icon}</span>
							<span className="font-medium">{menu.name}</span>
						</div>
					))}
				</div>
			</div>
			<Modal
				dismissible
				show={props.openModal === 'dismissible'}
				onClose={() => props.setOpenModal(undefined)}
			>
				<Modal.Header>Terms of Service</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Dignissimos, incidunt.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							cupiditate veniam, voluptas odit consequuntur quisquam eligendi.
							Autem nemo magnam dolore?
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => props.setOpenModal(undefined)}>
						I accept
					</Button>
					<Button color="gray" onClick={() => props.setOpenModal(undefined)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
