import config from "../../../prismic-configuration.js?raw"

const configObj = JSON.parse(config)

export const namespace = configObj.apiEndpoint.match(/(\w+)(?=\.prismic.io)/i)[0]

console.log(namespace)
export const apiEndpoint = 'https://' + namespace + '.cdn.prismic.io/api/v2';

export const routes = [
	{
		type: 'page',
		path: '/:uid'
	},
	{
		type: 'single',
		path: '/single'
	},
	{
		type: 'projects',
		path: '/projects'
	},
	{
		type: 'project',
		path: '/projects/:uid'
	}
];

export function linkResolver(doc) {
	if (doc.link_type === 'Web') {
		return doc.url;
	} else {
		switch (doc.type) {
			case 'single':
				return '/single';
			case 'projects':
				return '/projects';
			case 'project':
				return `/projects/${doc.uid}`;
			case 'page':
				return `/${doc.uid}`;
			case 'home':
			default:
				return '/';
		}
	}
}
