import { useTranslation } from 'react-i18next'
import ListItem from '@/components/ListItem'
// import SkillList from '@/components/SkillList'
import { lazy, Suspense } from 'react'
import { fallback } from '@/App'

const SkillList = lazy(() => import('@/components/SkillList'))

export default function Technology() {
    const { t } = useTranslation()
    return (
        <section className="flex flex-col items-center justify-center text-white">
            <h2 className="mt-4 p-2 font-Title text-3xl lg:text-4xl">
                {t('Technology.currentSkills')}
            </h2>
            <Suspense fallback={fallback}>
                <SkillList>
                    <ListItem title="Html5" />
                    <ListItem title="Css" />
                    <ListItem title="Sass" />
                    <ListItem title="Tailwindcss" />
                    <ListItem title="Javascript" />
                    <ListItem title="Typescript" />
                    <ListItem title="React" />
                    <ListItem title="Redux" />
                    <ListItem title="React Router" />
                </SkillList>
            </Suspense>

            <h3 className="mt-4 font-Title text-2xl lg:text-3xl">
                {t('Technology.expandList')}
            </h3>
            <Suspense fallback={fallback}>
                <SkillList>
                    <ListItem title="NodeJs" />
                    <ListItem title="NextJs" />
                </SkillList>
            </Suspense>
        </section>
    )
}
