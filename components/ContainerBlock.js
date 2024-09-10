import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter;

  const meta = {
    title: "Christian Collins - Developer, Student",
    description:
      "I am starting a new career as a Software Developer, get in touch with me if you want to know more.",
    image: "avatar_alt.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://iamchristiancollins.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://iamchristiancollins.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Christian Collins" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamchriscollins" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="bg-white dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
