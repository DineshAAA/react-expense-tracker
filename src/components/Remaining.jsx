import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

    const alertType = totalExpenses > budget ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700';


    return (
        <div className={`w-80 border  px-4 py-3 m-2 rounded relative ${alertType}`} role="alert">
            <strong className="font-bold">Remaining: </strong>
            <span className="block sm:inline">{budget - totalExpenses} Rupees</span>
        </div>
    )
}

export default Remaining