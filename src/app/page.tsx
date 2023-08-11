import HomePage from './views/home/HomePage';
import Providers from '@/utils/provider';

export default function Home() {
	return (
		<Providers>
			<HomePage />;
		</Providers>
	);
}
