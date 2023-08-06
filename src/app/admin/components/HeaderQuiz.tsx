'use client';

import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';
import { TextInput } from 'flowbite-react';

const HeaderQuiz = () => {
	return (
		<div className="bg-white p-4 rounded-b fixed top-14 left-1/2 -translate-x-1/2 shadow w-full max-w-2xl">
			<h2 className="font-medium mb-2">
				Dịch chuyển tức thời từ thư viện Quizizz
			</h2>
			<div className="border rounded p-1">
				<form className="w-full flex items-center">
					<TextInput
						icon={AiOutlineSearch}
						placeholder="Tìm kiếm từ hàng triệu câu hỏi"
						required
						type="email"
						className="focus:!border focus:border-primary bg-white h-[40px] flex items-center focus:ring-0 flex-1 outline-none border-none"
						style={{ boxShadow: 'none', border: 'none' }}
					/>
					<button className="py-2 rounded px-4 w-[100px] h-[40px] flex justify-center items-center text-sm font-medium bg-[#EDE6F6] text-primary">
						Tìm kiếm
					</button>
				</form>
			</div>
		</div>
	);
};

export default HeaderQuiz;
