/* eslint-disable @next/next/inline-script-id */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import ListofFAQ from "../components/FAQ/ListofFAQ";
import Hero3 from "../components/FAQ/Hero3";
import Drop from "../components/FAQ/Drop";
import Div1 from "../components/FAQ/Div1";

const FAQ = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const listgroup = [
    {
      title: "What is CDR Report, and why it is Required?",
      details: `
        A competency Demonstration report, also known as CDR, is a document that reflects your engineering knowledge, skills, abilities, and experience to get selected as an engineer for an Australian immigration visa. CDR Report is prepared for Engineers Australia to prove that you are an eligible candidate for the position you applied for on an Australian immigration visa.
        `,
    },
    {
      title: "How do I write My perfect competency Demonstration (CDR) Report?",
      details:
        "A perfect CDR Report is written by following all the strict guidelines of Engineers Australia mentioned in the MSA booklet. Engineers Australia Expects you to write an ideal CDR Report on your own; However, you might be an inexperienced writer so you can take professional help from reliable Service providers.",
    },
    {
      title:
        "Do you offer complete CDRs report writing services for an Australian immigration visa?",
      details:
        "We offer our complete CDRs report writing and reviewing services, including a Summary statement Report, three career Episode Reports, continuing Professional development (CPD) Report, and Cv-Resume Report for an Australian immigration visa.",
    },
    {
      title: "What are the documents required for the CDR writing service?",
      details: (
        <div>
          The Documents Required for CDR writing services are as follows:
          <br />
          • Three Career Episodes Report (Academic/project/work bases)
          <br />
          • Summary Statement Report
          <br />
          • Continuing Professional Development (CPD) Report
          <br />
          • Cv-Resume Report
          <br />
          • Recent passport size photograph
          <br />
          • Bio page of your identity
          <br />
          • English language test Report
          <br />
          • Academic Transcripts Certificate
          <br />
        </div>
      ),
    },
    {
      title: "Which English language tests do Engineers Australia accept?",
      details: (
        <div>
          The English Language tests that Engineers Australia accepts are:
          <br />
          • IELTS
          <br />
          • TOEFL iBT <br />
        </div>
      ),
    },
    {
      title: "How fast can you deliver my CDRs Report?",
      details: "We will deliver you a complete CDR Report within Three weeks.",
    },
    {
      title: "Do I need to provide my academic project?",
      details:
        "An academic project is a crucial document that must be submitted as a career Episode Report during your professional studies. ",
    },
    {
      title: "What do I need to submit for the career Episode Report?",
      details: (
        <div>
          The following Material is crucial while writing a career Episode
          Report: • An engineering Task you completed during your Academic
          program. • A project you have contributed to or are contributing to. •
          A specific Engineering challenge and your strategies to solve that
          challenge. • Your position on your previous project and current
          project.
        </div>
      ),
    },
  ];
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is CDR Report, and why it is Required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "        A competency Demonstration report, also known as CDR, is a document that reflects your engineering knowledge, skills, abilities, and experience to get selected as an engineer for an Australian immigration visa. CDR Report is prepared for Engineers Australia to prove that you are an eligible candidate for the position you applied for on an Australian immigration visa.\n",
        },
      },
      {
        "@type": "Question",
        name: "How do I write My perfect competency Demonstration (CDR) Report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A perfect CDR Report is written by following all the strict guidelines of Engineers Australia mentioned in the MSA booklet. Engineers Australia Expects you to write an ideal CDR Report on your own; However, you might be an inexperienced writer so you can take professional help from reliable Service providers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer complete CDRs report writing services for an Australian immigration visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "        We offer our complete CDRs report writing and reviewing services, including a Summary statement Report, three career Episode Reports, continuing Professional development (CPD) Report, and Cv-Resume Report for an Australian immigration visa.\n",
        },
      },
      {
        "@type": "Question",
        name: "What are the documents required for the CDR writing service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Documents Required for CDR writing services are as follows:\n        • Three Career Episodes Report (Academic/project/work bases)\n        • Summary Statement Report\n        • Continuing Professional Development (CPD) Report\n        • Cv-Resume Report\n        • Recent passport size photograph\n        • Bio page of your identity\n        • English language test Report\n        • Academic Transcripts Certificate",
        },
      },
      {
        "@type": "Question",
        name: "Which English language tests do Engineers Australia accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The English Language tests that Engineers Australia accepts are:\n        • IELTS\n        • TOEFL iBT ",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you deliver my CDRs Report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We will deliver you a complete CDR Report within Three weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to provide my academic project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "        An academic project is a crucial document that must be submitted as a career Episode Report during your professional studies. \n",
        },
      },
      {
        "@type": "Question",
        name: "What do I need to submit for the career Episode Report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The following Material is crucial while writing a career Episode Report:\n        • An engineering Task you completed during your Academic program.\n        • A project you have contributed to or are contributing to.\n• A specific Engineering challenge and your strategies to solve that challenge.\n• Your position on your previous project and current project.",
        },
      },
      {
        "@type": "Question",
        name: "",
        acceptedAnswer: {
          "@type": "Answer",
          text: "",
        },
      },
    ],
  };
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <Script type="application/ld+json">{JSON.stringify(schemaData)}</Script>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="FAQ" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Div1
        title="Frequently Asked Questions"
        description="Our experience in Writing has helped us understand what most of our clients are curious about."
        image="/images/FAQ/FAQ12.png"
        alt="FAQ"
      />
      <ListofFAQ listgroup={listgroup} />
      <Drop />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const faq = await fetch(
    "    https://cdrskills.herokuapp.com/api/faq?populate=deep  "
  );

  const disclaimerRes = await faq.json();

  return {
    props: {
      disclaimerRes: disclaimerRes?.data?.attributes || "",
      revalidate: 1,
    },
  };
};

export default FAQ;
