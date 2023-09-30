// Page Components START----------
import BlogsSection from "@components/Home/BlogsSection";
import SkillSection from "@components/Home/SkillSection";
import Image from "next/image";
import Metadata from "@components/MetaData";
import Contact from "@components/Contact";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { homeProfileImage } from "@utils/utils";
// import getRSS from "@lib/generateRSS";
import generateSitemap from "@lib/sitemap";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import MDXContent from "@lib/MDXContent";
import pageMeta from "@content/meta";
import React from "react";
import { FrontMatter } from "@lib/types";
import Link from "next/link";

export default function Home({ blogs }: { blogs: FrontMatter[] }) {
  return (
    <>
      <Metadata
        title="Vinay Gawade"
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20  min-h-screen"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={homeProfileImage}
                className="rounded-full shadow filter saturate-1"
                width={933}
                height={933}
                alt="Profile Image"
                quality={75}
                priority
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                // }}
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-light font-kalam"
                >
                  Vinay Gawade
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                >
                  Innovative Web Developer Pushing Boundaries with Code😉.
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
                🎓 Diploma in Computer Engineering | 🌟 Eager to Explore Diverse Web Technologies
              </motion.p>
            </div>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-white dark:hover:bg-neutral-800 outline-none  active:scale-95 transition-transform"
            >
              <FiDownload />
              <p>Resume</p>
            </Link>
          </div>
        </motion.section>

        <div>
          <SkillSection />
          {/* Hidden blog section for now. */}
          {/* <BlogsSection blogs={blogs} /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent("posts").getAllPosts(3);
  // await getRSS();
  await generateSitemap();

  return {
    props: { blogs },
  };
}
