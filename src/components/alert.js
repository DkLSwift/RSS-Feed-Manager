import React, { useEffect } from 'react'
import styled from 'styled-components'

const Alert = ({ 
    text, 
    isTemp,
    firstActionText,
    handleFirstAction,
    secondActionText,
    handleSecondAction,
    setDisplayAlert
}) => {

    
    useEffect(() => {
        // if isTemp property is true, alert disappear by itself after 3s
        if (isTemp) setTimeout(() => setDisplayAlert(false), 3000)
    }, [])


    return (
        <AlertContainer>
            <Text>{text}</Text>
            {/* if one or both actions callbacks are passed, display the buttons */}
            { handleSecondAction && <AlertButton onClick={handleSecondAction}>{secondActionText}</AlertButton>}
            { handleFirstAction && <AlertButton onClick={handleFirstAction}>{firstActionText}</AlertButton>}
        </AlertContainer>
    )
}

export default Alert


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