import { FaUserCircle, FaUserEdit } from 'react-icons/fa';

import { IoIosArrowForward } from 'react-icons/io';
import LayoutDefault from '@/app/layouts/LayoutDefault';
import React from 'react';
import SettingContainer from './components/SettingContainer';

const info = [
	{ title: 'Hình đại diện', content: 'parry pirate' },
	{ title: 'Hình đại diện', content: 'parry pirate' },
];

const account = [
	{ title: 'Cập nhật mật khẩu' },
	{ title: 'Xóa tài khoản' },
	{ title: 'Đăng xuất' },
];

export default function Setting() {
	return (
		<LayoutDefault>
			<div className="flex-1 md:p-0 p-2">
				<h1 className="text-2xl text-center font-medium my-3">Cài đặt</h1>
				<SettingContainer
					title="Hồ sơ"
					info={info}
					icon={<FaUserEdit color="#EFA929" />}
				/>
				{/* <SettingContainer
					title="Cài đặt tài khoản"
					info={account}
					icon={<FaUserCircle color="#D5546D" />}
				/> */}
				<div className="p-4 rounded-xl shadow max-w-xl w-full mx-auto bg-white mb-5">
					<div className="flex gap-2 items-center mb-2">
						<span>
							<FaUserCircle color="#D5546D" />
						</span>
						<span className="text-[#AAC7E7]">Cài đặt tài khoản</span>
					</div>
					<div className="">
						<div className="flex justify-between items-center mb-3 select-none">
							<div className="flex-1 cursor-pointer">
								<h3 className="font-medium text-lg">Cập nhật mật khẩu</h3>
							</div>
							<span>
								<IoIosArrowForward />
							</span>
						</div>
						<div className="flex justify-between items-center mb-3 select-none">
							<div className="flex-1 cursor-pointer">
								<h3 className="font-medium text-lg">Xóa tài khoản</h3>
							</div>
							<span>
								<IoIosArrowForward />
							</span>
						</div>
						<div className="flex justify-between items-center mb-3 select-none">
							<div className="flex-1 cursor-pointer">
								<h3 className="font-medium text-lg">Đăng xuất</h3>
							</div>
							<span>
								<IoIosArrowForward />
							</span>
						</div>
					</div>
				</div>
			</div>
		</LayoutDefault>
	);
}
