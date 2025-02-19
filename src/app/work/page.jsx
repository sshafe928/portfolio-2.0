import projects from '../data/data.json';
import Link from 'next/link'
import Image from 'next/image'



const WorkPage = () => {
  return (
    <>
    <h1 className="m-2 text-2xl font-bold text-center">Projects</h1>
    <div className="container flex text-center">
      
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border-2 bg-[#fff] p-2 m-2">
            {/* Polaroid-style image */}
            <div className="relative w-48 h-auto mx-auto mb-2" >
              <Image
                src={project.image}  // Corrected to use project.image
                width={200}
                height={200} // Same width and height to keep it square-like
                alt="Project image"
                className="object-cover"
              />
              {/* Adding a 'caption' effect to the bottom of the image */}
              <div className="absolute bottom-0 w-full text-center bg-white px-2 text-xs text-gray-700">{project.title}</div>
            </div>
            <Link href={`/work/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    </>
);
};

export default WorkPage