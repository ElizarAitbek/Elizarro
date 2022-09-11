import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addInnerTask } from '../../store/slices/taskSlice';

export const AddInnerTask = ({ id }) => {
    const dispatch = useDispatch();
    const [innerTaskValue, setInnerTaskValue] = useState('')

    const addCard = () => {
        dispatch(addInnerTask({ id, innerTaskValue }))
    }

    return (
        <>
            <textarea
                value={innerTaskValue}
                onChange={(e) => setInnerTaskValue(e.target.value)}
                autoFocus
            />
            <button onClick={() => addCard()}>Добавить подзадачу</button>
        </>
    )
}
