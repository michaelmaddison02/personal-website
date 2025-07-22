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
	experimental: {
		turbo: {
			rules: {
				'*.glsl': {
					loaders: ['raw-loader', 'glslify', 'glslify-loader'],
					as: '*.js',
				},
				'*.vs': {
					loaders: ['raw-loader', 'glslify', 'glslify-loader'],
					as: '*.js',
				},
				'*.fs': {
					loaders: ['raw-loader', 'glslify', 'glslify-loader'],
					as: '*.js',
				},
				'*.vert': {
					loaders: ['raw-loader', 'glslify', 'glslify-loader'],
					as: '*.js',
				},
				'*.frag': {
					loaders: ['raw-loader', 'glslify', 'glslify-loader'],
					as: '*.js',
				},
			},
		},
	},
};

export default nextConfig;
