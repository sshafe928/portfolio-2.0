import projects from '../data/data.json';
import Link from 'next/link'
import Image from 'next/image'



const WorkPage = () => {
  return (
    <>
    <h1 className="m-6 text-6xl font-bold text-center text-title font-Unbuntu">Projects</h1>
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-14">
        {projects.map((project) => (
          <Link 
          href={`/work/${project.id}`}
          className="text-gray-900 font-medium hover:text-gray-800 transition-colors"
        >
          <div key={project.id} className="group mt-8 w-64 transition-transform duration-200 hover:-translate-y-2 ">
            {/* Polaroid card */}
            <div className="bg-white p-4 shadow-lg rounded-sm">
              {/* Image container with fixed aspect ratio */}
              <div className="relative aspect-[5/5] mb-4 ">
                <Image src={project.image} fill alt={project.title} className="object-cover rounded-sm"/>
              </div>
              {/* Title area - thicker bottom section */}
              <div className="pt-2 pb-4 text-center font-Unbuntu">
                
                  {project.title}
                
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>

    </>
);
};

export default WorkPage