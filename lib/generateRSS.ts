import { writeFileSync } from "fs";
import MDXContent from "./MDXContent";
import RSS from "rss";

export default async function getRSS() {
  const siteURL = "http://vinux.in";
  const allBlogs = new MDXContent("posts").getAllPosts();

  // Create a new RSS object
  const feed = new RSS({
    title: "Vinay Gawade",
    description: `I enjoy writing various blogs on tech, travel, and more
    with a particular interest in web development and tech careers.
    I have already written {blogs.length} blogs so far.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Vinay Gawade`,
  });

  // Add all blog posts to the RSS feed
  allBlogs?.map((post) => {
    feed.item({
      title: post!.title,
      url: `${siteURL}/blogs/${post?.slug}`,
      date: post!.date,
      description: post!.excerpt,
    });
  });

  // Write the RSS feed to a file
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
