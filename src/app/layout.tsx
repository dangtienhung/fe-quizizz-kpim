import './globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Quizizz',
	description: 'Quizizz',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
