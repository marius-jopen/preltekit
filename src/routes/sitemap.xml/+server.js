import createClient from "$lib/preltekit/client"
import { routes, linkResolver } from "$lib/preltekit/setup"

export const GET = (async ({ request, fetch, url }) => {
  const api = createClient({ request, fetch })

  const types = routes.map(route => route.type)
  let documents = await Promise.all(types.map(type => api.getAllByType(type)))

  documents = documents.flat()

  const { origin } = url

  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >

    <url>
    <loc>${origin}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    </url>

    ${documents.map(doc => {
      return `
        <url>
          <loc>${origin}/${linkResolver(doc)}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
    }).join('')}

    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
})