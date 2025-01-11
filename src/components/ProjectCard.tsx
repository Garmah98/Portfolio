interface ProjectCardProps {
    title: string
    img: string
    link: string
    github: string
    description: string
}
export default function ProjectCard({
    title,
    img,
    description,
    link,
    github,
}: ProjectCardProps) {
    return (
        <div className="shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-green-700">{title}</h3>
            <p className="mb-5 w-full">{description}</p>
            <img className="w-full" src={img} alt="Screenshot of the project website" />
            <div className="flex justify-evenly p-2">
                <a href={github} target="_blank">
                    <svg width="50px" height="50px">
                        <use href={`icons/icons.svg#github`}></use>
                    </svg>
                </a>
                <a href={link} target="_blank">
                    <img src="icons/eye.png" alt="Eye icon" />
                </a>
            </div>
        </div>
    )
}
