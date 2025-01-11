import { Outlet, useLocation } from 'react-router'
import Navigation from '../components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'motion/react'
export default function RootLayout() {
    const { pathname } = useLocation()
    return (
        <>
            <Navigation />
            <motion.main
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
            >
                <Outlet />
            </motion.main>
            <Footer />
        </>
    )
}
