import { BsCheckSquare } from 'react-icons/bs';
import HeaderQuiz from '../../../components/HeaderQuiz';
import Link from 'next/link';
import React from 'react';

const typeQuestions = [
	{ id: 1, name: 'Đa lựa chọn', icon: <BsCheckSquare /> },
	{ id: 2, name: 'Sắp xếp lại', icon: <BsCheckSquare /> },
	{ id: 3, name: 'ghép đôi', icon: <BsCheckSquare /> },
	{ id: 4, name: 'điền từ', icon: <BsCheckSquare /> },
	{ id: 5, name: 'kéo và thả', icon: <BsCheckSquare /> },
	{ id: 6, name: 'thả xuống', icon: <BsCheckSquare /> },
];

export default function QuizizzEdit() {
	return (
		<div>
			<HeaderQuiz />
			<div className="w-full max-w-4xl mx-auto pt-[calc(124px_+_56px)]">
				<h2 className="text-center font-bold text-[#222222]">
					hoặc, Tạo một câu hỏi mới
				</h2>
				<div className="mt-5 border shadow-sm bg-white flex rounded-lg">
					<div className="w-[60%]">
						<h3 className="p-4 text-xs font-semibold text-[#6D6D6D]">
							Đánh giá
						</h3>
						<div className="grid grid-cols-2 gap-2 px-4">
							{typeQuestions.map((typeQuestion) => (
								<div
									className="flex duration-100 items-center gap-1 rounded hover:bg-[#EDE6F6] cursor-pointer p-1"
									key={typeQuestion.id}
								>
									<span className="bg-[#2D9DA6] p-1 rounded text-white">
										{typeQuestion.icon}
									</span>
									<Link
										href={`/admin/quiz/questions`}
										className="text-[#222222] font-semibold text-sm"
									>
										{typeQuestion.name}
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="w-[40%] p-4 border-l border-l-[#E5E5E5] bg-[#F9F9F9]">
						<div className="rounded-sm">
							<video autoPlay className="">
								<source
									src="https://cf.quizizz.com/videos/qtype/reorder.min.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<div className="mt-6">
							<h2 className="font-semibold text-sm">Câu hỏi trắc nghiệm</h2>
							<span className="text-xs text-[#6d6d6d] font-medium leading-4">
								Kiểm tra khả năng ghi nhớ bằng cách yêu cầu học sinh chọn một
								hoặc nhiều câu trả lời đúng. Sử dụng văn bản, hình ảnh hoặc kí
								hiệu toán học để tăng thêm gia vị!
							</span>
						</div>
					</div>
				</div>
				HeaderQuiz
			</div>
		</div>
	);
}
