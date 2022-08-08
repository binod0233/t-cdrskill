import React from "react";
import Contactus from "../components/ContactUs/Contactus";
import Hero3 from "../components/FAQ/Hero3";
import Meta from "../components/Meta";

const ContactUs = () => {
  return (
    <div>
      <Meta title="Contact Us" />
      <Contactus />
      <Hero3
        buttonName1="Whatsapp"
        buttonName2="Facebook"
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
      />
    </div>
  );
};

export default ContactUs;
