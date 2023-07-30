'use client';

import { BiUserCheck } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import Header from '../../components/Header';
import Link from 'next/link';
import React from 'react';
import { VscDebugStart } from 'react-icons/vsc';

export default function PreGame() {
	return (
		<div>
			<div className="min-h-screen bg-black">
				<Header />
				<div className="flex justify-between text-white gap-10 bg-black p-10">
					<div className="w-[25%]">
						<div className="p-6 bg-[#111111] rounded-xl">
							<div className="flex items-start gap-3 w-full">
								<img
									src="https://genk.mediacdn.vn/2018/8/22/kimi-ni-todoke-cover-1534914198264292755042.jpg"
									alt="image-quizizz"
									className="w-[56px] h-[56px] rounded-xl object-cover"
								/>
								<div className="w-full overflow-hidden">
									<p className="text-lg font-medium truncate">
										Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum
										dolor Lorem ipsum dolor sit. sit.
									</p>
									<span className="text-sm">20 Qs</span>
								</div>
							</div>
							<div className="mt-4">
								<span className="inline-flex gap-3 items-center">
									<BiUserCheck size={20} />
									<span>Qua: Mr. McLendon</span>
								</span>
							</div>
						</div>
					</div>
					<div className="w-[50%]">
						<div className="p-6 bg-[#111111] rounded-xl">
							<Link href={`/join/game/gameId`} className="inline-block w-full">
								<button
									className="btn shadow-md mb-5 w-full bg-[#00C985] hover:bg-[#00C985] font-bold outline-none border-none text-white"
									style={{ boxShadow: '#00a06a 0px 4px 0px 0px' }}
								>
									<VscDebugStart size={20} />
									<span>Bắt đầu</span>
								</button>
							</Link>
							<button
								className="btn shadow-md w-full bg-primary hover:bg-primary font-bold outline-none border-none text-white"
								style={{ boxShadow: '#6c4298 0px 4px 0px 0px' }}
							>
								<FaUsers size={20} />
								<span>Thách thức bạn bè</span>
							</button>
						</div>
					</div>
					<div className="w-[25%]"></div>
				</div>
			</div>
		</div>
	);
}
