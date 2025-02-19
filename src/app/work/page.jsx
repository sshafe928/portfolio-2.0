import projects from '../data/data.json';
import Link from 'next/link'



const WorkPage = () => {
  return (
    <div className="container flex flex-col justify-center text-center">
            <h1 className="m-2 text-2xl font-bold text-center">Projects</h1>
            <ul>
                {projects.map((project)=>(
                    <li key={project.id} className="border-2 p-2 m-2">
                        <Link href={`/work/${project.id}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    
);
};

export default WorkPage