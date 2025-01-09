interface ListItemProps {
    title: string
}
export default function ListItem({ title }: ListItemProps) {
    return (
        <li className="flex flex-col items-center">
            <span>{title}</span>
            <img src={`/icons/${title}.svg`} />
        </li>
    )
}
