import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
import Footer from '@/components/footer'
export default function RootLayout() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
