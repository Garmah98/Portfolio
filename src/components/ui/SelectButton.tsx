import i18next from 'i18next'
import { useState, useRef, useEffect } from 'react'

export default function SelectButton() {
    const [btnActive, setBtnActive] = useState(false)
    const LngList = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
    }, [])

    function handleToggleBtn() {
        setBtnActive((prevState) => !prevState)
    }
    function handleChangeLngBtn(language: string) {
        i18next.changeLanguage(language)
        localStorage.setItem('selectedLng', language)
        handleToggleBtn()
    }
    function handleClickOutside(e: MouseEvent) {
        if (LngList && !LngList.current?.contains(e.target as Node)) {
            setBtnActive(false)
        }
    }
    
    return (
        <div ref={LngList}>
            <button
                onClick={handleToggleBtn}
                className="relative w-16 p-3 uppercase"
            >
                {i18next.language}
            </button>
            {btnActive && (
                <div className="absolute w-16">
                    <ul>
                        {i18next.languages.map((language) => (
                            <li
                                className="rounded-lg text-center text-white hover:bg-[#243b55]"
                                key={language}
                            >
                                <button
                                    onClick={() => handleChangeLngBtn(language)}
                                    className="p-3 uppercase"
                                >
                                    {language}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
