import { Trans, useTranslation } from 'react-i18next'

export default function AboutMe() {
    const { t } = useTranslation()
    return (
        <section className="flex flex-col items-center justify-center p-6 text-center shadow-lg md:m-auto md:h-2/3 md:w-3/4 lg:h-1/3 lg:w-2/3">
            <h2 className="mb-4 mt-6 font-Title text-3xl font-semibold">
                {t('AboutMe.title')}
            </h2>
            <p className="md:w-2/3">
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
