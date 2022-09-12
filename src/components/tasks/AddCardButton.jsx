import React from 'react'
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../../store/slices/taskSlice'
import { AddTask } from './AddTask'


export const AddCardButton = ({setColumn}) => {
  const clickHandler = () => {
    setColumn(true)
  }
  return (
    <ButtonBlock>
      <MainButton onClick={clickHandler}><FaPlus />Добавить список</MainButton>
    </ButtonBlock>
  )
}

const MainButton = styled.button`
    border: 1px solid #000;
    display: flex;
    align-items: center;
    padding: 10px 80px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
            :hover {
                -webkit-box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
                -moz-box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
                box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
            }

`
const ButtonBlock = styled.div`
    margin: 40px;
    display: flex;
`