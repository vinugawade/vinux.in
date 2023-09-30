import { AnimatePresence } from "framer-motion";
import { FadeContainer } from "@content/FramerMotionVariants";
import Blog from "@components/Blog";
import Metadata from "@components/MetaData";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import PageTop from "@components/PageTop";
import useBookmarkBlogs from "@hooks/useBookmarkBlogs";
import pageMeta from "@content/meta";

export default function Blogs() {
  const { bookmarkedBlogs } = useBookmarkBlogs("blogs", []);

  return (
    <>
      <Metadata
        title={pageMeta.bookmark.title}
        description={pageMeta.bookmark.description}
        previewImage={pageMeta.bookmark.image}
        keywords={pageMeta.bookmark.keywords}
      />

      <section className="pageTop flex flex-col gap-2 text-neutral-900 dark:text-neutral-200">
        <PageTop pageTitle="Bookmarks">
          Here you can find blogs bookmarked by you for Later use.
        </PageTop>

        <section className="relative py-5 px-2 flex flex-col gap-2 min-h-[50vh]">
          <AnimatePresence>
            {bookmarkedBlogs!.length != 0 ? (
              <AnimatedDiv
                variants={FadeContainer}
                className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
              >
                {bookmarkedBlogs.map((blog, index) => {
                  return <Blog key={index} blog={blog} />;
                })}
              </AnimatedDiv>
            ) : (
              <div className="font-inter text-center font-medium dark:text-gray-400 mt-10">
                Nothing to see here.
              </div>
            )}
          </AnimatePresence>
        </section>
      </section>
    </>
  );
}
