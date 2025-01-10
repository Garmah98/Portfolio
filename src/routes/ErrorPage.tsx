import Footer from '@/components/footer'
import Navigation from '@/components/Navigation'
export default function ErrorPage() {
    return (
        <>
            <Navigation />
            <main className="flex h-screen w-full flex-col items-center justify-center text-center">
                <div className="mb-4 p-1">
                    <h1 className="text-5xl">An error occured!</h1>
                    <p className="text-3xl">
                        The page you looking for does not exist.
                    </p>
                </div>
                <p className="mb-4 text-2xl">Take this picture on your way out</p>
                <img
                    className="h-64 w-64 object-cover"
                    src="/important.jpg"
                ></img>
            </main>
            <Footer />
        </>
    )
}
