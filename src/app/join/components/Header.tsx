import Link from 'next/link';
import React from 'react';
import { VscClose } from 'react-icons/vsc';

export default function Header() {
	return (
		<div className="h-16 w-full flex justify-between items-center p-4 bg-[#000]">
			<div className="flex gap-4 items-center">
				<Link href={'/join/quiz/ahihi'} className="inline-block">
					<div className="cursor-pointer h-10 w-10 rounded-lg !text-white flex justify-center items-center bg-[#333]">
						<VscClose size={20} />
					</div>
				</Link>
				<div className="cursor-pointer h-10 w-10 rounded-lg !text-white flex justify-center items-center bg-[#333]">
					<VscClose size={20} />
				</div>
			</div>
			<div className="">hehe</div>
		</div>
	);
}
