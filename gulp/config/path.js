import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
	dist: {
		assets: `${distFolder}/`,
		html: `${distFolder}/`,
		css: `${distFolder}/css/`,
		js: `${distFolder}/js/`,
		images: `${distFolder}/images/`,
		fonts: `${distFolder}/fonts/`,
	},
	src: {
		assets: `${srcFolder}/assets/**/*.*`,
		html: `${srcFolder}/html/pages/*.pug`,
		css: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/entry.js`,
		images: `${srcFolder}/images/*.{jpg,jpeg,png,webp}`,
		svg: `${srcFolder}/images/*.svg`,
		sprite: `${srcFolder}/images/icons/*.svg`,
	},
	watch: {
		assets: `${srcFolder}/assets/**/*.*`,
		html: `${srcFolder}/html/**/*.pug`,
		css: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/*.{jpg,jpeg,png,svg,webp}`,
		sprite: `${srcFolder}/images/icons/*.svg`,
	},
	clean: distFolder,
	distFolder,
	srcFolder,
	rootFolder,
	ftp: '',
};
