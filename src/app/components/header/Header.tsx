'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useCallback, useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import Link from 'next/link';
import Logo from '../logo/Logo';
import Menu from '@/app/modules/header/Menu';
import SocialButton from './components/SocialButton';

type Variant = 'LOGIN' | 'REGISTER';

export default function Header() {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [modalPlacement, setModalPlacement] = useState<string>('center');
	const props = { openModal, setOpenModal, modalPlacement, setModalPlacement };
	const toggleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log('ahihi');
	};
	return (
		<>
			<div className="h-14 flex md:justify-start justify-between items-center w-full px-4 bg-white md:border-b-2 border-b border-b-[e4e4e4]">
				<Logo />
				<Menu />
				<div className="md:flex items-center hidden gap-4">
					<button
						className="btn bg-gray-1 font-bold text-black"
						onClick={() => props.setOpenModal('dismissible')}
					>
						Đăng ký
					</button>
					<button className="btn bg-primary hover:bg-primary font-bold text-white">
						Đăng nhập
					</button>
					<Link href={`/admin`} className="inline-block">
						<button className="btn bg-gray-1 font-bold text-black">
							<AiOutlinePlusCircle size={24} /> Tạo một bài quizizz
						</button>
					</Link>
				</div>
			</div>
			<Modal
				dismissible
				position={props.modalPlacement}
				show={props.openModal === 'dismissible'}
				onClose={() => props.setOpenModal(undefined)}
			>
				<Modal.Body className="overflow-hidden">
					<div className="relative">
						<div>
							<SocialButton
								className="bg-[#4285f4] text-white"
								title="Tiếp tục với Google"
								imgSrc="https://cf.quizizz.com/img/logos/google-logo-1.png"
							/>
							<SocialButton
								className="bg-[white] text-secondary border"
								title="Tiếp tục với Microsoft"
								imgSrc="https://cf.quizizz.com/img/logos/ms-logo.png"
							/>
						</div>
						<div className="mt-5">
							<div className="relative">
								<span
									className="h-[2px] w-20 inline-block bg-secondary absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2"
									style={{ left: '40%' }}
								></span>
								<span className="top-1/2 left-1/2 -translate-x-1/2 absolute -translate-y-1/2">
									Or
								</span>
								<span
									className="h-[2px] w-20 inline-block bg-secondary absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
									style={{ left: '60%' }}
								></span>
							</div>
							<form
								className="flex flex-col gap-4 mt-5"
								onSubmit={handleSubmit}
							>
								{variant === 'REGISTER' && (
									<div>
										<div className="mb-2 block">
											<Label htmlFor="name" value="Name" />
										</div>
										<TextInput
											id="name"
											placeholder="hungdang"
											className="w-full"
											required
											type="email"
										/>
									</div>
								)}
								<div>
									<div className="mb-2 block">
										<Label htmlFor="email" value="Your email" />
									</div>
									<TextInput
										id="email"
										placeholder="hungdang@gmail.com"
										className="w-full"
										required
										type="email"
									/>
								</div>
								<div>
									<div className="mb-2 block">
										<Label htmlFor="password" value="Your password" />
									</div>
									<TextInput
										id="password"
										required
										type="password"
										placeholder="password"
										className="w-full"
									/>
								</div>
								<Button
									type="submit"
									className="bg-primary text-white text-base capitalize hover:!bg-primary"
								>
									{variant === 'LOGIN' ? 'Đăng nhập' : 'Đăng ký'}
								</Button>
							</form>
							<div className="flex justify-center items-center mt-5 gap-3">
								<h2 className="text-[#6d6d6d] text-sm">Không có tài khoản?</h2>
								<button
									className="text-primary bg-[#f2eef8] py-[4px] px-[12px] rounded"
									onClick={toggleVariant}
								>
									{variant === 'LOGIN' ? 'Đăng ký' : 'Đăng nhập'}
								</button>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
