import { type ReactNode } from 'react'

export default function SkillList({ children }: { children: ReactNode }) {
    return (
        <ul className="mt-5 grid md:w-1/2 grid-cols-3 gap-6 p-2 text-center">
            {children}
        </ul>
    )
}
