module.exports = {
	async redirects() {
		return [
			{
				source: '/admin',
				destination: '/admin/my-library',
				permanent: true, // Nếu bạn muốn sử dụng redirect 301 thì đặt permanent là true
			},
		];
	},
};
