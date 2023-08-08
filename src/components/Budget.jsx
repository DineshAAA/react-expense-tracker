import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className="w-80 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 m-2 rounded relative" role="alert">
            <strong className="font-bold">Budget: </strong>
            <span className="block sm:inline">{budget} Rupees</span>
        </div>
    )
}

export default Budget