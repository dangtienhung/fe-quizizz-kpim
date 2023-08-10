/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		redirects: true,
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'cf.quizizz.com' },
			{ protocol: 'https', hostname: 'i.ytimg.com' },
			{ protocol: 'https', hostname: 'images.careerbuilder.vn' },
			{ protocol: 'https', hostname: 'staticg.sportskeeda.com' },
			{ protocol: 'https', hostname: 'genk.mediacdn.vn' },
			{ protocol: 'https', hostname: 'ui-avatars.com' },
		],
	},
};

module.exports = nextConfig;
