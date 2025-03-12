import { Title } from "./Title"
import { FaCss3, FaGit, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";


export const Technologies = ()=> {

    return(
        <section className="text-center mt-14">
            <Title
            fontSize="text-5xl"
            text="Technologies"
            />
            <div className="mt-6 flex justify-center gap-3 flex-wrap md:flex-none lg:mt-10">
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaReact className="text-5xl text-cyan-400 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaJs className="text-5xl text-yellow-300 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <SiTypescript className="text-5xl text-blue-500 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <RiTailwindCssFill className="text-5xl text-cyan-600 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaHtml5 className="text-5xl text-orange-600 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaCss3Alt className="text-5xl text-blue-500 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaJava className="text-5xl text-gray-300 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaGitAlt className="text-5xl text-orange-600 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                <div className="border-2 rounded-md border-neutral-800 inline-block p-6">
                    <FaBootstrap className="text-5xl text-purple-600 animate-rotate-y animate-infinite animate-duration-[4000ms] animate-ease-linear"/>
                </div>
                
            </div>
        </section>
    )

}