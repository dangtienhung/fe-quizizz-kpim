'use client';

import { AiFillSave, AiFillSetting } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';
import { VscDebugStart } from 'react-icons/vsc';

const Header = () => {
	return (
		<div className="h-14 w-full border-b fixed top-0 left-0 right-0 p-2 bg-white shadow flex justify-between items-center">
			<div className="p-2 w-[146px] flex justify-center items-center">
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
			<div className="flex items-center relative flex-1">
				<div className="absolute top-1/2 -translate-y-1/2 -left-6 h-8 w-[2px] z-50 bg-[#B6B6B6]"></div>
				<div className="flex-1">
					<button className="rounded px-2 py-1 font-medium outline-none border-none hover:bg-[#F2F2F2]">
						Bài quiz không có tiêu đề
					</button>
				</div>
				<div className="flex items-center gap-2">
					<button className="border rounded border-primary p-2">
						<AiFillSetting />
					</button>
					<button className="border rounded border-primary p-2">
						<VscDebugStart />
					</button>
					<button className="bg-primary flex justify-center items-center gap-2 rounded p-2 text-white">
						<AiFillSave />
						<span className="font-semibold text-sm">Xuất bản</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
