import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LeetCode Solutions in JS',
			social: {
				github: 'https://github.com/manthanank/leetcode-solutions',
			},
			sidebar: [
				{
					label: 'Easy',
					items: [
						{ label: 'Two Sum', link: '/easy/two-sum/' },
					]
				},
				{
					label: 'Medium',
					items: [
						{ label: 'Add Two Numbers', link: '/medium/add-two-numbers/' },
					]
				},
				{
					label: 'Hard',
					items: [
						{ label: 'N-Queens', link: '/hard/n-queens/' },
					]
				},
			],
		}),
	],
});
