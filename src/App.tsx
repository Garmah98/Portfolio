import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './routes/RootLayout'
import HomePage from './routes/HomePage'
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [{ index: true, path: '', element: <HomePage /> }],
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
