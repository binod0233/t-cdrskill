import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CDRWriting from "./screens/CDRWriting";
import Landing from "./screens/Landing";
import CareerEpisodeWriting from "./screens/CareerEpisodeWriting";
import SummaryStatementWriting from "./screens/SummaryStatementWriting";
import Stage1CompetencyAssessment from "./screens/Stage1CompetencyAssessment";
import Stage2CometencyAssessment from "./screens/Stage2CometencyAssessment";
import FAQ from "./screens/FAQ";
import Blogs from "./screens/Blogs";
import ContactUs from "./screens/ContactUs";
import Testimonials from "./screens/Testimonials";
import MeetOurAdvisors from "./screens/MeetOurAdvisors";
import Disclaimer from "./screens/Disclaimer";
import Header from "./components/Header";
import Pricing from "./screens/Pricing";
import Footer from "./components/Footer";
import CDRReviewing from "./screens/CDRReviewing";
import CPDWriting from "./screens/CPDWriting";
import CDRPlagiarismCheckingandRemoval from "./screens/CDRPlagiarismCheckingandRemoval";
import CVResumeWriting from "./screens/CVResumeWriting";
import Samples from "./screens/Samples";
import Anzsco from "./screens/Anzsco";
import SpecificAnzsco from "./screens/SpecificAnzsco";
import CDRServices from "./screens/CDRServices";
import Socials from "./components/Socials";
import TakeMeToTop from "./components/TakeMeToTop";
import SpecificBlog from "./screens/SpecificBlog";
import RefundPolicy from "./screens/RefundPolicy";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import NotFound from "./screens/NotFound";
import BlogCategoryScreen from "./screens/BlogCategoryScreen";
import SpecificSample from "./screens/SpecificSample";
const App = () => {
  const headScroll = useRef(null);

  const scrollToTop = () => {
    headScroll.current.scrollIntoView();
  };
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Router>
        <div ref={headScroll}></div>

        <Socials />
        <TakeMeToTop scrollToTop={scrollToTop} />

        <div className="headerContainer">
          <Header scrollToTop={scrollToTop} />
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<CDRServices />} />

          <Route
            path="/services/cdr-writing-service-australia"
            element={<CDRWriting />}
          />
          <Route
            path="/services/career-episode-writing-australia"
            element={<CareerEpisodeWriting />}
          />
          <Route
            path="/services/summary-statement-writing-australia"
            element={<SummaryStatementWriting />}
          />
          <Route
            path="/services/stage-1-competency-assessment-australia"
            element={<Stage1CompetencyAssessment />}
          />
          <Route
            path="/services/stage-2-competency-assessment-australia"
            element={<Stage2CometencyAssessment />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/our-agents" element={<MeetOurAdvisors />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route
            path="/services/cdr-reviewing-australia"
            element={<CDRReviewing />}
          />
          <Route
            path="/services/cpd-writing-australia"
            element={<CPDWriting />}
          />
          <Route
            path="/services/plagiarism-checking-and-removal"
            element={<CDRPlagiarismCheckingandRemoval />}
          />
          <Route
            path="/services/professional-resume-writing-australia"
            element={<CVResumeWriting />}
          />
          <Route path="/cdr-sample" element={<Samples />} />
          <Route path="/cdr-sample/:sample" element={<SpecificSample />} />

          <Route path="/anzsco-codes" element={<Anzsco />} />
          <Route path="/anzsco-codes/:anzsco" element={<SpecificAnzsco />} />
          <Route path="/blog/:slug" element={<SpecificBlog />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog/category/:type" element={<BlogCategoryScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
