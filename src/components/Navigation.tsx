import { NavLink } from 'react-router'
import SelectButton from './ui/SelectButton'
export default function Navigation() {
    return (
        // flex items-center gap-4 text-white
        <nav className="z-10 xl:absolute xl:right-8 xl:top-8">
            <ul className="mb-4 flex w-screen items-center justify-center text-center text-white max-xl:shadow-lg sm:gap-4 xl:mb-0 xl:flex xl:w-auto xl:items-center">
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
                <SelectButton />
            </ul>
        </nav>
    )
}
