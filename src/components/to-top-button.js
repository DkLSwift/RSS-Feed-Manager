import React, { useState } from 'react'
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function ToTopButton() {

    const [displayToTopButton, setDisplayToTopButton] = useState(false)

    window.addEventListener("scroll", function(){
  
        setDisplayToTopButton(window.scrollY > 300)
    });

    return (
        <>
           { displayToTopButton &&  <TopButton onClick={() => window.scrollTo(0, 0)}>
                <KeyboardArrowUpIcon />
            </TopButton>}
        </>
    )
}

const TopButton = styled.button`
    width: 60px;
    height: 60px;
    position: fixed;
    right: 2rem;
    bottom: 4rem;
    z-index: 9;
    cursor: pointer;

    border-radius: 20px;
    border: none;
    background-color:  ${props => props.theme.secondaryAlt2};
    color:  ${props => props.theme.tertiary};
    box-shadow: -2px 4px 6px ${props => props.theme.secondaryAlt};

     @media screen and (max-width: 700px) {
        box-shadow: 0px 2px 6px ${props => props.theme.primary};
        border-radius: 30px;
    }
`