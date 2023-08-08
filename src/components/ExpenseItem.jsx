import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };
    
    return (
        <li className='w-1/2 flex justify-between p-1 m-1 bg-slate-50 rounded'>
            <span className='pr-30 text-lg font-bold'>{props.name}</span>
            <div className='flex justify-center'>
                <span className='bg-blue-600 m-1 pr-2 pl-2 rounded text-white'>
                    {props.cost} Rupees
                </span>
                <BsFillTrashFill size='1.5em' className='m-1 text-red-600' onClick={handleDeleteExpense}></BsFillTrashFill>
            </div>
        </li>
    )
}

export default ExpenseItem