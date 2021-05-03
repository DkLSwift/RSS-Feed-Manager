import React from 'react'
import styled from 'styled-components'


export default function Footer() {



    return (
        <FooterContainer>
            <h4>Copyrights Eric Requena Corp. Ltd Limited SAS TM Organisation</h4>
        </FooterContainer>
    )
}


const FooterContainer = styled.div`

    height: 100px;
    width: 100%;
    background-color:  ${props => props.theme.secondaryAlt2};
    display: flow-root;

    h4 {
        text-align: center;
        margin-top: 2rem;
        color:   ${props => props.theme.primary};
    }

    @media screen and (max-width: 700px) {
        h4 {
            width: 80%;
            margin: 2rem auto;
            
        }
    }
`