/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Card() {
	return (
		<div className="border border-gray-200 rounded-lg">
			<div className="relative h-[126px]">
				<img
					src="https://i.ytimg.com/vi/zEkmo_jtLus/maxresdefault.jpg"
					alt="image"
					className="object-cover w-full h-full rounded-t-lg"
				/>
			</div>
			<div className="p-3">
				<h2 className="text-base font-medium capitalize line-clamp-2">
					Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
					dolor sit amet.
				</h2>
			</div>
		</div>
	);
}
