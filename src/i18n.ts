import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                AboutMe: {
                    title: 'About me',
                    content:
                        'Hi, my name is Piotr and I am frontend developer based in Poland. My journey with frontend development began about 2 years ago and I have been self-learning ever since. I am seeking new experiences and opportunity to broaden my horizons as <1>Junior Frontend developer</1> ',
                },
                Technology: {
                    title: 'Technology',
                    currentSkills: 'I worked with:',
                    expandList: 'I plan to expand this list by:',
                },
                Projects: {
                    title: 'Projects',
                    MemoryRefresher: {
                        title: 'MemoryRefresher',
                        description:
                            'Simple site for creating cards with snippets of your code',
                    },
                    'Personal Site': {
                        title: 'Personal Site',
                        description: 'My personal portfolio site',
                    },
                },
                Footer: {
                    contact: 'Contact',
                },
                Error: {
                    title: 'An error occured!',
                    message: ' The page you looking for does not exist.',
                    onWayOut: 'Take this picture on your way out',
                },
            },
        },
        pl: {
            translation: {
                AboutMe: {
                    title: 'O mnie',
                    content:
                        'Cześć, mam na imię Piotr i jestem developerem Front-end mieszkającym w Polsce. Moja przygoda z front-endem rozpoczeła się około 2 lata temu i od tamtego czasu uczę się samodzielnie. Poszukuje nowych doświadczeń i możliwości rozszerzenia swoich horyzontów jako <1>Junior Frontend developer</1> ',
                },
                Technology: {
                    title: 'Technologia',
                    currentSkills: 'Pracowałem z:',
                    expandList: 'Planuję rozszerzyć tą listę o:',
                },
                Projects: {
                    title: 'Projekty',
                    MemoryRefresher: {
                        title: 'Memory Refresher',
                        description:
                            'Prosta strona do tworzenia kart z wycinkami twojego kodu',
                    },
                    'Personal Site': {
                        title: 'Strona osobista',
                        description: 'Moja strona porfolio',
                    },
                },
                Footer: {
                    contact: 'Kontakt',
                },
                Error: {
                    title: 'Wystąpił błąd!',
                    message: 'Strona, której szukasz nie istnieje.',
                    onWayOut: 'Weź to zdjęcie gdy bedziesz wychodził',
                },
            },
        },
    },
    fallbackLng: ['en', 'pl'],
})
export default i18n
