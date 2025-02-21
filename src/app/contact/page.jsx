import Image from 'next/image'

const ContactPage = () => {
  return (
    <>
    <div className='justify-center'>
      <Image   className="absolute" src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1740176529/20240614_170217_cgmypt.jpg" height={400} width={300} alt="Sabrina shafer"/>
      <div className="flex flex-col align-middle items-center">
        <h1 className="font-ChaeRegular text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[14rem] text-primary z-10">
          Portfolio
        </h1>
        <h1 className="-mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 xl:-mt-14 font-ChaeOutline text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[12rem] text-primary -z-1">
          Portfolio
        </h1>
        <h1 className="-mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 xl:-mt-14 font-ChaeOutline text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[12rem] text-primary -z-1">
          Portfolio
        </h1>
        <h1 className="-mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 xl:-mt-14 font-ChaeOutline text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[12rem] text-primary -z-1">
          Portfolio
        </h1>
      </div>

      <div className='bg-background '>
        <h1>LinkedIn: https://</h1>
        <h1>GitHub: https://</h1>
        <h1>Email: https://  </h1>
      </div>

    </div>
    </>
  )
}

export default ContactPage