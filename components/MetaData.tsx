import Head from "next/head";
import useWindowLocation from "@hooks/useWindowLocation";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string;
  suffix?: string;
};

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "Vinay Gawade"} />
      <title>{title + (suffix ? ` - ${suffix}` : "")}</title>
      <meta name="theme-color" content="#000" />
      {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      <link rel="manifest" href="/manifest.json" />
      {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link> */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Vinay Gawade"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${keywords || ""} Vinay, Vinay Gawade, vinugawade, vinulike11, vinugawade, vinugawadevr, vinu-gawade, Gawade`}
      />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} Vinay Gawade`} />
      <meta property="og:description" content={description || "Vinay Gawade"} />
      <meta property="og:site_name" content="Vinay Gawade" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@VinuGawade" />
      <meta name="twitter:title" content={`${title || ""} Vinay Gawade`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage || ""} />
      <meta name="twitter:image:alt" content={title || "Vinay Gawade"}></meta>
      <meta name="twitter:domain" content={currentURL} />
    </Head>
  );
}
