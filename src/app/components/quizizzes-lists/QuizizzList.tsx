import Card from '../card/Card';
import Link from 'next/link';
import React from 'react';

export default function QuizizzList() {
	return (
		<div className="mt-[44px]">
			<div className="flex items-center justify-between mb-2">
				<h1 className="text-xl font-medium">Toán</h1>
				<Link
					href={`/ahihi`}
					className="px-6 py-1 font-bold bg-[#EEE9F4] rounded text-primary"
				>
					Xem thêm
				</Link>
			</div>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
