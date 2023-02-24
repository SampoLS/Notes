import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const cgContents = [
  {
    id: uuidv4(),
    title: "Computer Graphics",
    isLargerTitle: true,
    path: "/cg",
    url: `${wikiUrl}/Computer_graphics`,
    anchor: "Computer_Graphics",
    text: {
      p1: (
        <p>Computer graphics deals with generating images and art with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, digital art, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science. The phrase was coined in 1960 by computer graphics researchers Verne Hudson and William Fetter of Boeing. It is often abbreviated as CG, or typically in the context of film as computer generated imagery (CGI). The non-artistic aspects of computer graphics are the subject of computer science research.</p>
      ),
    },
  },
]

export const contentsLength = cgContents.length;

let subpathContents = [];
export const cgContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  cgContents
);
