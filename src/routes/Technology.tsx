import { useTranslation } from 'react-i18next'
import ListItem from '@/components/ListItem'
import SkillList from '@/components/SkillList'
export default function Technology() {
    const { t } = useTranslation()
    return (
        <section className="flex flex-col items-center justify-center text-white">
            <h2 className="mt-4 p-2 text-3xl">{t('Technology.currentSkills')}</h2>
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

            <h3 className="mt-4 text-2xl">{t('Technology.expandList')}</h3>
            <SkillList>
                <ListItem title="NodeJs" />
                <ListItem title="NextJs" />
                <ListItem title="Python" />
                <ListItem title="Django" />
            </SkillList>
        </section>
    )
}
