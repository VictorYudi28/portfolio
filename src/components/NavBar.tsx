import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const NavBar = () => {

    return (
        <nav className="flex justify-between items-center w-full">
            <div>
                <h1 className="text-4xl text-white tracking-tighter">VY</h1>
            </div>
            <div>
                <div className="flex gap-2">
                    <a href="https://github.com/VictorYudi28"
                        target="blank">
                        <FaGithub className="text-3xl text-gray-300 transition-all ease-in-out hover:text-gray-400" />
                    </a>
                    <a className="" href="https://www.linkedin.com/in/victoryudiabe/"
                        target="blank">
                        <FaLinkedin className="text-3xl text-gray-300 transition-all ease-in-out hover:text-gray-400" />
                    </a>
                </div>
            </div>
        </nav>
    )

}