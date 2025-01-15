import AboutMe from '../components/AboutMe'

export default function HomePage() {
    return (
        <div className="h-full w-full text-white xl:h-full">
            <div className="flex flex-col">
                <h1 className="p-4 font-Title text-6xl md:text-8xl lg:text-9xl">
                    Piotr Gawek
                </h1>
                <h2 className="ml-12 font-Title text-2xl lg:text-3xl">
                    Frontend Developer
                </h2>
            </div>
            <AboutMe />
        </div>
    )
}
