'use client';

import { usePathname, useRouter } from 'next/navigation';

import Sidebar from './components/Sidebar';

export default function AdminPage() {
	const pathName = usePathname();
	const router = useRouter();
	if (pathName === '/admin') {
		router.push('/admin/my-library');
	}
	return (
		<div>
			<Sidebar />
		</div>
	);
}
