import { parse } from 'svgson'
import createClient from "$lib/functionality/client"

export const prerender = true;

export async function load({ fetch, request }) {
  const icons = import.meta.glob(`$lib/modules/icons/batch-oval/*.svg`, { as: 'raw' });
	const api = await createClient({ fetch, request })
	const setup = await api.getSingle('setup')
	const glossary = await api.getAllByType('glossary_item')
  const lib = {}

  for (const svgPath in icons) {
    const key = svgPath.replace(`/src/lib/modules/icons/batch-oval/`, '').replace('.svg', '')
    const svgString = await icons[svgPath]()
    lib[key] = await parse(svgString)
  }

	if (setup && glossary) {
		return {
			setup,
			glossary,
      iconLibrary: lib
		}
	}
}