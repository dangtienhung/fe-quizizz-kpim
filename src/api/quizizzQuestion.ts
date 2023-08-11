/* get all quiz type */

import { CreateQuizQuestion } from '@/app/interfaces/questions.type';
import http from './instance';

/* create quiz */
export const createQuiz = async (body: CreateQuizQuestion) => {
	return http.post(`/quizizz-question/create`, body);
};
