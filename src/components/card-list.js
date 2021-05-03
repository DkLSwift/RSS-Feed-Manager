import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { NewsCard } from './news-card'



export  const CardList = ({ 
        news, 
        displayTrailingButton, 
        trailingButtonText, 
        trailingButtonIcon,
        handleTrailingButtonOnClick, 
        displaySecondTrailingButton, 
        secondTrailingButtonIcon,
        secondTrailingButtonText, 
        handleSecondTrailingButtonOnclick 
    }) => {

    const slider = useRef(null)

    const [isDown, setisDown] = useState(false)
    const [startX, setstartX] = useState()
    const [scrollLeft, setscrollLeft] = useState()
   

    const handleMouseDown = (e) => {
        setisDown(() => true)
        slider.current.classList.add('active')
        setstartX(() => e.pageX - slider.current.offsetLeft)
        setscrollLeft(() => slider.current.scrollLeft)
    }
    const handleMouseLeave = () => {
        setisDown(() => false)
        slider.current.classList.remove('active')
    }
    const handleMouseUp = () => {
        setisDown(() => false)
        slider.current.classList.remove('active')
    }
    const handleMouseMove = (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.current.offsetLeft
        const walk = x - startX
        slider.current.scrollLeft = scrollLeft - walk
    }
    
    return (
        <CardListContainer>
            
            { (news && news[0]?.source !== undefined) && 
                <Header displaySecondTrailingButton={displaySecondTrailingButton}>
                    <h2>{news[0]?.source}</h2>
                    <ButtonContainer>
                        { displaySecondTrailingButton && 
                            <Button onClick={() => handleSecondTrailingButtonOnclick(news[0]?.source, news[0]?.baseUrl)}  
                            >
                                <span>{secondTrailingButtonText}</span>
                                {secondTrailingButtonIcon}
                            </Button>
                        }
                        { displayTrailingButton && 
                            <Button 
                                onClick={() => handleTrailingButtonOnClick(news[0]?.source, news[0]?.baseUrl)}
                                
                            >   
                                <span>{trailingButtonText}</span>
                                {trailingButtonIcon}
                             </Button>
                        }
                    </ButtonContainer>
                </Header>
            }
            <CardContainer 
                className='scrollable-item' 
                ref={slider}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                { news && news.map((item, index) => <NewsCard item={item} key={index} />)} 
            </CardContainer>
        </CardListContainer>
    )
}

const CardListContainer = styled.div`
    width: 94%;
    max-width: 1800px;
    margin: 2rem auto;

    
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        padding-left: 1rem;
        font-size: 2rem;
        color:  ${props => props.theme.primaryAlt};
        margin-bottom:1rem;
    }

     
        @media screen and (max-width: 700px) {
            ${props => props.displaySecondTrailingButton && `
                display: flex;
                flex-direction: column;
                
                h2 {
                    text-align: center;
                }
            `};
        }
     
    

`
const ButtonContainer = styled.div`

`


const Button = styled.button`
    font-size: 1.2rem;
    background-color:  ${props => props.theme.secondaryAlt};
    color:  ${props => props.theme.tertiary};
    padding: 0.4rem 1.2rem;
    border: none;
    margin-left: 2rem;
    border-radius: 1.1rem;
    box-shadow: -1px 4px 4px  ${props => props.theme.secondaryAlt2};
    display: inline-flex;
    align-items: center;

    span {
        margin-right: 0.6rem;
    }

    @media screen and (max-width: 700px) {
        margin-bottom: 44px;
        
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;


    .active {
        /* background: rgba(255,255,255,0.3); */
        cursor: grabbing;
        cursor: -webkit-grabbing;
        transform: scale(1);
    }
    &::-webkit-scrollbar {
        display: none;
    }
`

// const StyledButton = ({onClick, text, icon}) => (
//     <Button onClick={onClick}>{text} {icon}</Button>
// )