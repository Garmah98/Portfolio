import { NavLink } from 'react-router'
export default function Navigation() {
    return (
        <ul className="flex">
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    isActive ? 'text-red-400' : undefined
                }
            >
                About me
            </NavLink>
            <NavLink
                to={'/technology'}
                className={({ isActive }) =>
                    isActive ? 'text-red-400' : undefined
                }
            >
                Technology
            </NavLink>
            <NavLink
                to={'/projects'}
                className={({ isActive }) =>
                    isActive ? 'text-red-400' : undefined
                }
            >
                Projects
            </NavLink>
        </ul>
    )
}
