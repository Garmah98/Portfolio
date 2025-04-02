import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import ErrorPage from './routes/ErrorPage'
import i18next from 'i18next'


const HomePage = lazy(() => import('./routes/HomePage'))
const Technology = lazy(() => import('./routes/Technology'))
const Projects = lazy(() => import('./routes/Projects'))

function App() {
    const selectedLanguage = localStorage.getItem('selectedLng')
    i18next.changeLanguage(selectedLanguage!)
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: '',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: 'technology',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Technology />
                        </Suspense>
                    ),
                },
                {
                    path: 'projects',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Projects />
                        </Suspense>
                    ),
                },
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
