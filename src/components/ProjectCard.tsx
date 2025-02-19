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
        <div className="h-full w-3/4 xl:h-2/3 xl:w-2/3">
            <h3 className="mb-2 text-lg font-semibold text-green-700">
                {t(`Projects.${title}.title`)}
            </h3>
            <p className="mb-5 w-full">{t(`Projects.${title}.description`)}</p>
            <img
                rel="preload"
                className="w-full rounded-lg shadow-lg lg:rounded-2xl"
                src={img}
                alt="Screenshot of the project website"
            />
            <div className="mb-2 flex justify-evenly p-2">
                <a href={github} target="_blank">
                    <svg width="50px" height="50px">
                        <use href={`icons/icons.svg#github`}></use>
                    </svg>
                </a>
                <a href={link} target="_blank">
                    <img rel="preload" src="icons/eye.webp" alt="Eye icon" />
                </a>
            </div>
        </div>
    )
}
