import ProjectCard from '@/components/ProjectCard'
import MemoryRefresher from '/MemoryRefresher.png'
export default function Projects() {
    return (
        <section className="flex flex-col items-center text-white">
            <h2 className="text-5xl">Projects</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 p-2">
                <ProjectCard
                    title="MemoryRefresher"
                    img={MemoryRefresher}
                    link="https://garmah98.github.io/MemoryRefresher/"
                    github="https://github.com/Garmah98/MemoryRefresher"
                    description="Simple site for creating cards with snippets of your code"
                />
                <ProjectCard
                    title="Personal Site"
                    img={MemoryRefresher}
                    link="https://garmah98.github.io/MemoryRefresher/"
                    github="https://github.com/Garmah98/Portfolio"
                    description="PLACEHOLDER"
                />
            </div>
        </section>
    )
}
