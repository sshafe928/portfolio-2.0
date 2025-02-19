import projects from '../../data/data.json';
import Image from "next/image" ;

export async function generateStaticParams() {
    return projects.map((project) =>({
        id: project.id,
    }));
}

export default function ProductPage({params}){
    const project = projects.find((p) => p.id === params.id);

    if (!project){
        return <h1>Project not found</h1>
    }

    return (
        <div className="flex justify-center">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            

            

        </div>
        
    );
}