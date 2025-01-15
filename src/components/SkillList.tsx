import { type ReactNode } from 'react'

export default function SkillList({ children }: { children: ReactNode }) {
    return (
        <ul className="mt-5 grid grid-cols-2 gap-6 p-2 text-center md:w-1/2 sm:grid-cols-3">
            {children}
        </ul>
    )
}
