import ListItem from '@/components/ListItem'
import SkillList from '@/components/SkillList'
export default function Technology() {
    return (
        <section className="flex flex-col items-center justify-center text-white">
            <h2 className="p-2 text-5xl">My current skills:</h2>
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

            <h3 className="mt-4 text-3xl">I plan to expand this list by:</h3>
            <SkillList>
                <ListItem title="NodeJs" />
                <ListItem title="NextJs" />
                <ListItem title="Python" />
                <ListItem title="Django" />
            </SkillList>
        </section>
    )
}
