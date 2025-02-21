'use client';

import Link from 'next/link'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image"
import { useState, useEffect } from 'react'
import React from 'react';

const TypewriterEffect = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Hello,\nI'm Sabrina!";
  
  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    
    const typeWrite = () => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeWrite, 100);
      } else {
        timeoutId = setTimeout(resetTypewriter, 2000);
      }
    };
    
    const resetTypewriter = () => {
      setTypedText('');
      currentIndex = 0;
      timeoutId = setTimeout(typeWrite, 100);
    };
    
    timeoutId = setTimeout(typeWrite, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  const formattedText = typedText.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < typedText.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
  
  return (
    <div className="h-[120px]"> {/* Fixed height container */}
      {formattedText}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center overflow-x-hidden lg:flex-row lg:justify-center '>
        <section className='m-10 mt-20'>
        <h1 className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl font-bold mb-4 text-title font-Unbuntu">
          <TypewriterEffect />
        </h1>
          <div className="relative mt-20"> {/* Container for the content below */}
            <p className='max-w-xl text-xl'>
              I am a vocational school student for coding as well as a highschool student.
              My favorite languages are Python and JavaScript, but Tailwind can be enjoyable at times.
              Currently based in the USA, after a gap year for work, I will be continuing my studies at WGU. I am a
              freelancer for online projects but still have an in person job.
            </p>
            <div className=''>
              <Link href="https://www.linkedin.com/in/sabrina-shafer-56bb392ba/">
                <button className='bg-primary text-white rounded-full tracking-wide btn-block text-center font-Unbuntu text-lg mt-6 p-2'>
                  linkedin.com/in/sabrina
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className='m-8'>
          <div className="card bg-base-100 w-[24rem] shadow-xl">
            <figure className='bg-[#b8c7e5]'>
              <Image 
                src="https://res.cloudinary.com/dy2nnbnek/image/upload/v1740175591/20241129_164805_x6bu1i.png" 
                width={300} 
                height={300} 
                alt="Background"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-4 pl-24 -mt-3 text-3xl font-Unbuntu">
                Contact
              </h2>

              <ul className="list-none space-y-2 p-0 ml-4">
                <li className="flex items-center gap-2">
                  <SlLocationPin /> United States
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineEmail /> sabrinashafer321@gmail.com
                </li>
                <li className="flex items-center pb-5 gap-2">
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