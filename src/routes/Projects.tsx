import { useTranslation } from 'react-i18next'
import ProjectCard from '@/components/ProjectCard'
import MemoryRefresher from '/MemoryRefresher.png'
import Personal_Site from '/Personal_Site.png'
export default function Projects() {
    const { t } = useTranslation()
    return (
        <section className="flex flex-col items-center text-white h-screen">
            <h2 className="mt-6 text-5xl font-Title">{t('Projects.title')}</h2>
            <div className="mt-6 grid grid-cols-2 place-items-center gap-4 p-2 h-2/3">
                <ProjectCard
                    title="MemoryRefresher"
                    img={MemoryRefresher}
                    link="https://garmah98.github.io/MemoryRefresher/"
                    github="https://github.com/Garmah98/MemoryRefresher"
                />
                <ProjectCard
                    title="Personal Site"
                    img={Personal_Site}
                    link="https://garmah98.github.io/MemoryRefresher/"
                    github="https://github.com/Garmah98/Portfolio"
                />
            </div>
        </section>
    )
}
