import Image from "next/image";

const Project = ({ project }) => {
    return (
        <div className="relative group max-w-lg mx-auto">
        {/* Image with hover effects */}
        <Image
            className="transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:opacity-50 group-hover:bg-black "
            src={project.image}
            width={800}
            height={500}
            alt={project.alt}
        />



        {/* Text content (title, description, etc.) */}
        <div className="absolute inset-1 flex flex-col justify-center items-center hover:text-white opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out p-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-center">{project.description}</p>
            <p className="mt-2 text-sm">Collaborators: {project.collaborators}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-lg hover:text-blue-300">
            View on GitHub
            </a>
        </div>
        </div>
    );
};

export default Project;
