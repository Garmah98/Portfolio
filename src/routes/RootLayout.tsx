import { Outlet } from 'react-router'
import Navigation from '../components/Navigation'
export default function RootLayout() {
    return (
        <>
           
                <Navigation />
          
            <main>
                <Outlet />
            </main>
        </>
    )
}
