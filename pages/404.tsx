import React from "react";
import Link from "next/link";
import MetaData from "@components/MetaData";

export default function PageNotFound() {
  return (
    <>
      <MetaData
        title="404"
        suffix="Page Not Found"
        description="You are lost in Space !!!"
      />
      <section className="pageTop flex flex-col gap-5 md:pt-20">
        <h1 className="font-bold font-barlow text-3xl md:text-5xl uppercase dark:text-white">
          Oops, you stumbled upon a cosmic glitch! 🚀
        </h1>
        <p className="font-inter text-gray-500 dark:text-gray-400/70">
          You've uncovered a hidden secret dimension, but it seems that what you're looking for is floating in another galaxy. Don't worry, it's not your fault - even the smartest AI bots get lost sometimes! To find your way back, let's go on an interstellar journey to my <b>Home🌍-page</b>.
        </p>
        <Link
          href="/"
          className="p-3 w-full xs:max-w-[250px] xs:mx-0 sm:p-3 font-bold mx-auto bg-gray-300 dark:bg-darkSecondary text-center rounded-md text-black dark:text-white select-none active:scale-95 transition-all lg:hover:ring-2 ring-black/50 dark:ring-white/50 whitespace-nowrap"
        >
          Return to Earth, ASAP! 🌍🚀
        </Link>
      </section>
    </>
  );
}
