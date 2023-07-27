/* eslint-disable @next/next/no-img-element */
'use client';

import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';

import { HiUserGroup } from 'react-icons/hi';
import Link from 'next/link';
import { VscDebugStart } from 'react-icons/vsc';

export default function Card() {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };

	return (
		<>
			<div
				className="border border-gray-200 rounded-lg shadow cursor-pointer select-none"
				onClick={() => props.setOpenModal('dismissible')}
			>
				<div className="relative h-[126px]">
					<img
						src="https://i.ytimg.com/vi/zEkmo_jtLus/maxresdefault.jpg"
						alt="image"
						className="object-cover w-full h-full rounded-t-lg"
					/>
					<div className="absolute bottom-2 left-2">
						<div className="text-xs bg-[#f2f2f2] shadow text-[#292a3a] text-center rounded py-[1px] px-[6px]">
							20 Qs
						</div>
					</div>
				</div>
				<div className="p-3">
					<h2 className="text-base font-medium capitalize line-clamp-2">
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
						dolor sit amet.
					</h2>
				</div>
			</div>
			<Modal
				dismissible
				show={props.openModal === 'dismissible'}
				onClose={() => props.setOpenModal(undefined)}
				className="!border-0 w-full"
				size={'lg'}
			>
				<div className="relative h-[240px] select-none">
					<img
						src="https://i.ytimg.com/vi/zEkmo_jtLus/maxresdefault.jpg"
						alt="image"
						className="object-cover w-full h-full rounded-t-lg"
					/>
					<div className="absolute bottom-2 left-2">
						<div className="text-xs bg-[#f2f2f2] shadow text-[#292a3a] text-center rounded py-[1px] px-[6px]">
							20 Qs
						</div>
					</div>
				</div>
				<div className="p-3 select-none">
					<h2 className="text-base font-medium capitalize line-clamp-2">
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
						dolor sit amet.
					</h2>
					<div className="flex justify-start items-center my-4 gap-2">
						<img
							src="https://i.ytimg.com/vi/zEkmo_jtLus/maxresdefault.jpg"
							alt="image-avatar"
							className="h-[24px] w-[24px] rounded-full object-cover"
						/>
						<span className="">Đặng Tiến Hưng</span>
					</div>
					<div className="flex justify-between items-center gap-4">
						<Link href={`/join/quiz/ahihi`} className="inline-block w-full">
							<button className="btn w-full bg-primary text-white hover:bg-primary outline-none border-0">
								<span>Thực hành</span>
								<VscDebugStart size={20} />
							</button>
						</Link>
						<Link href={`/`} className="inline-block w-full">
							<button className="btn w-full justify-between flex items-center bg-primary text-white hover:bg-primary outline-none border-0">
								<span className="flex-1">Thách thức bạn bè</span>
								<HiUserGroup size={20} />
							</button>
						</Link>
					</div>
				</div>
			</Modal>
		</>
	);
}
