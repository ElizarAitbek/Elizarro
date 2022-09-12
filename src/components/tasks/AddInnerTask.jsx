import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addInnerTask } from '../../store/slices/taskSlice';

export const AddInnerTask = ({ id }) => {
    const dispatch = useDispatch();
    const [innerTaskValue, setInnerTaskValue] = useState('')

    const addCard = () => {
        dispatch(addInnerTask({ id, innerTaskValue }))
    }

    return (
        <InnerTaskMain>
            <textarea
                value={innerTaskValue}
                onChange={(e) => setInnerTaskValue(e.target.value)}
                autoFocus
            />
            <button onClick={() => addCard()}>Добавить подзадачу</button>
        </InnerTaskMain>
    )
}

const InnerTaskMain = styled.div`
    display: flex;
    flex-direction: column;
`