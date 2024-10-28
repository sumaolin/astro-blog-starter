import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Kevin Su Blog | 关于前端技术！',
    description: 'Kevin Su Blog | 关于前端技术！',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}
