import { v4 as uuidv4 } from "uuid";

// Web url
const url = "https://developer.mozilla.org/en-US/docs/Web";

// This is HTTP page contents
export const httpContents = [
  {
    id: uuidv4(),
    title: "HTTP",
    isLargerTitle: true,
    path: "/http",
    url: `${url}/HTTP`,
    text: {
      p1: (
        <p>
          HTTP is a protocol for fetching resources such as HTML documents. It
          is the foundation of any data exchange on the Web and it is a
          client-server protocol, which means requests are initiated by the
          recipient, usually the Web browser. A complete document is{" "}
          <b>RECONSTRUCTED</b> from the different sub-documents fetched, for
          instance, text, layout description, images, videos, scripts, and more.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "requests",
    isLargerTitle: false,
    path: "/http",
    anchor: "requests",
    text: {
      p1: (
        <p>
          The messages sent by the client, usually a web browser, called
          requests.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "responses",
    isLargerTitle: false,
    path: "/http",
    anchor: "response",
    text: {
      p1: (
        <p>The messages sent by the server as an answer, called responses.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Client: the user-agent",
    isLargerTitle: false,
    path: "/http",
    anchor: "the_user_agent",
    text: {
      p1: (
        <p>
          The <i>user-agent</i> is any tool that acts on behalf of the user,
          such as web browser to initiate the request, never the server.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "HTTP Messages",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Messages`,
    anchor: "http_messages",
    text: {
      p1: (
        <p>
          HTTP messages are how data is changed bewteen a server and client.
          There are two types of messages: requests and response.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "http session",
    isLargerTitle: false,
    path: "/http",
    anchor: "http_session",
    text: {
      p1: (
        <p>
          In client-server protocols, it is the client which establishes the
          connection. Opening a connection in HTTP means initiating a connection
          in the underlying transport layer, usually this is TCP.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Connection management in HTTP/1.x",
    isLargerTitle: false,
    path: "/http",
    anchor: "connection_management",
    text: {
      p1: (
        <p>
          Connection management is a key topic in HTTP: opening and maintaining
          connections largely impacts the performance of Web sites and Web
          applications. In HTTP/1.x, there are several models:{" "}
          <i>short-lived connections</i>, <i>persistent connections</i>, and{" "}
          <i>HTTP pipelining</i>.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "short-lived",
    isLargerTitle: false,
    path: "/http",
    anchor: "short_lived",
    text: {
      p1: (
        <p>
          A new one created each time a request needed sending, and closed once
          the answer had been received.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "persistent-connection",
    isLargerTitle: false,
    path: "/http",
    anchor: "persistent_connection",
    text: {
      p1: (
        <p>
          The persistent-connection model keeps connections opened between
          successive requests, reducing the time needed to open new connections.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "HTTP pipelining model",
    isLargerTitle: false,
    path: "/http",
    anchor: "http_pipelining_model",
    text: {
      p1: (
        <p>
          The HTTP pipelining model goes one step further, by sending several
          successive requests without even waiting for an answer, reducing much
          of the latency in the network.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Content Security Policy (CSP)",
    isLargerTitle: false,
    path: "/http",
    anchor: "csp",
    text: {
      p1: (
        <p>
          Content Security Policy (CSP) is an added layer of security that helps
          to detect and mitigate certain types of attacks, including Cross-Site
          Scripting (XSS) and data injection attacks. These attacks are used for
          everything from data theft, to site defacement, to malware
          distribution. Cross-site scripting (XSS) is a security exploit which
          allows an attacker to inject into a website malicious client-side
          code. This code is executed by the victims and lets the attackers
          bypass access controls and impersonate users. According to the Open
          Web Application Security Project, XSS was the seventh most common Web
          app vulnerability.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "HTTP cookies",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Cookies`,
    anchor: "httpcookies",
    text: {
      p1: (
        <p>
          An HTTP cookie (web cookie, browser cookie) is a small piece of data
          that a server sends to a user's web browser. The browser may store the
          cookie and send it back to the same server with later requests.
          Typically, an HTTP cookie is used to tell if two requests come from
          the same browser—keeping a user logged in, for example. It remembers
          stateful information for the stateless HTTP protocol.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Same-origin policy",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/Security/Same-origin_policy`,
    anchor: "same-origin-policy",
    text: {
      p1: (
        <p>
          The same-origin policy is a critical security mechanism that restricts
          how a document or script loaded by one origin can interact with a
          resource from another origin.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "HTTP caching",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Caching`,
    anchor: "HTTP_caching",
    text: {
      p1: (
        <p>
          The performance of web sites and applications can be significantly
          improved by reusing previously fetched resources. Web caches reduce
          latency and network traffic and thus lessen the time needed to display
          resource representations. HTTP caching makes Web sites more
          responsive. For a web site, web caching is a major component in
          achieving high performance. However, the cache functionality must be
          configured properly, as not all resources stay identical forever: it's
          important to cache a resource only until it changes, not longer.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Types of caches",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Caching#types_of_caches`,
    anchor: "Types_of_caches",
    text: {
      p1: (
        <p>
          There are several types of caches. These can be grouped into two main
          categories: shared and private caches. A shared cache is a cache that
          stores responses for reuse by more than one user. A private cache is
          dedicated to a single user.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Private browser caches",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Caching`,
    anchor: "Private_browser_caches",
    text: {
      p1: (
        <p>
          A private cache is dedicated to a single user. You may have seen
          "caching" in your browser's settings already. A browser cache holds
          all documents the user downloads via HTTP. This cache is used to make
          visited documents available for back/forward navigation, saving,
          viewing-as-source, etc. without requiring an additional trip to the
          server. It also improves offline browsing of cached content.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Shared proxy caches",
    isLargerTitle: false,
    path: "/http",
    url: `${url}/HTTP/Caching`,
    anchor: "Shared_proxy_caches",
    text: {
      p1: (
        <p>
          A shared cache is a cache that stores responses to be reused by more
          than one user. For example, an Internet Service Provider (ISP) or your
          company might have set up a web proxy as part of its local network
          infrastructure to serve many users so that popular resources are
          reused a number of times, reducing network traffic and latency.
        </p>
      ),
    },
  },
];
