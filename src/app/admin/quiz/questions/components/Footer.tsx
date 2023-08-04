import { BsCheckLg } from 'react-icons/bs';
import { CiStopwatch } from 'react-icons/ci';
import { FaSave } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import React from 'react';

const Footer = () => {
	return (
		<div className="h-10 bg-[#222222] text-white flex justify-between items-center p-2">
			<div className="flex items-center gap-2">
				<button className="flex gap-1 items-center bg-[#161616] rounded py-1 px-2">
					<HiOutlineLightBulb />
					<span className="text-sm font-semibold capitalize">
						Add answer explanation
					</span>
				</button>
				<div className="dropdown dropdown-top">
					<button
						tabIndex={0}
						className="flex gap-1 items-center bg-[#161616] rounded py-1 px-2"
					>
						<HiOutlineLightBulb />
						<span className="text-sm font-semibold capitalize">30 giây</span>
					</button>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-full"
					>
						<li className="text-black font-semibold cursor-pointer p-2 hover:bg-gray-100">
							30 giây
						</li>
						<li className="text-black font-semibold cursor-pointer p-2 hover:bg-gray-100">
							50 giây
						</li>
					</ul>
				</div>
				<div className="dropdown dropdown-top">
					<button
						tabIndex={0}
						className="flex gap-1 items-center bg-[#161616] rounded py-1 px-2"
					>
						<BsCheckLg />
						<span className="text-sm font-semibold capitalize w-24">
							1 điểm
						</span>
					</button>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-full"
					>
						<li className="text-black font-semibold cursor-pointer p-2 hover:bg-gray-100">
							1 điểm
						</li>
						<li className="text-black font-semibold cursor-pointer p-2 hover:bg-gray-100">
							10 điểm
						</li>
					</ul>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<button className="flex gap-1 items-center bg-[#161616] text-sm font-semibold rounded py-1 px-2">
					Hủy
				</button>
				<button className="flex gap-1 items-center bg-[#161616] rounded py-1 px-2">
					<FaSave />
					<span className="text-sm font-semibold text-white">Lưu</span>
				</button>
			</div>
		</div>
	);
};

export default Footer;
