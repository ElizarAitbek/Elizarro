import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"

export const Modal = ({ active, setActive }) => {
    return (
        <>
            <AnimatePresence>
                {active && (
                    <MainModal onClick={() => setActive(false)}>

                        <motion.div
                            initial={{ opacity: 0, y: 400 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -400 }}
                        >
                            <ModalBlock onClick={(e) => e.stopPropagation()}>

                            </ModalBlock>
                        </motion.div>
                    </MainModal >
                )}
            </AnimatePresence>
        </>
    )
}

const MainModal = styled.div`
   height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 0.5s;
`
const ModalBlock = styled.div`
    padding: 20px;
    border-radius: 25px;
    background-color: white;
    width: 1000px;
    height: 1000px;
    text-align: center;
    font-size: 50px;
    transform: scale(0.5);
    transition: 0.4s all;
    color: black;
`
