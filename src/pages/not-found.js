import React from 'react'
import styled from 'styled-components'


export const NotFound = () => {
    return (
        <Container>
            <Title>
                WHAT ?!
            </Title>
            <Text>
                Are you doing here ?
            </Text>
        </Container>
    )
}


const Container = styled.div`
    margin: 4rem auto;
    width: 80vw;
`
const Title = styled.h2`
    font-size: 2.5rem;
`
const Text = styled.h4`
    font-size: 1.8rem;
`