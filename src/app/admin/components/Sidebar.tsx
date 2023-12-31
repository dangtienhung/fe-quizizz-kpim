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
				size={'sm'}
			>
				<Modal.Body>
					<div className="">
						<h2 className="text-xl text-black font-semibold text-center mb-6">
							Bạn muốn tạo gì?
						</h2>
						<div
							className="rounded-lg mb-5 border hover:bg-[rgb(237,230,246)] hover:border-primary cursor-pointer gap-3 flex flex-col px-4 pt-3 pb-4"
							style={{ boxShadow: '0 4px #b6b6b6' }}
						>
							<Link
								href={`/admin/quiz/edit/quizEditId`}
								className="inline-block h-full w-full"
							>
								<div className="flex items-center gap-3">
									<Image
										src={`https://cf.quizizz.com/img/illustrations/quiz.png`}
										alt="empty-state"
										height={48}
										width={48}
										className="rounded-full object-cover"
									/>
									<span className="font-bold text-xl text-[#090909]">Quiz</span>
								</div>
								<span className="text-sm text-[#6d6d6d] text-left">
									Đánh giá và thực hành tạo động lực với các câu hỏi tương tác
								</span>
							</Link>
						</div>
						<div
							className="rounded-lg border mb-5 hover:bg-[rgb(237,230,246)] hover:border-primary cursor-pointer gap-3 flex flex-col px-4 pt-3 pb-4"
							style={{ boxShadow: '0 4px #b6b6b6' }}
						>
							<div className="flex items-center gap-3">
								<Image
									src={`https://cf.quizizz.com/img/illustrations/lesson.png`}
									alt="empty-state"
									height={48}
									width={48}
									className="rounded-full object-cover"
								/>
								<span className="font-bold text-xl text-[#090909]">
									Bài học
								</span>
							</div>
							<span className="text-sm text-[#6d6d6d] text-left">
								Thêm các slide vui nhộn và và tương tác vào các bài đánh giá mà
								học sinh yêu thích
							</span>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
