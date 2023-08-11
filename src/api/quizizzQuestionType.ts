import http from './instance';

/* get all */
export const getAllQuestionType = async () => {
	try {
		const response = await http.get(`/quizizz-quesstion-type/lists`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
