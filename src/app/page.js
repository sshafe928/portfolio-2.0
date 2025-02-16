import Link from 'next/link'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <section>
      <h1>Hello, I'm Sabrina!</h1>
      <p>I am a vocational school student for coding as well as a highschool student.
        My favorite languages are Python and JavaScript, but css can be fun to me.
        Currently based in the USA, after a gap year for work, i will be moving to
        Japan to continue my studies and immerse myself in the culture. I am a
        freelancer for online projects but still have an in person job.</p>
        <Link href="https://www.linkedin.com/in/sabrina-shafer-56bb392ba/"><button>linkedin.com/in/sabrina</button></Link>
      </section>
      <section>
        {/* images and photo */}
        <h2>Contact</h2>
        <ul>
          <li><SlLocationPin />United states</li>
          <li><MdOutlineEmail />sabrinashafer321@gmail.com</li>
          <li><FaInstagram /> instagram</li>
        </ul>
      </section>
    
    
    </>
  );
}
