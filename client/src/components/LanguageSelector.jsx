import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeLanguage } from '../store/ui/uiSlice'

export const LanguageSelector = ({}) => {

    const { status } = useSelector(state => state.language)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeLanguage())
    } 

    return (
        <div className='flex gap-4'>
            <button 
                className={`font-medium text-white ${status ? "border-solid border-2 border-[#1f6ac7] px-2" : ''}`}
                onClick={handleClick}
            >ES
            </button>

            <button 
                className={`font-medium text-white ${status ? '' : "border-solid border-2 border-[#1f6ac7] px-2"}`}
                onClick={handleClick}
            >
            EN
            </button>
        </div>
    )
}
