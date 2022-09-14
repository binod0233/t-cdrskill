import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import TagManager from "react-gtm-module";
import { SSRProvider } from "react-bootstrap";
import Script from "next/script";
import Chatra from "@chatra/chatra";

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#203546",
    },
  },
  ID: "rrNdQEsnqBf3wTrLD",
};

const tagManagerArgs = {
  gtmId: "GTM-PF3C68K",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  const headScroll = useRef(null);

  const scrollToTop = () => {
    headScroll.current.scrollIntoView();
  };
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 14520894;
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          (n.async = !0),
            (n.type = "text/javascript"),
            (n.src = "https://cdn.livechatinc.com/tracking.js"),
            t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
    })(window, document, [].slice);

    //     Chatra("init", config);
    // Chatra("pageView");
  }, []);
  return (
    <SSRProvider>
      <div ref={headScroll}></div>
      <Socials />
      <TakeMeToTop scrollToTop={scrollToTop} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="p:domain_verify"
          content="e4581bc81db8eda2fd8ab8306e420b39"
        />
        <meta
          name="google-site-verification"
          content="HHmwlU63B0HUdwmsWjO3ejftL0QN5xQIvkxwkmljGoY"
        />
      </Head>
      <Script
        id="clickcease"
        src="https://www.clickcease.com/monitor/stat.js'"
        onLoad={() => {
          var script = document.createElement("script");
          script.async = true;
          script.type = "text/javascript";
          var target = "https://www.clickcease.com/monitor/stat.js";
          script.src = target;
          var elem = document.head;
          elem.appendChild(script);
        }}
      />
      <Header scrollToTop={scrollToTop} />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
// <!-- Start of LiveChat (www.livechat.com) code -->
// <script>
//     window.__lc = window.__lc || {};
//     window.__lc.license = 14520894;
//     ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
// </script>
// <noscript><a href="https://www.livechat.com/chat-with/14520894/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
// <!-- End of LiveChat code -->
