

const ResumePage = () => {
  return (
    <>
    <div>
    <h2 className="text-6xl flex justify-center pt-6">Resume</h2>
        <section >
          <h2>Education</h2>
          <div className="flex flex-col space-y-10 ">

          {/* Education1 */}
          <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg p-4 max-w-2xl p-8">
            <div className="flex items-center gap-x-4">
              <h5 className="text-lg">Basis Peoria, Peoria</h5>
              <h3 className="text-lg ">2018-2021</h3>
            </div>
            <p className="text-md mt-2 ">
            At this charter school, I was taught by dedicated teachers in a rigorous and fast-paced environment, which pushed me to excel. From 6th to 8th grade, I took advanced classes in subjects like Physics, Biology, and Chemistry, typically taught at the high school level. The challenging curriculum taught me to quickly absorb new concepts, manage time efficiently, and adapt to changing academic demands. This experience not only strengthened my academic abilities but also developed my problem-solving skills, work ethic, and ability to perform under pressure, instilling a lifelong love for learning.
            </p>
          </div>

          {/* Education2 */}
            <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg max-w-2xl p-8">
              <div className="flex items-center gap-x-4">
                <h5 className="text-lg">Ridgeline Academy 7-12, Phoenix</h5>
                <h3 className="text-lg">2022-2024</h3>
              </div>
              <p className="text-md mt-2">
                I attended Ridgeline, a charter school, which provided a more rigorous and enriching academic environment compared to traditional public schools. As I progressed, I found myself seeking additional challenges, so I pursued extra credits to accelerate my education. This initiative allowed me to graduate one year ahead of schedule, maintaining a 3.9 GPA throughout. Earning my diploma early was a significant accomplishment, demonstrating my ability to manage a demanding academic workload, stay focused, and achieve high standards of excellence.
              </p>
            </div>


          {/* Education3 */}
            <div className="bg-[#B6CCFE] bg-opacity-50 rounded-lg max-w-2xl p-8">
              <div className="flex items-center gap-x-4">
                <h5 className="text-lg">West-MEC Northeast Campus, Phoenix</h5>
                <h3 className="text-lg">2023-2024</h3>
                </div>
                <p className="text-md mt-2">
                During my final year of high school and my first year in the workforce, I attended West-MEC, a trade school specializing in computer coding. There, I gained hands-on experience and earned certifications in Computer Science, HTML, Python, and JavaScript. Additionally, I became proficient in modern frameworks and technologies such as React.js, Next.js, and Node.js. While I continue to expand my knowledge and skills, I have earned certifications in all of these areas, demonstrating my commitment to staying current with industry standards and best practices.
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