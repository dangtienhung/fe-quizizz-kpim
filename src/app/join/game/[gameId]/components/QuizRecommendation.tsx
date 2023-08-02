import Image from 'next/image';
import React from 'react';

export default function QuizRecommendation() {
	return (
		<div className="flex gap-2 items-start cursor-pointer hover:bg-opacity-90 p-2">
			<Image
				src="https://staticg.sportskeeda.com/editor/2022/02/b9427-16438410040408-1920.jpg"
				alt="ahihi"
				className="h-20 w-20 rounded-xl object-cover"
				height={80}
				width={80}
			/>
			<div className="flex-1">
				<h2 className="text-base font-medium line-clamp-2">
					Lorem ipsum dolor sit amet.
				</h2>
				<span className="text-xs">15 questions</span>
			</div>
		</div>
	);
}
