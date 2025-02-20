import projects from '../../data/data.json';
import Image from "next/image" ;
import { FaGithubSquare } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import Link from 'next/link'

export async function generateStaticParams() {
    return projects.map((project) =>({
        id: project.id,
    }));
}

export default async function ProjectPage({params}){
    const project = await projects.find((p) => p.id === params.id);

    if (!project){
        return <h1>Project not found</h1>
    }

    return (
        <>
            <div className="mx-4 md:mx-8 lg:mx-20 my-14 overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="relative flex flex-col md:flex-row">
                    {/* Exit Button - Absolute positioned */}
                    <div className="absolute top-4 right-4 z-10">
                    <Link href="/work" className="text-gray-600 hover:text-gray-800 transition-colors">
                        <RxExit className="w-6 h-6" />
                    </Link>
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 w-full md:w-1/2 p-4">
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <Image 
                        src={project.image}
                        className="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                        width={900}
                        height={600}
                        alt={project.alt}
                        />
                    </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-Unbuntu mt-4">
                        {project.title}
                    </h1>

                    <h4 className="text-lg mt-4 text-gray-600">
                        {project.language} - {project.date}
                    </h4>

                    <p className="mt-6 text-gray-700">
                        {project.description}
                    </p>

                    <hr className="w-16 border-2 border-gray-400 my-6" />

                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                        <span className="font-semibold font-Unbuntu">Creator:</span> Sabrina Shafer
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="font-semibold font-Unbuntu">Contributors:</span> {project.collaborators}
                        </li>
                    </ul>

                    <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-8 inline-block"
                    >
                        <button className="w-full md:w-auto flex items-center gap-2 bg-git hover:bg-githov shadow-md hover:shadow-lg text-white justify-center rounded-lg px-6 py-2 text-lg transition-all duration-300 font-Unbuntu">
                        <FaGithubSquare className="w-6 h-6 " />
                        Github
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
}