import React from 'react'
import styled from 'styled-components'


const Loading = () => {
    return (
        <Container>
            <Text>LOADING ...</Text>
        </Container>
    )
}

export default Loading

const Container = styled.div`
    height: 90vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h3`
    color: #b8b8b8;
    font-size: 2rem;
`