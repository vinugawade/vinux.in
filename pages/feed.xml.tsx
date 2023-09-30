import MDXContent from "@lib/MDXContent";
import { GetServerSidePropsContext } from "next";
import RSS from "rss";

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const siteURL = "http://vinux.in";
  const allBlogs = new MDXContent("posts").getAllPosts();

  const feed = new RSS({
    title: "Vinay Gawade",
    description: `I enjoy writing various blogs on tech, travel, and more, with a particular interest in web development and tech careers. I have already written {blogs.length} blogs so far.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Vinay Gawade`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post!.title,
      url: `http://vinux.in/blogs/${post!.slug}`,
      date: post!.date,
      description: post!.excerpt,
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {},
  };
}

export default function RSSFeed() {
  return null;
}
