import React from 'react'
import styled from "styled-components";
import { FaClipboardCheck, FaUser } from "react-icons/fa";

export const Header = ({removeUser, email}) => {
    return (
        <>
            <>
                <NavBar>
                    <LogOutButton onClick={removeUser}>Выйти</LogOutButton>
                    <h3><FaClipboardCheck />ELIZARRO</h3>
                    <UserBlock>
                        <p><FaUser /></p>
                        <p>{email}</p>
                    </UserBlock>
                </NavBar>
            </>
        </>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 25px;
    margin: 0;
    height: 70px;
    background: url("https://cutt.ly/PCEpegl") ;
`
const UserBlock = styled.div`
    display: flex;
    padding: 8px 10px;
    border-radius: 8px;
    background: #f1efef;
    color: #000;
        p {
            margin-right: 10px;
        }
        p:last-child {
            margin-right: 0;
        }
`

const LogOutButton = styled.button`
    padding: 8px 30px;
    border-radius: 8px;
    background: #f1efef;
    color: #000;
    transition: all .3s;
    border: 1px solid #000;
    cursor: pointer;
        :hover{
                border: 1px solid #353535;
                background: #353535;
                color: #fff;
            } 
`
