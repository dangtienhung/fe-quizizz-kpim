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
					{<HeaderQuiz />}
					{children}
				</div>
			</body>
		</html>
	);
}
