import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../store/ui/uiSlice"


export const useLanguageSelector = () => {

    const { status } = useSelector(state => state.language)
    const dispatch = useDispatch()

    const [language, setLanguage] = useState(status)

    const switchLanguage = () => {
        dispatch(changeLanguage())
    }    

    return {
        language,
        switchLanguage
    }
}
