// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.(glsl|vs|fs|vert|frag)$/,
//       use: ["raw-loader", "glslify", "glslify-loader"],
//     });
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			use: "raw-loader",
		});
		return config;
	},
	experimental: {
		turbo: {
			rules: {
				'*.glsl': {
					loaders: ['raw-loader'],
					as: '*.js',
				},
				'*.vs': {
					loaders: ['raw-loader'],
					as: '*.js',
				},
				'*.fs': {
					loaders: ['raw-loader'],
					as: '*.js',
				},
				'*.vert': {
					loaders: ['raw-loader'],
					as: '*.js',
				},
				'*.frag': {
					loaders: ['raw-loader'],
					as: '*.js',
				},
			},
		},
	},
};

export default nextConfig;
