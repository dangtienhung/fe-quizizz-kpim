import { IRegister, IUser } from '@/app/interfaces/user.type';

export type UserState = {
	user: IUser;
	isLoading: boolean;
	errors: string;
};

export type UserAction = {
	/* register */
	registerAuth: (data: IRegister) => void;
	/* login */
	loginAuth: (data: IRegister) => void;
};

// export const useUserStore = combine({
// 	user: {} as IUser,
// });
