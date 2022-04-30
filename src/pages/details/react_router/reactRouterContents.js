import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

// This is react router page contents
export const reactRouterContents = [
  {
    id: uuidv4(),
    title: "React Router",
    isLargerTitle: true,
    path: "/react-router",
    url: "https://reactrouter.com/docs/en/v6/getting-started/concepts",
    anchor: "react_router",
    text: {
      p1: (
        <p>
          React Router is a collection of React components, hooks and utilities
          that make it easy to build multi-page applications with React. React
          Router is used to controll the URL.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "URL",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "url",
    text: {
      p1: (
        <p>
          URL - The URL in the address bar. A lot of people use the term "URL"
          and "route" interchangeably, but this is not a route in React Router,
          it's just a URL.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Location",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "location",
    text: {
      p1: (
        <p>
          Location - This is a React Router specific object that is based on the
          built-in browser's window.location object. It represents "where the
          user is at". It's mostly an object representation of the URL but has a
          bit more to it than that. The browser has a location object on
          window.location. It tells you information about the URL but also has
          some methods to change it.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Location hash",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "location_hash",
    text: {
      p1: (
        <p>
          Hashes in URLs indicate a scroll position on the current page. Before
          the window.history.pushState API was introduced, web developers did
          client side routing exclusively with the hash portion of the URL, it
          was the only part we could manipulate without making a new request to
          the server. However, today we can use it for its designed purpose.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Location State",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "location_state",
    text: {
      p1: (
        <p>
          Location State - A value that persists with a location that isn't
          encoded in the URL. Much like hash or search params (data encoded in
          the URL), but stored invisibly in the browser's memory.
        </p>
      ),
      p2: (
        <p>
          You set location state in two ways: on &lt;Link&gt; or navigate. And
          on the next page you can access it with useLocation
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Location key",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "location_key",
    text: {
      p1: (
        <p>
          Each location gets a unique key. This is useful for advanced cases
          like location-based scroll management, client side data caching, and
          more. Because each new location gets a unique key, you can build
          abstractions that store information in a plain object, new Map(), or
          even locationStorage.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "History Stack",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "history_stack",
    text: {
      p1: (
        <p>
          History Stack - As the user navigates, the browser keeps track of each
          location in a stack. If you click and hold the back button in a
          browser you can see the browser's history stack right there.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Client Side Routing (CSR)",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "csr",
    text: {
      p1: (
        <p>
          Client Side Routing (CSR) - A plain HTML document can link to other
          documents and the browser handles the history stack itself. Client
          Side Routing enables developers to manipulate the browser history
          stack without making a document request to the server.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "History",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "history",
    text: {
      p1: (
        <p>
          History - An object that allows React Router to subscribe to changes
          in the URL as well as providing APIs to manipulate the browser history
          stack programmatically.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "History Action",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "history_action",
    text: {
      p1: (
        <p>
          History Action - One of `POP`, `PUSH`, or `REPLACE`. Users can arrive
          at a URL for one of these three reasons. A push when a new entry is
          added to the history stack (typically a link click or the programmer
          forced a navigation). A replace is similar except it replaces the
          current entry on the stack instead of pushing a new one. Finally, a
          pop happens when the user clicks the back or forward buttons in the
          browser chrome.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Segment",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "segment",
    text: {
      p1: (
        <p>
          Segment - The parts of a URL or path pattern between the / characters.
          For example, "/users/123" has two segments.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Path Pattern",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "path_pattern",
    text: {
      p1: (
        <p>
          Path Pattern - These look like URLs but can have special characters
          for matching URLs to routes, like dynamic segments ("/users/:userId")
          or star segments ("/docs/*"). They aren't URLs, they're patterns that
          React Router will match.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Dynamic Segment",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "dynamic_segment",
    text: {
      p1: (
        <p>
          Dynamic Segment - A segment of a path pattern that is dynamic, meaning
          it can match any values in the segment. For example the pattern
          /users/:userId will match URLs like /users/123
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "URL Params",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "url_params",
    text: {
      p1: (
        <p>
          URL Params - The parsed values from the URL that matched a dynamic
          segment.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Router",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "router",
    text: {
      p1: (
        <p>
          Router - Stateful, top-level component that makes all the other
          components and hooks work.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Route Config",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "route_config",
    text: {
      p1: (
        <p>
          Route Config - A tree of routes objects that will be ranked and
          matched (with nesting) against the current location to create a branch
          of route matches.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Route",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "route",
    text: {
      p1: (
        <p>
          Route - An object or Route Element typically with a shape of (path,
          element) or &lt;Route path element&gt;. The path is a path pattern.
          When the path pattern matches the current URL, the element will be
          rendered.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Route Element",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "route_element",
    text: {
      p1: (
        <p>
          Route Element - Or &lt;Route&gt;. This element's props are read to
          create a route by &lt;Route&gt;, but otherwise does nothing.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Nested Routes",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "nested_routes",
    text: {
      p1: (
        <p>
          Nested Routes - Because routes can have children and each route
          defines a portion of the URL through segments, a single URL can match
          multiple routes in a nested "branch" of the tree. This enables
          automatic layout nesting through outlet, relative links, and more.
        </p>
      ),
      p2: (
        <p>
          The nested url segments map to nested component trees. This is perfect
          for creating UI that has persistent navigation in layouts with an
          inner section that changes with the URL. If you look around the web
          you'll notice many websites (and especially web apps) have multiple
          levels of layout nesting.
        </p>
      ),
      p3: (
        <p>
          The parent route is responsible for making sure the matching child
          route is rendered with &lt;Outlet&gt;.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Relative links",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "relative_links",
    text: {
      p1: (
        <p>
          Relative links - Links that don't start with / will inherit the
          closest route in which they are rendered. This makes it easy to link
          to deeper URLs without having to know and build up the entire path.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Match",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "match",
    text: {
      p1: (
        <p>
          Match - An object that holds information when a route matches the URL,
          like the url params and pathname that matched.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Matches",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "matches",
    text: {
      p1: (
        <p>
          Matches - An array of routes (or branch of the route config) that
          matches the current location. This structure enables nested routes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Parent Route",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "parent_route",
    text: {
      p1: <p>Parent Route - A route with child routes.</p>,
    },
  },
  {
    id: uuidv4(),
    title: "Outlet",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "Outlet",
    text: {
      p1: (
        <p>
          Outlet - A component that renders the next match in a set of matches.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Index Route",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "index_route",
    text: {
      p1: (
        <p>
          Index Route - A child route with no path that renders in the parent's
          outlet at the parent's URL.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Layout Route",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "layout_route",
    text: {
      p1: (
        <p>
          Layout Route - A parent route without a path, used exclusively for
          grouping child routes inside a specific layout.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "routing",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "routing",
    text: {
      p1: (
        <p>
          Routing is the process of deciding which React elements will be
          rendered on a given page of your app, and how they will be nested.
          React Router provides two interfaces for declaring your routes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "navigation",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "navigation",
    text: {
      p1: (
        <p>
          React Router's navigation interfaces let you change the currently
          rendered page by modifying the current location. When the URL changes
          we call that a "navigation".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "<BrowserRouter>",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "browserRouter",
    text: {
      p1: (
        <p>
          &lt;BrowserRouter&gt; is the recommended interface for running React
          Router in a web browser. A &lt;BrowserRouter&gt; stores the current
          location in the browser's address bar using clean URLs and navigates
          using the browser's built-in history stack.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "<Link>",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "link",
    text: {
      p1: (
        <p>
          A &lt;Link&gt; is an element that lets the user navigate to another
          page by clicking or tapping on it. In react-router-dom, a &lt;Link&gt;
          renders an accessible a element with a real href that points to the
          resource it's linking to. Let the user change the URL.
        </p>
      ),
      p2: (
        <p>
          This is the primary means of navigation. Rendering a &lt;Link&gt;
          allows the user to change the URL when they click it. React Router
          will prevent the browser's default behavior and tell the history to
          push a new entry into the history stack. The location changes and the
          new matches will render.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "<Navlink>",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "navlink",
    text: {
      p1: (
        <p>
          A &lt;NavLink&gt; is a special kind of Link that knows whether or not
          it is "active". This is useful when building a navigation menu such as
          a breadcrumb or a set of tabs where you'd like to show which of them
          is currently selected.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "<Outlet>",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "outlet",
    text: {
      p1: (
        <p>
          An &lt;Outlet&gt; should be used in parent route elements to render
          their child route elements. This allows nested UI to show up when
          child routes are rendered. If the parent route matched exactly, it
          will render a child index route or nothing if there is no index route.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "<Routes> and <Route>",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "routes_and_route",
    text: {
      p1: (
        <p>
          &lt;Routes&gt; and &lt;Route&gt; are the primary ways to render
          something in React Router based on the current location. You can think
          about a &lt;Route&gt; kind of like an 'if' statement; if its 'path'
          matches the current URL, it renders its element! The &lt;Route
          caseSensitive&gt; prop determines if the matching should be done in a
          case-sensitive manner (defaults to false).
        </p>
      ),
      p2: (
        <p>
          Whenever the location changes, &lt;Routes&gt; looks through all its
          children &lt;Routes&gt; elements to find the best match and renders
          that branch of the UI. &lt;Routes&gt; elements may be nested to
          indicate nested UI, which also correspond to nested URL paths. Parent
          routes render their child routes by rendering an &lt;Outlet&gt;.
        </p>
      ),
      p3: (
        <p>
          The default &lt;Route element&gt; is an &lt;Outlet&gt;. This means the
          route will still render its children even without an explicit element
          prop, so you can nest route paths without nesting UI around the child
          route elements. The &lt;Route&gt; is nested the UI will be nested too.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "index routes",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "index_routes",
    text: {
      p1: (
        <p>
          Index routes can be thought of as "default child routes". When a
          parent route has multiple children, but the URL is just at the
          parent's path, you probably want to render something into the outlet.
        </p>
      ),
      p2: (
        <p>
          You can have an index route at any level of the route hierarchy that
          will render when the parent matches but none of its other children do.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "'not found' routes",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "not_fount_routes",
    text: {
      p1: (
        <p>
          When no other route matches the URL, you can render a "not found"
          route using ' path="*" '. This route will match any URL, but will have
          the weakest precedence so the router will only pick it if no other
          routes match.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "multiple sets of routes",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "multiple_routes",
    text: {
      p1: (
        <p>
          Although you should only ever have a single &lt;Router&gt; in an app,
          you may have as many &lt;Routes&gt; as you need, wherever you need
          them. Each &lt;Routes&gt; element operates independently of the others
          and picks a child route to render.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useParams() - reading url parameters",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "useParams",
    text: {
      p1: (
        <p>
          The useParams hook returns an object of key/value pairs of the dynamic
          params from the current URL that were matched by the &lt;Route
          path&gt;. Child routes inherit all params from their parent routes.
          Use ':style' syntax in your route path and useParams() to read them. A
          very common use-case is fetching data when the component renders.
        </p>
      ),
      p2: (
        <p>
          Read the parameters from the current url if the &lt;Route&gt;'s path
          is the form :style, and then it will render the &lt;Route&gt;'s
          element if the &lt;Route&gt;'s path matched the current url. The
          matched element can read the parameters from the current url. The path
          parameter of &lt;Route path=":style"&gt; comes from the URL.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useSearchParams() - Search params",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "useSearchParams",
    text: {
      p1: (
        <p>
          Search params are like URL params but they sit in a different position
          in the URL. Instead of being in the normal URL segments separated by
          /, they are at the end after a ?. You've seen them across the web like
          "/login?success=1" or "/shoes?brand=nike&sort=asc&sortby=price".
        </p>
      ),
      p2: (
        <p>
          React Router makes it easy to read and manipulate the search params
          with useSearchParams. It works a lot like React.useState() but stores
          and sets the state in the URL search params instead of in memory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useNavigate()",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "useNavigate",
    text: {
      p1: (
        <p>
          The useNavigate hook returns a function that lets you navigate
          programmatically. This function is returned from the useNavigate hook
          and allows you, the programmer, to change the URL whenever you want.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useLocation()",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "useLocation",
    text: {
      p1: (
        <p>
          This hook returns the current location object. This can be useful if
          you'd like to perform some side effect whenever the current location
          changes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useMatch()",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "useMatch",
    text: {
      p1: (
        <p>
          Returns match data about a route at the given path relative to the
          current location.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Summary",
    isLargerTitle: false,
    path: "/react-router",
    anchor: "Summary",
    text: {
      p1: (
        <ol className="list">
          <li>
            Link(a anchor) clicked -- pass parameters to url(route) -- we can
            use that parameters from the url(actually parameters from anchors)
          </li>
        </ol>
      ),
    },
  },
];

sortContentsByOrder(reactRouterContents);

export const contentsLength = reactRouterContents.length;

let subpathContents = [];
export const reactRouterContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  reactRouterContents
);
