import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const Alert = ({ 
    text, 
    isTemp,
    firstActionText,
    handleFirstAction,
    secondActionText,
    handleSecondAction,
    setDisplayAlert
}) => {

    
    const [hasFirstAction, setHasFirstAction] = useState(false)
    const [hasSecondAction, setHasSecondAction] = useState(false)

    
    useEffect(() => {
        if (isTemp) setTimeout(() => setDisplayAlert(false), 3000)
        if (handleFirstAction !== undefined) setHasFirstAction(true) 
        if (handleSecondAction !== undefined) setHasSecondAction(true) 
    }, [])

    return (
        <AlertContainer>
            <Text>{text}</Text>
            { hasSecondAction && <AlertButton onClick={handleSecondAction}>{secondActionText}</AlertButton>}
            { hasFirstAction && <AlertButton onClick={handleFirstAction}>{firstActionText}</AlertButton>}
        </AlertContainer>
    )
}


const AlertContainer = styled.div`
    display:flex;
    border-radius: 14px;
    background-color:  ${props => props.theme.tertiary};
    width: 60%;
    height: 3rem;
    margin: 1rem auto;
    align-items: center;
    justify-content: space-around;
    color:  ${props => props.theme.secondaryAlt};

    @media screen and (max-width: 700px) {
        width: 90%;
        height: 4rem;
    }
`

const Text = styled.p`
    font-size: 1.2rem;
    padding-left: 2rem;
`

const AlertButton = styled.button`
    background-color : ${props => props.theme.secondaryAlt};
    color : ${props => props.theme.tertiary};
    margin-left: 2rem;
    padding: 6px 0;
    width: 100px;
    border: none;
    border-radius: 1rem;


    @media screen and (max-width: 700px) {
        margin-right: 1rem;
    }
`