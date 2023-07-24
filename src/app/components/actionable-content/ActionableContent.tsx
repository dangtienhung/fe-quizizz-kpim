/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ActionableContent() {
	return (
		<div className="p-4 lg:p-7">
			<div className="flex items-center justify-between gap-7">
				<div className="w-full xl:w-[70%] bg-white rounded-2xl shadow-md md:py-[68px] md:px-[20px] md:h-[215px] flex justify-center items-center">
					<form className="flex md:flex-row flex-col items-center justify-center gap-2 rounded-2xl bg-[#f4f4f5] border-2 border-[#ccc] md:p-4 p-1 w-[532px]">
						<input
							type="text"
							className="flex-1 w-full px-4 py-3 text-xl font-medium bg-white border-none outline-none rounded-xl"
							style={{
								boxShadow:
									"inset 2px 2px 2px #cccccc, inset -2px -2px 2px #f4f4f4",
							}}
							placeholder="Nhập mã tham gia"
						/>
						<button className="w-full text-white md:w-fit bg-primary btn hover:bg-primary">
							Tham gia
						</button>
					</form>
				</div>
				<div className="hidden  w-[30%] p-4 bg-white rounded-2xl flex-col shadow-md h-[215px] xl:flex justify-center items-center">
					<div className="mb-5">
						<img
							src="https://images.careerbuilder.vn/content/images/cung-bach-duong-CareerBuilder-4.jpg"
							alt="Picture of the author"
							className="h-[80px] w-[80px] rounded-full object-cover"
						/>
					</div>
					<div>
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
				</div>
			</div>
		</div>
	);
}
