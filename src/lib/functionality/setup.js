export const namespace = 'preltekit' // Change this to your Prismic ID
export const apiEndpoint = 'https://' + namespace + '.cdn.prismic.io/api/v2';

export const routes = [
	{
    type: 'page',
    path: '/:uid',
  },
	{
    type: 'projects',
    path: '/projects',
  },
	{
		type: 'project',
		path: '/projects/:uid',
	}
]

export function linkResolver (doc) {
  if (doc.link_type === 'Web') {
    return doc.url
  } else {
    switch (doc.type) {
      case ('projects'):
        return '/projects'
      case ('project'):
        return `/projects/${doc.uid}`
			case ('page'):
				return `/${doc.uid}`
      case ('home'):
      default:
        return '/'
    }
  }
}