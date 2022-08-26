import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const physicsContents = [
  {
    id: uuidv4(),
    title: "Physics",
    isLargerTitle: true,
    path: "/physics",
    url: `${wikiUrl}/Physics`,
    anchor: "Physics",
    text: {
      p1: (
        <p>
          Physics is the natural science that studies matter, its fundamental
          constituents, its motion and behavior through space and time, and the
          related entities of energy and force. Physics is one of the most
          fundamental scientific disciplines, with its main goal being to
          understand how the universe behaves. A scientist who specializes in
          the field of physics is called a physicist.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Matter",
    isLargerTitle: false,
    path: "/physics",
    url: `${wikiUrl}/Matter`,
    anchor: "Matter",
    text: {
      p1: (
        <p>
          In classical physics and general chemistry, matter is any substance
          that has mass and takes up space by having volume. All everyday
          objects that can be touched are ultimately composed of atoms, which
          are made up of interacting subatomic particles, and in everyday as
          well as scientific usage, "matter" generally includes atoms and
          anything made up of them, and any particles (or combination of
          particles) that act as if they have both rest mass and volume. However
          it does not include massless particles such as photons, or other
          energy phenomena or waves such as light or heat. Matter exists in
          various states (also known as phases). These include classical
          everyday phases such as solid, liquid, and gas - for example water
          exists as ice, liquid water, and gaseous steam - but other states are
          possible, including plasma, Bose-Einstein condensates, fermionic
          condensates, and quark-gluon plasma.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mass",
    isLargerTitle: false,
    path: "/physics",
    url: `${wikiUrl}/Mass`,
    anchor: "Mass",
    text: {
      p1: (
        <p>
          Mass is the quantity of matter in a physical body. It is also a
          measure of the body's inertia, the resistance to acceleration (change
          of velocity) when a net force is applied. An object's mass also
          determines the strength of its gravitational attraction to other
          bodies.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Elementary particle",
    isLargerTitle: false,
    path: "/physics",
    url: `${wikiUrl}/Elementary_particle`,
    anchor: "Elementary_particle",
    text: {
      p1: (
        <p>
          In particle physics, an elementary particle or fundamental particle is
          a subatomic particle that is not composed of other particles.
          Particles currently thought to be elementary include the fundamental
          fermions (quarks, leptons, antiquarks, and antileptons), which
          generally are "matter particles" and "antimatter particles", as well
          as the fundamental bosons (gauge bosons and the Higgs boson), which
          generally are "force particles" that mediate interactions among
          fermions. A particle containing two or more elementary particles is a
          composite particle.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Motion",
    isLargerTitle: false,
    path: "/physics",
    url: `${wikiUrl}/Motion`,
    anchor: "Motion",
    text: {
      p1: (
        <p>
          In physics, motion is the phenomenon in which an object changes its
          position with respect to time. Motion is mathematically described in
          terms of displacement, distance, velocity, acceleration, speed and
          frame of reference to an observer and measuring the change in position
          of the body relative to that frame with change in time. The branch of
          physics describing the motion of objects without reference to its
          cause is called kinematics, while the branch studying forces and their
          effect on motion is called dynamics.
        </p>
      ),
    },
  },
];

export const contentsLength = physicsContents.length;
let subpathContents = [];
export const physicsContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  physicsContents
);
