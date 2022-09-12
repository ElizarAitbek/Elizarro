import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addTask} from '../../store/slices/taskSlice';
import { AddCardButton } from './AddCardButton';
import { AddInnerTask } from './AddInnerTask';


export const AddTask = ({ id, innerTasks }) => {
    const [titleValue, setTitleValue] = useState();
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(false)
    const [openText, setOpenText] = useState(false)
    const [column, setColumn] = useState(false)

    const submitHandler = () => {
        dispatch(addTask({
            value: titleValue,
            id: Math.random().toString(),
            innerTasks: []
        }))
        setShowButton(true)
    }

    const listInnerTasks = (
        innerTasks.map((element) =>
            <p>{element.text}</p>
        )
    )

    return (
        <>
            <>
                {!column && <AddCardButton setColumn={setColumn} />}
            </>

            {column &&

                <MainForm >
                    <TitleInput
                        type="text"
                        placeholder='Ввести заголовок задачи'
                        value={titleValue || ""}
                        onChange={event => setTitleValue(event.target.value)}
                    />
                    {listInnerTasks}
                    {
                        openText && <AddInnerTask id={id} />
                    }
                    <ButtonBlock>
                        {
                            showButton && !openText && 
                                <button onClick={() => {
                                    setOpenText(true)
                                }}>Добавить карточку</button>
                        }
                        {  !showButton && <button onClick={submitHandler}>Добавить задачу</button>}
                    {/* <button ><FaTimes /></button> */}
                    </ButtonBlock>
                </MainForm>
            }
        </>
    )
}

const MainForm = styled.div`
    padding: 0 1px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const TitleInput = styled.input`
    font-size: 16px;
    display: flex;
    text-align: center;
    padding: 5px 32px;
    border-radius: 5px;
    width: 200px;
    border: 1px solid #000;
`
const ButtonBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
        button:first-child {
            border: 1px solid #000;
            border-radius: 5px;
            background-color: #fff;
            padding: 2px 20px;
            cursor: pointer;
            transition: all .3s;
            padding: 0 10px;
            -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
            box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
                :hover {
                    color: #fff;
                    background: #126100;
                }   
        }
`