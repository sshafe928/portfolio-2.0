import Image from 'next/image'

const ContactPage = () => {
  return (
    <>
    <div className="justify-center mb-7 px-4">
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col items-center relative -mt-5">
          {/* Top text that stays above the image */}
          <h1 className="relative z-20 font-ChaeRegular text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[14rem] text-[#7e8cc9]">
            Portfolio
          </h1>
          
          {/* Flex container for image and contact info */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start relative">
            {/* Image */}
            <div className="relative md:absolute md:-top-24 md:left-1/4 md:transform md:-translate-x-1/2 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[350px] z-10">
              <Image
                src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1740176529/20240614_170217_cgmypt.jpg"
                alt="Sabrina shafer"
                width={350}
                height={350}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Contact info */}
            <div className="mt-4 md:mt-0 md:absolute md:top-24 md:left-3/4 md:transform md:-translate-x-1/2 z-10 bg-background text-sm sm:text-base md:text-lg font-Unbuntu text-primary gap-y-2 flex flex-col p-4">
              <a href="https://www.linkedin.com/in/sabrina" className="hover:text-[#7e8cc9] transition-colors">
                LinkedIn: www.linkedin.com/in/sabrina
              </a>
              <a href="https://github.com/sshafe928" className="hover:text-[#7e8cc9] transition-colors">
                GitHub: github.com/sshafe928
              </a>
              <a href="mailto:sabrinashafer321@gmail.com" className="hover:text-[#7e8cc9] transition-colors">
                Email: sabrinashafer321@gmail.com
              </a>
            </div>
          </div>

          {/* Outline text that goes behind the image */}
          {[
            'text-[#707db6]',
            'text-[#606eae]', 
            'text-[#475697]'
          ].map((color, index) => (
            <h1 
              key={index}
              className={`-mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 xl:-mt-14 font-ChaeOutline text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[12rem] ${color} z-0`}
            >
              Portfolio
            </h1>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage