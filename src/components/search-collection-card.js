import React from 'react'
import styled from 'styled-components'
import { NewsCard } from './news-card'

export default function SearchCollectionCard({ news }) {


    return (
        <Container>
            { news && news.map((item, index) => {
                return ( 
                <Card key={index}>
                    <h4>{item.source}</h4>
                    <NewsCard item={item}  />
                </Card>
            )})}
        </Container>
    )
}


const Container = styled.div`
    width: 90%;
    max-width: 1900px;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    h4 {
        margin-left: 1rem;
        color: ${props => props.theme.tertiary};
    }
`