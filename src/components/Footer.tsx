import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
export default function Footer() {
    const date = new Date().getFullYear()
    const { pathname } = useLocation()
    const { t } = useTranslation()
    let footerStyles =
        'mt-4 flex w-full flex-col items-center justify-center xl:absolute xl:bottom-0 xl:h-32'
    if (pathname === '/') {
        footerStyles =
            'mt-4 flex w-full flex-col items-center justify-center absolute bottom-0 h-32'
    }
    return (
        <footer className={footerStyles}>
            <h2 className="mb-1 text-lg font-semibold">
                {t('Footer.contact')}
            </h2>
            <span className="flex">
                <img
                    className="mr-2"
                    src="/icons/envelope.png"
                    alt="Email icon"
                ></img>
                piotrg9890@gmail.com
            </span>
            <p className="mb-4 text-neutral-500">
                &copy; {date} Piotr Gawek, Icons by{' '}
                <a className="underline" href="https://icons8.com">
                    Icons8
                </a>
            </p>
        </footer>
    )
}
