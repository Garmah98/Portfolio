import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import HomePage from './routes/HomePage'
import Technology from './routes/Technology'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
import i18next from 'i18next'
function App() {
    const selectedLanguage = localStorage.getItem('selectedLng')
    i18next.changeLanguage(selectedLanguage!)
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, path: '', element: <HomePage /> },
                { path: 'technology', element: <Technology /> },
                { path: 'projects', element: <Projects /> },
            ],
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
