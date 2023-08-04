import { BsCheck, BsFillMicFill, BsImageFill } from 'react-icons/bs';

import { AiOutlineVideoCamera } from 'react-icons/ai';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';

export default function QuestionCreate() {
	return (
		<div className="bg-[#424242] min-h-screen flex flex-col gap-4">
			<Header />
			<div className="flex-1 h-full">
				<div className="h-full w-full max-w-5xl mx-auto p-4 rounded-xl bg-[#461A42] flex flex-col gap-4">
					<div className="border h-1/2 border-[#6B4868] rounded-xl bg-[#281226]">
						<div className="w-full p-2 flex gap-2">
							<div className="bg-[#6B4868] rounded text-white h-[32px] w-[32px] flex justify-center items-center">
								<BsImageFill />
							</div>
							<div className="bg-[#6B4868] rounded text-white h-[32px] w-[32px] flex justify-center items-center">
								<BsFillMicFill />
							</div>
							<div className="bg-[#6B4868] rounded text-white h-[32px] w-[32px] flex justify-center items-center">
								<AiOutlineVideoCamera />
							</div>
						</div>
						<textarea
							cols={30}
							rows={10}
							style={{ boxShadow: 'none' }}
							className="flex justify-center text-base bg-transparent w-full text-white h-[150px] items-center text-center resize-none rounded-xl border-none outline-none"
						></textarea>
					</div>
					<div className="grid h-1/2 grid-cols-4 gap-4">
						<div className="w-full bg-[#2D70AE] rounded-xl p-1">
							<div className="flex justify-between items-center">
								<div className="bg-[#578DBE] rounded-lg text-white h-[32px] w-[32px] flex justify-center items-center">
									<BsImageFill />
								</div>
								<button className="h-6 w-6 rounded-full text-white border-2 border-white flex justify-center items-center bg-[#00C985]">
									<BsCheck />
								</button>
							</div>
							<textarea
								cols={30}
								rows={10}
								placeholder="Câu trả lời 1"
								style={{ boxShadow: 'none' }}
								className="flex placeholder:text-white justify-center text-base bg-transparent w-full text-white h-[150px] items-center text-center resize-none rounded-xl border-none outline-none"
							></textarea>
						</div>
						<div className="w-full bg-[#2D70AE] rounded-xl p-1">
							<div className="bg-[#578DBE] rounded-lg text-white h-[32px] w-[32px] flex justify-center items-center">
								<BsImageFill />
							</div>
							<textarea
								cols={30}
								rows={10}
								placeholder="Câu trả lời 1"
								style={{ boxShadow: 'none' }}
								className="flex placeholder:text-white justify-center text-base bg-transparent w-full text-white h-[150px] items-center text-center resize-none rounded-xl border-none outline-none"
							></textarea>
						</div>
						<div className="w-full bg-[#2D70AE] rounded-xl p-1">
							<div className="bg-[#578DBE] rounded-lg text-white h-[32px] w-[32px] flex justify-center items-center">
								<BsImageFill />
							</div>
							<textarea
								cols={30}
								rows={10}
								placeholder="Câu trả lời 1"
								style={{ boxShadow: 'none' }}
								className="flex placeholder:text-white justify-center text-base bg-transparent w-full text-white h-[150px] items-center text-center resize-none rounded-xl border-none outline-none"
							></textarea>
						</div>
						<div className="w-full bg-[#2D70AE] rounded-xl p-1">
							<div className="bg-[#578DBE] rounded-lg text-white h-[32px] w-[32px] flex justify-center items-center">
								<BsImageFill />
							</div>
							<textarea
								cols={30}
								rows={10}
								placeholder="Câu trả lời 1"
								style={{ boxShadow: 'none' }}
								className="flex placeholder:text-white justify-center text-base bg-transparent w-full text-white h-[150px] items-center text-center resize-none rounded-xl border-none outline-none"
							></textarea>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
