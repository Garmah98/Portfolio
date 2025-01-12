import i18next from 'i18next'
import { useState, useRef, useEffect } from 'react'

export default function SelectButton() {
    const [btnActive, setBtnActive] = useState(false)
    const LngList = useRef<HTMLUListElement | null>(null)

    function handleToggleBtn() {
        setBtnActive((prevState) => !prevState)
    }
    function handleChangeLngBtn(language: string) {
        i18next.changeLanguage(language)
        handleToggleBtn()
    }
    function handleClickOutside(e: MouseEvent) {
        if (LngList && !LngList.current?.contains(e.target as Node)) {
            setBtnActive(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
    }, [btnActive]);
    return (
        <div>
            <button
                onClick={handleToggleBtn}
                className="relative w-16 p-3 uppercase"
            >
                {i18next.language}
            </button>
            {btnActive && (
                <div className="absolute w-16 bg-[#1a1a1a]">
                    <ul ref={LngList}>
                        {i18next.languages.map((language) => (
                            <li
                                className="rounded-lg text-center text-white hover:bg-[#333]"
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
