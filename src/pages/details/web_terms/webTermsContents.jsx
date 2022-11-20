import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const webTermsContents = [
  {
    id: uuidv4(),
    title: "Web Terms",
    isLargerTitle: true,
    path: "/web_terms",
    url: "",
    anchor: "web_terms",
    text: {
      p1: (
        <p>
          The World Wide Web (WWW), commonly known as the Web, is an information
          system where documents and other web resources are identified by
          Uniform Resource Locators (URLs, such as https://example.com/), which
          may be interlinked by hyperlinks, and are accessible over the
          Internet.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Client–server model",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Client–server_model`,
    anchor: "Client–server_model",
    text: {
      p1: (
        <p>
          Client-server model is a distributed application structure that
          partitions tasks or workloads between the providers of a resource or
          service, called servers, and service requesters, called clients. Often
          clients and servers communicate over a computer network on separate
          hardware, but both client and server may reside in the same system. A
          server host runs one or more server programs, which share their
          resources with clients. A client usually does not share any of its
          resources, but it requests content or service from a server. Clients,
          therefore, initiate communication sessions with servers, which await
          incoming requests. Examples of computer applications that use the
          client-server model are email, network printing, and the World Wide
          Web.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Hypertext Transfer Protocol",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Hypertext_Transfer_Protocol`,
    anchor: "Hypertext_Transfer_Protocol",
    text: {
      p1: (
        <p>
          The Hypertext Transfer Protocol (HTTP) is an application layer
          protocol in the Internet protocol suite model for distributed,
          collaborative, hypermedia information systems. HTTP is the foundation
          of data communication for the World Wide Web, where hypertext
          documents include hyperlinks to other resources that the user can
          easily access, for example by a mouse click or by tapping the screen
          in a web browser.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Frontend and backend",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Frontend_and_backend`,
    anchor: "Frontend_and_backend",
    text: {
      p1: (
        <p>
          In software engineering, the terms frontend and backend (or sometimes
          referred to as back end or back-end) refer to the separation of
          concerns between the presentation layer (frontend), and the data
          access layer (backend) of a piece of software, or the physical
          infrastructure or hardware. In the client-server model, the client is
          usually considered the frontend and the server is usually considered
          the backend, even when some presentation work is actually done on the
          server itself.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Presentation layer",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Presentation_layer`,
    anchor: "Presentation_layer",
    text: {
      p1: (
        <p>
          In the seven-layer OSI model of computer networking, the presentation
          layer is layer 6 and serves as the data translator for the network. It
          is sometimes called the syntax layer.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data access layer",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Data_access_layer`,
    anchor: "Data_access_layer",
    text: {
      p1: (
        <p>
          A data access layer (DAL) in computer software is a layer of a
          computer program which provides simplified access to data stored in
          persistent storage of some kind, such as an entity-relational
          database. This acronym is prevalently used in Microsoft environments.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Web server",
    isLargerTitle: false,
    path: "/web_terms",
    url: `${wikiUrl}/Web_server`,
    anchor: "Web server",
    text: {
      p1: (
        <p>
          A web server is computer software and underlying hardware that accepts
          requests via HTTP (the network protocol created to distribute web
          content) or its secure variant HTTPS. A user agent, commonly a web
          browser or web crawler, initiates communication by making a request
          for a web page or other resource using HTTP, and the server responds
          with the content of that resource or an error message. A web server
          can also accept and store resources sent from the user agent if
          configured to do so.
        </p>
      ),
    },
  },
];

// The contents length.
export const contentsLength = webTermsContents.length;
// The sorted contents by the order.
sortContentsByOrder(webTermsContents);

// To hold the items that added subpath(i.e cs/p1, cs/p2) to the path.
let subpathContents = [];
// Add the url parameter to the cs contents' path to show the content based on the route when click the breadcrumbs.
export const webContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  webTermsContents,
);
