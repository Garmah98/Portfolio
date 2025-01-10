interface ListItemProps {
    title: string
}
export default function ListItem({ title }: ListItemProps) {
    return (
        <li className="flex flex-col items-center">
            <span>{title}</span>
            {/* <img src={`/icons/${title}.svg`} /> */}
            <svg width="96px" height="96px">
                <use href={`icons/icons.svg#${title}`}></use>
            </svg>
        </li>
    )
}
