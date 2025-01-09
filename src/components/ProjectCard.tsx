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
        <div className="shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="mb-5 w-full">{description}</p>
            <img className="w-full" src={img} />
            <div className="flex justify-evenly p-2">
                <a href={github} target="_blank">
                    <img src="icons/github.svg" alt="Github icon" />
                </a>
                <a href={link} target="_blank">
                    <img src="icons/eye.png" alt="Eye icon" />
                </a>
            </div>
        </div>
    )
}
