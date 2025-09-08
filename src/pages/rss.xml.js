import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Portafolio de Desarrollo Web | Benjamín Espinoza',
    description: 'Portafolio de proyectos de desarrollo web, tecnologías modernas y arquitectura limpia.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}