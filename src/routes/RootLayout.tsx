import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
export default function RootLayout() {
    return (
        <>
            <nav className="absolute right-24 top-12 text-red-600">
                <Navigation />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}
