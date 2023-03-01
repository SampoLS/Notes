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
        title: "Orientation (geometry)",
        isLargerTitle: false,
        path: "/math",
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
        path: "/math",
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
        path: "/math",
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