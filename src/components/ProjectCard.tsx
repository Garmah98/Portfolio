import { useTranslation } from 'react-i18next'
interface ProjectCardProps {
    title: string
    img: string
    link: string
    github: string
}
export default function ProjectCard({
    title,
    img,
    link,
    github,
}: ProjectCardProps) {
    const { t } = useTranslation()
    return (
        <article className="h-full w-3/4 xl:h-2/3 xl:w-2/3">
            <header>
                <h2 className="mb-2 text-lg font-semibold text-green-700">
                    {t(`Projects.${title}.title`)}
                </h2>
            </header>
            <p className="mb-5 w-full">{t(`Projects.${title}.description`)}</p>
            <img
                rel="preload"
                className="w-full rounded-lg shadow-lg lg:rounded-2xl"
                src={img}
                alt="Screenshot of the project website"
            />
            <nav className="mb-2 flex justify-evenly p-2">
                <a href={github} target="_blank" aria-label="View on Github">
                    <svg width="50px" height="50px">
                        <use href={`icons/icons.svg#github`}></use>
                    </svg>
                </a>
                <a href={link} target="_blank">
                    <img
                        rel="preload"
                        src="icons/eye.webp"
                        alt="Eye icon"
                        aria-label="Live Project"
                    />
                </a>
            </nav>
        </article>
    )
}
