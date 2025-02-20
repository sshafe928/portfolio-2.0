import { FaLanguage } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaPython } from "react-icons/fa";



const ResumePage = () => {
  return (
    <>
    <div className="overflow-hidden">

      <h1 className="text-center text-6xl py-5 text-title font-Unbuntu">Resume</h1>
      <ul className="timeline  timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        <li>
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className=" h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start  mb-10 md:text-end">
          <time className=" italic text-2xl py-4 font-Unbuntu">Languages</time>
            <div className="bg-timeitem p-6 max-w-lg">
            <div className="text-lg font-black pt-1 font-Unbuntu">English</div>
            <progress className="progress w-56" value="100" max="100"></progress>
            <p>Born in the USA growing up speaking english</p>

            <div className="text-lg font-black pt-6 font-Unbuntu">German</div>
            <progress className="progress w-56" value="85" max="100"></progress>
            <p>With a parent from Germany and frequent trips to Europe, speaking German became second nature.</p>

            <div className="text-lg font-black pt-6 font-Unbuntu">Japanese</div>
            <progress className="progress w-56" value="15" max="100"></progress>
            <p>I've been learning Japanese since highschool taking multiple classes.</p>
            </div>
          </div>
          
          <hr className="bg-timeline"/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className=" italic text-2xl py-4 font-Unbuntu">Technical Skills</time>
            <div className="bg-timeitem p-6">
            <div className="text-lg font-black pt-1 font-Unbuntu"> Python </div>
            Intermediate foundation in Python, working with Flask

            <div className="text-lg font-black pt-6 font-Unbuntu"> Html5 </div>
            Familiar with HTML, CSS, and Tailwind

            <div className="text-lg font-black pt-6 font-Unbuntu"> JavaScript </div>
            Familiar with JavaScript, working with React, Node.js, Express.js, and Next.js
          </div>
          </div>
          <hr className="bg-timeline"/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className=" italic text-2xl py-4 font-Unbuntu">Experience</time>
            <div className="bg-timeitem p-6 max-w-lg">
            <div className="text-lg font-black pt-1 font-Unbuntu">West-MEC -- 2024</div>
            Creating a website and wireframe for a company, including HTML and CSS
            <div className="text-lg font-black pt-6 font-Unbuntu">West-MEC -- 2024 - 2025</div>
            Worked with a client and held Scrum meetings to create a fully functional website.
            <div className="text-lg font-black pt-6 font-Unbuntu">Texas Roadhouse -- August 2023 - Present</div>
            Working as a Hostess for the restaurant buisiness
          </div>
          </div>
          <hr className="bg-timeline"/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div >
          <div className="timeline-end md:mb-10 py-4">
            <time className=" italic text-2xl py-8 font-Unbuntu">Education</time>
            <div className="bg-timeitem p-6 max-w-screen-sm">
            <div className="text-lg font-black pt-1 font-Unbuntu">Basis Peoria, Peoria  - 2018-2021</div>
            At this charter school, I was taught by dedicated teachers in a fast-paced, rigorous environment that pushed me to excel. From 6th to 8th grade, I took advanced classes in subjects like Physics, Biology, and Chemistry, usually taught at the high school level. This challenging curriculum helped me develop strong academic, problem-solving, and time-management skills, while also fostering a love for learning.
            
            <div className="text-lg font-black pt-6 font-Unbuntu">Ridgeline Academy 7-12, Phoenix  - 2021-2024</div>
            I attended Ridgeline, a charter school. Seeking additional challenges, I pursued extra credits and graduated a year early with a 3.9 GPA. This achievement showcased my ability to manage a heavy workload, stay focused, and maintain high standards of excellence.
            
            <div className="text-lg font-black pt-6 font-Unbuntu">West-MEC Northeast Campus, Phoenix  - 2023-2025</div>
            In my final year of high school and first year in the workforce, I attended West-MEC, in the Coding rogram. I gained hands-on experience and earned certifications in Computer Science, HTML, Python, JavaScript, and modern frameworks like React.js, Next.js, and Node.js. My certifications reflect my commitment to staying current with industry standards and expanding my skills.
          
          </div>
          </div>
          <hr className="bg-timeline"/>
        </li>
      </ul>

    

      </div>    
    </>
  )
}

export default ResumePage