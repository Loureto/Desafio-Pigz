/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"

export default function MetaTags() {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" />
    </Head>
  )
}