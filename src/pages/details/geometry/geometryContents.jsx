import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const geometryContents = [
    {
        id: uuidv4(),
        title: "Geometry",
        isLargerTitle: true,
        path: "/geometry",
        url: `${wikiUrl}/Geometry`,
        anchor: "Geometry",
        text: {
          p1: <p>Geometry (from Ancient Greek γεωμετρία (geōmetría) 'land measurement'; from γῆ (gê) 'earth, land', and μέτρον (métron) 'a measure')[citation needed] is, with arithmetic, one of the oldest branches of mathematics. It is concerned with properties of space such as the distance, shape, size, and relative position of figures. A mathematician who works in the field of geometry is called a geometer.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Synthetic geometry",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Synthetic_geometry`,
        anchor: "Synthetic_geometry",
        text: {
          p1: (
            <p>Synthetic geometry (sometimes referred to as axiomatic geometry or even pure geometry) is geometry without the use of coordinates. It relies on the axiomatic method for proving all results from a few basic properties initially called postulate, and presently called axioms.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Curve",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Curve`,
        anchor: "Curve",
        text: {
          p1: (
            <p>In mathematics, a curve (also called a curved line in older texts) is an object similar to a line, but that does not have to be straight.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Distance",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Distance`,
        anchor: "Distance",
        text: {
          p1: (
            <p>Distance is a numerical or occasionally qualitative measurement of how far apart objects or points are. In physics or everyday usage, distance may refer to a physical length or an estimation based on other criteria (e.g. "two counties over"). Since spatial cognition is a rich source of conceptual metaphors in human thought, the term is also frequently used metaphorically to mean a measurement of the amount of difference between two similar objects (such as statistical distance between probability distributions or edit distance between strings of text) or a degree of separation (as exemplified by distance between people in a social network). Most such notions of distance, both physical and metaphorical, are formalized in mathematics using the notion of a metric space.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Curvature",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Curvature`,
        anchor: "Curvature",
        text: {
          p1: (
            <p>In mathematics, curvature is any of several strongly related concepts in geometry. Intuitively, the curvature is the amount by which a curve deviates from being a straight line, or a surface deviates from being a plane.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Line segment",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Line_segment`,
        anchor: "Line_segment",
        text: {
          p1: (
            <p>In geometry, a line segment is a part of a straight line that is bounded by two distinct end points, and contains every point on the line that is between its endpoints. The length of a line segment is given by the Euclidean distance between its endpoints. A closed line segment includes both endpoints, while an open line segment excludes both endpoints; a half-open line segment includes exactly one of the endpoints. In geometry, a line segment is often denoted using a line above the symbols for the two endpoints.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Polygon",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Polygon`,
        anchor: "Polygon",
        text: {
          p1: (
            <p>In geometry, a polygon (/ˈpɒlɪɡɒn/) is a plane figure that is described by a finite number of straight line segments connected to form a closed polygonal chain (or polygonal circuit). The bounded plane region, the bounding circuit, or the two together, may be called a polygon.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Edge (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Edge_(geometry)`,
        anchor: "Edge_(geometry)",
        text: {
          p1: (
            <p>In geometry, an edge is a particular type of line segment joining two vertices in a polygon, polyhedron, or higher-dimensional polytope. In a polygon, an edge is a line segment on the boundary, and is often called a polygon side. In a polyhedron or more generally a polytope, an edge is a line segment where two faces (or polyhedron sides) meet. A segment joining two vertices while passing through the interior or exterior is not an edge but instead is called a diagonal.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Angle",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Angle`,
        anchor: "Angle",
        text: {
          p1: (
            <p>In Euclidean geometry, an angle is the figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle. Angles formed by two rays lie in the plane that contains the rays. Angles are also formed by the intersection of two planes. These are called dihedral angles. Two intersecting curves may also define an angle, which is the angle of the rays lying tangent to the respective curves at their point of intersection.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Line (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Line_(geometry)`,
        anchor: "Line_(geometry)",
        text: {
          p1: (
            <p>In geometry, a line is an infinitely long object with no width, depth, or curvature. Thus, lines are one-dimensional objects, though they may exist in two, three, or higher dimension spaces. The word line may also refer to a line segment in everyday life, which has two points to denote its ends.</p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Vertex (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Vertex_(geometry)`,
        anchor: "Vertex_(geometry)",
        text: {
          p1: (
            <p>
                In geometry, a vertex (in plural form: vertices or vertexes) is a point where two or more curves, lines, or edges meet. As a consequence of this definition, the point where two lines meet to form an angle and the corners of polygons and polyhedra are vertices.
            </p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Orientation (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Orientation_(geometry)`,
        anchor: "Orientation_(geometry)",
        text: {
          p1: (
            <p>
              In geometry, the orientation, angular position, attitude, bearing, or
              direction of an object such as a line, plane or rigid body is part of
              the description of how it is placed in the space it occupies. More
              specifically, it refers to the imaginary rotation that is needed to
              move the object from a reference placement to its current placement. A
              rotation may not be enough to reach the current placement. It may be
              necessary to add an imaginary translation, called the object's
              location (or position, or linear position). The location and
              orientation together fully describe how the object is placed in space.
              The above-mentioned imaginary rotation and translation may be thought
              to occur in any order, as the orientation of an object does not change
              when it translates, and its location does not change when it rotates.
            </p>
          ),
        },
    },
    {
        id: uuidv4(),
        title: "Point (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Point_(geometry)`,
        anchor: "Point_(geometry)",
        text: {
            p1: <p>In classical Euclidean geometry, a point is a primitive notion that models an exact location in the space, and has no length, width, or thickness. In modern mathematics, a point refers more generally to an element of some set called a space.</p>
        }
    },
    {
        id: uuidv4(),
        title: "Position (geometry)",
        isLargerTitle: false,
        path: "/geometry",
        url: `${wikiUrl}/Position_(geometry)`,
        anchor: "Position_(geometry)",
        text: {
            p1: <p>In geometry, a position or position vector, also known as location
                vector or radius vector, is a Euclidean vector that represents the
                position of a point P in space in relation to an arbitrary reference
                origin O. Usually denoted x, r, or s, it corresponds to the straight
                line segment from O to P. In other words, it is the displacement or
                translation that maps the origin to P:</p>
    },
  },
]

export const contentsLength = geometryContents.length;

let subpathContents = [];
export const geometryContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    geometryContents
);