import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import React from 'react';

interface LayoutDefaultProps {
	children?: React.ReactNode;
	className?: string;
}

export default function LayoutDefault({
	children,
	className,
}: LayoutDefaultProps) {
	return (
		<div className={`${className} bg-[#F9F9F9] min-h-screen flex flex-col`}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
