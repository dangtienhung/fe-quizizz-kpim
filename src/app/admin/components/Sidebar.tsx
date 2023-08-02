'use client';

import { AiOutlinePlusCircle, AiOutlineSetting } from 'react-icons/ai';
import React, { useState } from 'react';

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
	return (
		<div className="min-h-screen w-full max-w-[200px] border-r shadow">
			<div className="p-2">
				<Link href={`/`} className="inline-block">
					<img
						src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
						alt="logo"
						className="w-2/3 object-cover"
					/>
				</Link>
			</div>
			<div className="w-full text-center">
				<button className="btn bg-primary hover:bg-primary text-white my-4 w-[170px] mx-auto">
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
	);
}
