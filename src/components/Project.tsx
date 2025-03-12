import { ProjectType } from "@/types/ProjectType";


type Props = {
    project: ProjectType
}

export const Project = ({ project }: Props) => {

    return (
        <a key={project.id} href={project.repositoryLink} target="blank" className="group">
            <div className="flex flex-col gap-10 items-center max-w-4xl lg:flex-row mt-12 transition-all ease-in-out group-hover:scale-105">
                <div className="">
                    <img
                        className="lg:max-w-lg rounded-lg"
                        src={`assets/img/${project.image}`}
                        alt={`Foto do projeto ${project.title}`} />
                </div>
                <div className="text-start flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tec) => (
                            <div className="bg-purple-500 text-white p-2 rounded-md">{tec}</div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )

}