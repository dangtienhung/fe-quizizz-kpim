import Menu from '@/app/modules/header/Menu';
import Logo from '../logo/Logo';

export default function Header() {
	return (
		<div className="h-14 flex md:justify-start justify-between items-center w-full px-4 bg-white md:border-b-2 border-b border-b-[e4e4e4]">
			<Logo />
			<Menu />
			<div className="md:flex items-center hidden gap-4">
				<button className="btn bg-gray-1 font-bold text-black">Đăng ký</button>
				<button className="btn bg-primary hover:bg-primary font-bold text-white">
					Đăng nhập
				</button>
			</div>
		</div>
	);
}
