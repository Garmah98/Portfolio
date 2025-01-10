import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import HomePage from './routes/HomePage'
import Technology from './routes/Technology'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
function App() {
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
