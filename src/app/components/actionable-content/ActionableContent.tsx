/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ActionableContent() {
	return (
		<div className="p-4 lg:p-7">
			<div className="flex items-center justify-between gap-7">
				<div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-md md:py-[68px] md:px-[20px] md:h-[215px] flex justify-center items-center">
					<form className="flex md:flex-row flex-col items-center justify-center gap-2 rounded-2xl bg-[#f4f4f5] border-2 border-[#ccc] md:p-4 p-1 w-[532px]">
						<input
							type="text"
							className="flex-1 w-full px-4 py-3 text-xl font-medium bg-white border-none outline-none rounded-xl"
							style={{
								boxShadow:
									'inset 2px 2px 2px #cccccc, inset -2px -2px 2px #f4f4f4',
							}}
							placeholder="Nhập mã tham gia"
						/>
						<button className="w-full text-white md:w-fit bg-primary btn hover:bg-primary">
							Tham gia
						</button>
					</form>
				</div>
				<div className="hidden lg:w-[30%] p-4 bg-white rounded-2xl flex-col shadow-md h-[215px] lg:flex justify-center items-center">
					<div className="mb-5 hidden">
						<Image
							src="https://images.careerbuilder.vn/content/images/cung-bach-duong-CareerBuilder-4.jpg"
							alt="Picture of the author"
							className="h-[80px] w-[80px] rounded-full object-cover"
							height={80}
							width={80}
						/>
					</div>
					<div className="hidden">
						<p className="text-center">
							<Link
								href={`/register`}
								className="font-bold underline text-primary"
							>
								Đăng ký
							</Link>
							<span> Bây giờ để mở khóa hình đại diện của riêng bạn</span>
						</p>
					</div>

					<div className="">
						<div className="mb-5 text-center">
							<Image
								src="https://staticg.sportskeeda.com/editor/2022/02/b9427-16438410040408-1920.jpg"
								alt="Picture of the author"
								className="h-[80px] w-[80px] rounded-full object-cover mx-auto"
								height={80}
								width={80}
							/>
						</div>
						<div className="">
							<h2 className="text-center font-bold text-xl truncate">
								Đặng Tiến Hưng
							</h2>
							<div className="flex justify-around items-center gap-3 mt-2">
								<Link
									href={`/join/settings`}
									className="inline-block text-xs text-[#EFA959]"
								>
									Chỉnh sửa hồ sơ
								</Link>
								<div className="h-1 w-1 rounded-full bg-[#EFA959]"></div>
								<Link
									href={`/join/actives`}
									className="inline-block text-xs text-[#EFA959]"
								>
									Xem hoạt động
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
