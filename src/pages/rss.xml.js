import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const allPosts = await getCollection('posts')

  return rss({
    title: 'KevinSu Blog | 关于前端技术！',
    description: 'KevinSu Blog | 关于前端技术！',
    site: context.site,
    items: allPosts.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        link: `/posts/${post.slug}`,
      }
    }),
    customData: `<language>en-us</language>`,
  })
}
