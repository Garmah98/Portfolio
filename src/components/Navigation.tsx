import { NavLink } from 'react-router'
import SelectButton from './ui/SelectButton'
import { useTranslation } from 'react-i18next'
export default function Navigation() {
    const { t } = useTranslation()
    return (
        <nav className="absolute right-20 top-8 z-10">
            <ul className="flex items-center gap-4 text-white">
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    {t('AboutMe.title')}
                </NavLink>
                <NavLink
                    to={'/technology'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    {t('Technology.title')}
                </NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                        isActive ? 'text-green-700' : undefined
                    }
                >
                    {t('Projects.title')}
                </NavLink>
                <SelectButton />
            </ul>
        </nav>
    )
}
