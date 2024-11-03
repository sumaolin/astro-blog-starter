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
    customData: `<follow_challenge>
    <feedId>75734723493321728</feedId>
    <userId>56511812446671872</userId>
</follow_challenge>`,
  })
}
