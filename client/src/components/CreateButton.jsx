import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const CreateButton = () => {

    const { status } = useSelector(state => state.language)


    return (
        
        <Link to="/create-post" className='font-inter font-medium bg-[#1f6ac7] transition hover:bg-[#10367e] hover:duration-150  text-white px-4 py-2 '>{status ? "Crear" : "Create"}</Link>

    )
}
