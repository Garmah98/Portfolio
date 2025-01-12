import { Trans, useTranslation } from 'react-i18next'

export default function AboutMe() {
    const { t } = useTranslation()
    return (
        <section className="m-auto flex h-1/3 w-2/3 flex-col items-center justify-center p-6 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-semibold font-Title">
                {t('AboutMe.title')}
            </h2>
            <p className="w-2/3">
                <Trans i18nKey="AboutMe.content">
                    Hi, my name is Piotr and I am frontend developer based in
                    Poland. My journey with frontend development began about 2
                    years ago and I have been self-learning ever since. I am
                    seeking new experiences and oopportunity to broaden my
                    horizons as
                    <span className="font-semibold text-green-700">
                        Junior Frontend Developer.
                    </span>
                </Trans>
            </p>
        </section>
    )
}
