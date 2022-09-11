import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AddTask } from './AddTask'
import { Button } from '../ui/Button'


export const ListTasks = () => {
    const { tasks } = useSelector((state) => state.tasks)

    return (
        <>
            {
                tasks.map((element) => (
                    element.title &&
                    <TitleForm key={element.id}>
                        <AddTask id={element.id} {...element}/>
                    </TitleForm>
                ))
            }
        </>
    )
}

const TitleInput = styled.input`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 5px 10px;
    border-radius: 5px;
    width: 200px;
    border: 1px solid #fff;
    margin: 2px;
`
const TitleForm = styled.div`
    display: flex;
    align-items: center;
`
const TitleButton = styled.button`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #fff;
    margin-left: 2px;
    transition: all .3s;
        :hover {
            background: #000;
            color: #fff;
        }
    
`
