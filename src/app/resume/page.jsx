

const ResumePage = () => {
  return (
    <>
    <div>
    <h2 className="text-6xl flex justify-center pt-6 py-12">Resume</h2>
    <section className="justify-items-center pr-20 pl-20">
        <div className="flex flex-col space-y-10 justify-items-end">

          {/* Education1 */}
          <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg p-4 max-w-2xl p-8">
            <div className="flex items-center gap-x-4 justify-center">
              <h5 className="text-lg">Basis Peoria, Peoria</h5>
              <h3 className="text-lg">2018-2021</h3>
            </div>
            <p className="text-md mt-2 text-center">
              At this charter school, I was taught by dedicated teachers in a fast-paced, rigorous environment that pushed me to excel. From 6th to 8th grade, I took advanced classes in subjects like Physics, Biology, and Chemistry, usually taught at the high school level. This challenging curriculum helped me develop strong academic, problem-solving, and time-management skills, while also fostering a love for learning.
            </p>
          </div>

          {/* Education2 */}
          <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg max-w-2xl p-8">
            <div className="flex items-center gap-x-4 justify-center">
              <h5 className="text-lg">Ridgeline Academy 7-12, Phoenix</h5>
              <h3 className="text-lg">2022-2024</h3>
            </div>
            <p className="text-md mt-2 text-center">
              I attended Ridgeline, a charter school, which offered a rigorous academic environment. Seeking additional challenges, I pursued extra credits and graduated a year early with a 3.9 GPA. This achievement showcased my ability to manage a heavy workload, stay focused, and maintain high standards of excellence.
            </p>
          </div>

          {/* Education3 */}
          <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg max-w-2xl p-8">
            <div className="flex items-center gap-x-4 justify-center">
              <h5 className="text-lg">West-MEC Northeast Campus, Phoenix</h5>
              <h3 className="text-lg">2023-2024</h3>
            </div>
            <p className="text-md mt-2 text-center">
              In my final year of high school and first year in the workforce, I attended West-MEC, a trade school focused on computer coding. I gained hands-on experience and earned certifications in Computer Science, HTML, Python, JavaScript, and modern frameworks like React.js, Next.js, and Node.js. My certifications reflect my commitment to staying current with industry standards and expanding my skills.
            </p>
          </div>
          
        </div>
      </section>



        <section>
          <h2>Technical Skills</h2>
          <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg max-w-lg p-7">
            <p>Over around 1 and a half years ive gathered many skills in different coding languages including but not limited to:</p>
            <div>
              <h3>Python</h3>
              <p>Intermediate foundation in Python, working with libraries like Flask, Django</p>
            </div>
            <div>
              <h3>JavaScript</h3>
              <p>Familiar with JavaScript, working with React, Node.js, Express.js, and Next.js</p>
            </div>
            <div>
              <h3>HTML/CSS</h3>
              <p>Familiar with HTML, CSS, and responsive design</p>
            </div>
          </div>
        </section>


        <section>
          <h2>Expirience</h2>
          <div>
            <h3>2024</h3>
            <h4>West-MEC</h4>
            <p>Creating a website and wireframe for a company, including HTML and CSS</p>
          </div>
          <div>
            <h3>Website Creation</h3>
            <p>Worked with a client and held Scrum meetings to create a fully functional website.</p>
          </div>
          
        </section>

        
        <section>
          <h2>Languages</h2>
          <div>
            <h3>English</h3>
            <p>Native</p>
          </div>
          <div>
            <h3>German</h3>
            <p>Upper-Intermediate</p>
          </div>
          <div>
            <h3>Japanese</h3>
            <p>Beginner</p>
          </div>
        </section>
    </div>
    </>
  )
}

export default ResumePage