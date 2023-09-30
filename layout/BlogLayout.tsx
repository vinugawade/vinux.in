import { homeProfileImage } from "../utils/utils";
import Image from "next/image";
import ShareOnSocialMedia from "../components/ShareOnSocialMedia";
import { FiPrinter } from "react-icons/fi";
import Newsletter from "../components/Newsletter";
import Link from "next/link";
import useWindowLocation from "@hooks/useWindowLocation";
import ScrollProgressBar from "@components/ScrollProgressBar";
import { useState, useEffect } from "react";
import { opacityVariant } from "@content/FramerMotionVariants";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import useBookmarkBlogs from "@hooks/useBookmarkBlogs";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { getFormattedDate } from "@utils/date";
import { PostType } from "@lib/types";
import { RxPencil2 } from "react-icons/rx";
import TableOfContents from "@components/TableOfContents";

export default function BlogLayout({
  post,
  children,
}: {
  post: PostType;
  children: JSX.Element;
}) {
  const { currentURL } = useWindowLocation();
  const [isTOCActive, setIsTOCActive] = useState(false);
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

  const { isAlreadyBookmarked, addToBookmark, removeFromBookmark } =
    useBookmarkBlogs("blogs", []);

  useEffect(() => {
    setAlreadyBookmarked(isAlreadyBookmarked(post.meta.slug));
  }, [isAlreadyBookmarked, post.meta.slug]);

  return (
    <section className="mt-[44px] md:mt-[60px]  relative !overflow-hidden">
      {/* TOC */}
      <TableOfContents
        isTOCActive={isTOCActive}
        setIsTOCActive={setIsTOCActive}
        tableOfContents={post.tableOfContents}
      />

      {/* Blog Content */}
      <section
        className="p-5 sm:pt-10 relative font-barlow prose dark:prose-invert md:ml-[35%] lg:ml-[30%] print:!mx-auto"
        style={{
          maxWidth: "800px",
          opacity: `${isTOCActive} && "0.3"`,
          margin: `${post.tableOfContents.length <= 0} && "auto"`,
        }}
      >
        <ScrollProgressBar />
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.meta.title}
        </h1>

        <div className="flex items-center !w-full text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 w-full">
            <Image
              alt="Vinay Gawade"
              height={30}
              width={30}
              src={homeProfileImage}
              className="rounded-full !m-0"
            />
            <div className="flex flex-col text-xs sm:text-sm sm:flex-row sm:justify-between w-full">
              <p className="flex items-center gap-2 font-medium !my-0">
                <span>Vinay Gawade</span>
                <span>•</span>
                <span>{getFormattedDate(new Date(post.meta.date))}</span>
              </p>

              <p className="flex items-center gap-2 font-medium !my-0">
                <span>{post.meta.readingTime.text}</span>
                <span>•</span>
                <span>{post.meta.readingTime.words} words</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 ml-4">
            <Link
              href={`https://github.com/j471n/j471n.in/edit/main/posts/${post.meta.slug}.mdx`}
              title="Edit on Github"
              target="_blank"
              rel="noopener noreferrer"
              className="transition active:scale-75 select-none"
            >
              <RxPencil2 className="w-7 h-7 text-gray-700 dark:text-gray-300 stroke-slate-300 " />
            </Link>
            <button
              title="Save for Later"
              className="transition active:scale-75"
              onClick={() => {
                alreadyBookmarked
                  ? removeFromBookmark(post.meta.slug)
                  : addToBookmark(post.meta);
              }}
            >
              {alreadyBookmarked ? (
                <BsBookmarkFill className="w-6 h-6 " />
              ) : (
                <BsBookmark className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>

        <AnimatedDiv
          variants={opacityVariant}
          className="blog-container max-w-full prose-sm sm:prose-base prose-pre:bg-white dark:prose-pre:bg-darkSecondary prose-pre:saturate-150 dark:prose-pre:saturate-100"
        >
          {children}
        </AnimatedDiv>
        <Newsletter />
        <div className="w-full flex flex-col items-center gap-4 my-10 print:hidden">
          <h3
            style={{ margin: "0" }}
            className="font-semibold text-xl dark:text-white"
          >
            Share on Social Media:
          </h3>
          <ShareOnSocialMedia
            className="flex gap-2 items-center flex-wrap w-fit"
            title={post.meta.title}
            url={currentURL}
            summary={post.meta.excerpt}
            cover_image={post.meta.image}
          >
            <div className="bg-gray-700 text-white p-2 rounded-full cursor-pointer">
              <FiPrinter className="w-4 h-4" onClick={() => window.print()} />
            </div>
          </ShareOnSocialMedia>
        </div>
      </section>
    </section>
  );
}
