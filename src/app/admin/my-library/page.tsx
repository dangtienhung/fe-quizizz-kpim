import Header from '../components/Header';
import React from 'react';
import Sidebar from '../components/Sidebar';

export default function MyLibrary() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 bg-[#F2F2F2]">
				<Header />
			</div>
		</div>
	);
}
