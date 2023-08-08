import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Spent = () => {

    const { expenses, budget } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'bg-red-300 border-red-600 text-red-700' : 'bg-blue-100 border-blue-400 text-green-700';


    return (
        <div className={`w-80 border  px-4 py-3 m-2 rounded relative ${alertType}`} role="alert">
            <strong className="font-bold">Spent: </strong>
            <span className="block sm:inline">{totalExpenses} Rupees</span>
        </div>
    )
}

export default Spent