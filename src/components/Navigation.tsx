import { NavLink } from 'react-router'
export default function Navigation() {
    return (
        <nav className="absolute right-20 top-8 z-10">
            <ul className="flex gap-4 text-white">
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    About me
                </NavLink>
                <NavLink
                    to={'/technology'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    Technology
                </NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    Projects
                </NavLink>
            </ul>
        </nav>
    )
}
