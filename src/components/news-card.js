import React from 'react'
import styled from 'styled-components'

const NewsCard = ({ item }) => {

    const canDisplayImage = (imgUrl) => {
        if ( imgUrl === undefined || imgUrl === null || imgUrl === '') {
            return false
        } else {
            return true
        }
    }

    return (
        <Card>
            <Title>{item.title}</Title>
            { canDisplayImage(item.imgUrl) ? 
                <>
                    <Image src={item.imgUrl} alt={item.imgUrl ? item.title : "No picture"}/>
                    <Text>{item.description}</Text>
                </>
            :
                <Description>{item.description}</Description>
            }
            
            <Link href={item.link} target="_blank">
                Read more
            </Link>
        </Card>
    )
}

export default NewsCard

const Card = styled.div`
    background-color:  ${props => props.theme.secondaryAlt};
    border-radius: 24px;
    margin: 0.8rem 0.5rem;
    min-width: 320px;
    max-width: 320px;
    min-height: 450px;
    max-height: 450px;
    
    overflow: hidden;
    position: relative;
    
    cursor: grab;
    box-shadow: -4px 5px 10px ${props => props.theme.secondaryAlt};

    @media screen and (max-width: 700px) {
        min-width: 280px;
        max-width: 280px;
        min-height: 400px;
        max-height: 400px;
    }
   
`
const Title = styled.h3`
    color:  ${props => props.theme.primary};
    text-align: center;

    padding: 0.3rem 0.3rem;
    overflow: hidden;
    line-height: 1.4rem;
    max-height: 4.4rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp:3;
    height: 25%;
    user-select: none;
    border-bottom: 1px solid  ${props => props.theme.secondaryAlt2};
`
const Text = styled.p`
    font-size: 1.2rem;
    margin: 0.4rem;
    overflow: hidden;
    line-height: 1.6rem;
    max-height: 6.4rem;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: block;
    display: -webkit-box;
    color:  ${props => props.theme.primary};
    width: 90%;
    line-clamp: 4;
    text-align: center;
    user-select: none;
`
const Description = styled.p`
    font-size: 1.2rem;
    margin: 1.4rem 0.4rem;
    overflow: hidden;
    line-height: 1.6rem;
    max-height: 18rem;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    display: block;
    display: -webkit-box;
    color:  ${props => props.theme.primary};
    width: 90%;
    line-clamp: 8;
    text-align: center;
    user-select: none;
`
const Link = styled.a`
    z-index: 9;
    text-decoration: none;
    user-select: all;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    background-color:  ${props => props.theme.secondaryAlt2};
    color:  ${props => props.theme.tertiary};
    
    text-align: center;
    cursor: pointer;
    width: 100%;
    padding: 1rem 0;
    position: absolute;
    bottom: 0;
    
`
const Image = styled.img`
    
    width: 100%;
    height: 40%;
    user-select: none;
    object-fit: cover;
`