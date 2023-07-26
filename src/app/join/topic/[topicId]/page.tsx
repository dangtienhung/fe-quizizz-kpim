'use client';

import React, { useState } from 'react';

import LayoutDefault from '@/app/layouts/LayoutDefault';
import { Pagination } from 'flowbite-react';
import QuizizzList from '@/app/components/quizizzes-lists/QuizizzList';

export default function Topic({ params }: { params: { topicId: string } }) {
	const { topicId } = params;
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = (page: number) => setCurrentPage(page);
	const [counter, setCounter] = useState(0);
	const increament = () => setCounter(counter + 1);
	return (
		<LayoutDefault>
			<div className="flex-1 p-1 md:p-4">
				<h1 className="text-xl border-b pb-4" onClick={() => increament()}>
					<span>Câu đố phổ biến cho </span>
					<span className="font-bold">English and Language Arts</span>
				</h1>
				<QuizizzList />
				<div className="text-center mt-10">
					<Pagination
						currentPage={currentPage}
						onPageChange={onPageChange}
						totalPages={100}
						showIcons
					/>
				</div>
			</div>
		</LayoutDefault>
	);
}
