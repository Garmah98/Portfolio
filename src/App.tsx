import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import ErrorPage from './routes/ErrorPage'
import i18next from 'i18next'
import Technology from './routes/Technology'

const HomePage = lazy(() => import('./routes/HomePage'))
const Projects = lazy(() => import('./routes/Projects'))

export const fallback = (
    // absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl
    <div className="w-full h-full flex justify-center items-center text-2xl">
        Loading...
    </div>
)
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
                        <Suspense fallback={fallback}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: 'technology',
                    element: (
                        
                            <Technology />
                      
                    ),
                },
                {
                    path: 'projects',
                    element: (
                        <Suspense fallback={fallback}>
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
