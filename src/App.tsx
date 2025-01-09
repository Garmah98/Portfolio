import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import HomePage from './routes/HomePage'
import Technology from './routes/Technology'
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                { index: true, path: '', element: <HomePage /> },
                {
                    path: 'technology',
                    element: <Technology />,
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
