import Header from '../components/Header';
import type { Metadata } from 'next';
import Sidebar from '../components/Sidebar';

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
			<body>
				<div className="flex">
					<Sidebar />
					<div className="flex-1 bg-[#F2F2F2]">
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
