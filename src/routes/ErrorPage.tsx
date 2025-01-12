import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { useTranslation } from 'react-i18next'
export default function ErrorPage() {
    const { t } = useTranslation()
    return (
        <>
            <Navigation />
            <main className="flex h-screen w-full flex-col items-center justify-center text-center">
                <div className="mb-4 p-1">
                    <h1 className="text-5xl">{t('Error.title')}</h1>
                    <p className="text-3xl">{t('Error.message')}</p>
                </div>
                <p className="mb-4 text-2xl">{t('Error.onWayOut')}</p>
                <img
                    className="h-64 w-64 object-cover"
                    src="/important.jpg"
                ></img>
            </main>
            <Footer />
        </>
    )
}
