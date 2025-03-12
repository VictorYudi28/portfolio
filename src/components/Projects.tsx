import { projects } from "@/data/projects"
import { Title } from "./Title"
import { Project } from "./Project"

export const Projects = () => {

    return (
        <section className="text-center min-h-screen flex flex-col justify-center items-center mt-20">
            <Title
                fontSize="text-5xl"
                text="Projects"
            />

            <div>
                {projects.map((item) => (
                    <Project key={item.id} project={item} />
                ))}
            </div>

        </section>
    )

}