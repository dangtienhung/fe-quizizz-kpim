import Header from '../components/Header';
import HeaderQuiz from '../../components/HeaderQuiz';
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
			<body>
				<div>
					<Header />
					<HeaderQuiz className="left-[40%] max-w-2xl" />
					{children}
				</div>
			</body>
		</html>
	);
}
