import { motion } from 'motion/react'
interface ListItemProps {
    title: string
}
export default function ListItem({ title }: ListItemProps) {
    return (
        <li className="flex flex-col items-center">
            <span>{title}</span>
            <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration:  0.3} }}
                whileHover={{ scale: 1.1 }}
                width="70px"
                height="70px"
            >
                <use href={`icons/icons.svg#${title}`}></use>
            </motion.svg>
        </li>
    )
}
