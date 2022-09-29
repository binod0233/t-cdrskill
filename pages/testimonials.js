/* eslint-disable @next/next/inline-script-id */
import React from "react";
import Hero3 from "../components/FAQ/Hero3";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Seo from "../components/Seo";

import TEstimonials from "../components/Testimonials/TEstimonials";

const Testimonials = ({ testimonialRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "CDR report",
    image: "",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      worstRating: "0",
      ratingCount: "20",
    },
  };
  const { shared, seo } = testimonialRes;
  return (
    <div>
      <Script type="application/ld+json">{JSON.stringify(schemaData)}</Script>
      {/* <Head>
        <title>Testimonials | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Testimonials | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <TEstimonials testimonialRes={testimonialRes} />
      <Hero3
        title={shared?.data?.attributes?.title}
        buttonName1="Whatsapp"
        buttonName2="facebook"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const testimonial = await fetch(
    "   https://cdrskills.herokuapp.com/api/testimonial?populate=deep"
  );

  const testimonialRes = await testimonial.json();

  return {
    props: {
      testimonialRes: testimonialRes?.data?.attributes || "",
    },
  };
};

export default Testimonials;
