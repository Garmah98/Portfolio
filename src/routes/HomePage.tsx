import AboutMe from '../components/AboutMe'
export default function HomePage() {
    return (
        <div className="h-screen w-full text-white">
            <div className="flex flex-col">
                <h1 className="p-4 text-9xl">Piotr Gawek</h1>
                <h2 className="ml-12 text-3xl">Frontend Developer</h2>
            </div>
            <AboutMe />
        </div>
    )
}
