import ProjectCard from '@/components/ProjectCard'
import MemoryRefresher from '/MemoryRefresher.webp'
import Personal_Site from '/Personal_Site.webp'
export default function Projects() {
    return (
        <section className="flex h-full flex-col items-center text-white">
            <div className="mt-6 grid grid-cols-1 place-items-center gap-4 p-2 xl:grid-cols-2">
                <ProjectCard
                    title="MemoryRefresher"
                    img={MemoryRefresher}
                    link="https://garmah98.github.io/MemoryRefresher/"
                    github="https://github.com/Garmah98/MemoryRefresher"
                />
                <ProjectCard
                    title="Personal Site"
                    img={Personal_Site}
                    link="https://pgawek.netlify.app/"
                    github="https://github.com/Garmah98/Portfolio"
                />
            </div>
        </section>
    )
}
