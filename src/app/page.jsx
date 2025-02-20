import Link from 'next/link'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image"

export default function Home() {
  return (
    <>
    <div className='flex justify-center '>
    <section className=' m-10 mt-20 '>
      <h1 className="text-8xl font-bold mb-4 text-title font-Unbuntu">Hello, <br></br>I'm Sabrina!</h1>
      <p className='max-w-xl text-xl'>I am a vocational school student for coding as well as a highschool student.
        My favorite languages are Python and JavaScript, but Tailwind can be enjoyable at times.
        Currently based in the USA, after a gap year for work, I will be continuing my studies at WGU. I am a
        freelancer for online projects but still have an in person job.</p>
        <div className=''>
        <Link href="https://www.linkedin.com/in/sabrina-shafer-56bb392ba/"><button className='bg-primary text-white rounded-full tracking-wide btn-block text-center font-Unbuntu text-lg mt-6 p-2'>linkedin.com/in/sabrina</button></Link>
        </div>
      </section>

      <section className='m-8'>
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <Image src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1739994038/Screenshot_16_qpfj0h.png" width={400} height={500} alt="Background"/>
            
          </figure>
          <div className="card-body">

            <h2 className="card-title pb-4 pl-24 text-3xl font-Unbuntu">
              Contact
            </h2>

            <ul className="list-none space-y-2 p-0 ml-4">
              <li className="flex items-center gap-2">
                <SlLocationPin /> United States
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineEmail /> sabrinashafer321@gmail.com
              </li>
              <li className="flex items-center  pb-5 gap-2">
                <FaInstagram /> instagram
              </li>
            </ul>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">Responsibility</div>
              <div className="badge badge-outline">Leadership</div>
            </div>

          </div>
        </div>

      </section>



    </div>
    
    </>
  );
}
