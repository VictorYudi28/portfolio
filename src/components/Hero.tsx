import { Title } from "./Title"

export const Hero = () => {

    const cv = 'Cv Victor Yudi Abe de Almeida.pdf'

    return (
        <section className=" flex flex-col lg:flex lg:flex-row-reverse lg:gap-4 lg:items-center min-h-screen justify-center items-center">
            <div className="max-w-md mx-auto lg:max-w-none lg:flex-1 xl:max-w-xl">
                <img
                    src="/assets/img/ImageYudi.png"
                    alt="Imagem do Yudi"
                    className="rounded-lg animate-fade-up animate-once animate-duration-500 animate-delay-500 animate-ease-out"
                />
            </div>
            <div className="mt-8 lg:flex-1 animate-fade-up animate-once animate-duration-500 animate-delay-500 animate-ease-out">
                <div className="text-center mb-4 lg:text-start ">
                    <Title
                        fontSize={"text-6xl"}
                        text="Victor Yudi"
                    />
                    <span
                        className="mt-1 text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent"
                    >
                        Front End Developer
                    </span>
                </div>
                <p className="text-lg xl:max-w-xl leading-relaxed tracking-tighter">
                    Sou um desenvolvedor front-end apaixonado por transformar ideias em interfaces incríveis. Com habilidades em HTML, CSS, JavaScript e frameworks modernos, crio experiências interativas, responsivas e intuitivas para a web.
                </p>
                <a 
                href={`/assets/doc/${cv}`} 
                download={cv} 
                className="bg-white text-black px-4 py-2 mt-4 rounded-md transition-all ease-linear hover:bg-gray-200 tracking-tighter inline-block"
                >Download CV</a>
            </div>
        </section>
    )

}