import Image from 'next/image'

const ContactPage = () => {
  return (
    <>
    <div className='justify-center'>
      <Image/>
      <div className='flex flex-col  '>
        <h1 className='text-title font-ChaeRegular text-[14rem] -my-16'>Portfolio</h1>
        <h1 className='font-ChaeOutline text-[12rem] -my-16'>Portfolio</h1>
        <h1 className='font-ChaeOutline text-[12rem] -my-16'>Portfolio</h1>
        <h1 className='font-ChaeOutline text-[12rem] -my-16 '>Portfolio</h1>
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