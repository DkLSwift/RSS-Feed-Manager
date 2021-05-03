import React, { useState } from 'react'
import styled from 'styled-components'

import { getParsedResponse } from '../services/parser'

import { CardList, Alert } from '../components'

import { SaveAlt } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';

export default function DiscoverCategory({ category, currentFeeds, setCurrentFeeds }) {

    const [previewData, setPreviewData] = useState(null)
    const [alertText, setAlertText] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    const [displayAlert, setDisplayAlert] = useState(false)
    const [displaySourceAlert, setDisplaySourceAlert] = useState(false)
    const [alertSourceName, setalertSourceName] = useState()
    const feedStr = 'rss-feed-manager'
    

    const showPreview = async (item) => {
            getParsedResponse(item.source, item.url)
                .then((res) => {
                    setPreviewData(res)
                })
                .catch ((error) => {
                    setalertSourceName(item.source)
                    setAlertText(`Problem with the feed, cant display ${item.source}`)
                    setDisplaySourceAlert(true)
                })
    }

    const handleClosePreview = () => {
        setPreviewData(null)
    }

    const handleSaveToLocalStorageFeeds = (source, baseUrl) => {
        const newFeeds = [ ...currentFeeds, {source: source, url: baseUrl} ]
        setCurrentFeeds(() => newFeeds)
        localStorage.setItem(feedStr, JSON.stringify(newFeeds))
        setPreviewData(null)
        setalertSourceName(null)
        setAlertText('RSS Feed saved !')
        setDisplayAlert(true)
    }


    return (
        <Container>
            <CategoryTitle>{category[0]?.title}</CategoryTitle>
            { displayAlert && 
                <Alert 
                    text={alertText}
                    isTemp={true}
                    setDisplayAlert={setDisplayAlert}
                />
            }
            { category &&
                category.map((item, index) => 
                    <SourceContainer key={index} item={item} showPreview={showPreview}>
                        { ( previewData && previewData.source === item.source ) 
                            ? <ClearContainer>
                                    <CardList 
                                        news={previewData.news}
                                        displayTrailingButton={true}
                                        trailingButtonText="Close"
                                        trailingButtonIcon={<CloseIcon />}
                                        handleTrailingButtonOnClick={handleClosePreview}
                                        displaySecondTrailingButton={true}
                                        secondTrailingButtonText="Save"
                                        secondTrailingButtonIcon={<SaveAlt />}
                                        handleSecondTrailingButtonOnclick={handleSaveToLocalStorageFeeds}
                                    />
                                </ClearContainer>
                            : ( displaySourceAlert && alertSourceName === item.source ) 
                                ? <Alert 
                                    text={alertText}
                                    isTemp={true}
                                    setDisplayAlert={setDisplaySourceAlert}
                                /> 
                                : null
                        }
                    </SourceContainer>
                ) 
            }
        </Container>
    )
}

const SourceContainer = ({children, item, showPreview}) => {
    
    return (
        <>
            { children 
                ? children 
                : <SourceButton onClick={() => showPreview(item)}>{item.source}</SourceButton> 
            }
            
        </>
    )
}


const Container = styled.div`

    width:90vw;
    margin: 2rem auto 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const CategoryTitle = styled.h2`
    margin-bottom:2rem;
    width:50%;
    color: ${props => props.theme.primaryAlt};
    border-bottom: 1px solid ${props => props.theme.secondaryAlt};
    font-size: 2.8rem;

     @media screen and (max-width: 700px) {
        font-size: 3rem;
        width: 90%;
    }
`
const ClearContainer = styled.div`
    width: 100%;
    text-align: left;
`

const SourceButton = styled.button`
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    background-color:  ${props => props.theme.secondary};
    color:  ${props => props.theme.primary};
    margin-bottom: 0.8rem;

    &:focus {
        border: none;
        outline: none;
    }
`
