import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { getParsedResponse } from '../services/parser'

import { CardList, Loading, Alert } from '../components'


import RssFeedIcon from '@material-ui/icons/RssFeed';
import { SaveAlt } from '@material-ui/icons';
import CancelIcon from '@material-ui/icons/Cancel';

export default function SearchFeed() {

    const [urlValue, setUrlValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [canSearch, setCanSearch] = useState(false)

    const [feedPreview, setFeedPreview] = useState(null)

    const feedStr = 'rss-feed-manager'
    const [feeds, setFeeds] = useState(JSON.parse(localStorage.getItem(feedStr)))
    const [alertText, setAlertText] = useState(null)
    const [displayAlert, setDisplayAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleUrlValue = (e) => {
        if (e.length <= 5) {
            setNameValue("")
            setCanSearch(false)
        }
        setUrlValue(e)
    }
    const handleNameValue = (e) => {
        
        setNameValue(e)
        if (nameValue !== "") {
            setCanSearch(true)
        } else {
            setCanSearch(false)
        }
    }

    const handleSearch = async () => {
        if (urlValue !== "" && nameValue !== "") {
        
            setIsLoading(true)
            try {
                getParsedResponse(nameValue, urlValue)
                    .then((res) => {
                        console.log('res: ', res);
                        setFeedPreview(res)
                        setIsLoading(false)
                    })
                    .catch ((error) => {
                        setIsLoading(false)
                        console.log('error: ', error);
                        setAlertText(error.toString())
                        setDisplayAlert(true)
                    })
            } catch(error) {
                 setIsLoading(false)
                console.log('error: ', error);
                setAlertText(error.toString())
                setDisplayAlert(true)
            }
        }
    }

    const clearSearch = () => {
        setCanSearch(false)
        setIsLoading(false)
        setUrlValue("")
        setNameValue("")
    }

    const handleCancel = () => {
        clearSearch()
        setFeedPreview(null)
    }

    const handleSaveFeed = () => {
        const newFeeds = [ ...feeds, {source: nameValue, url: urlValue} ]
        setFeeds(() => newFeeds)
        localStorage.setItem(feedStr, JSON.stringify(newFeeds))
        setFeedPreview(null)
        clearSearch()
        setAlertText("Added to yo list of feed" )
        setDisplayAlert(true)
    }


    return (
        <Page>
            <Title>
                Add new RSS feeds to your collection 
            </Title>
            <Description>
                Grab the RSS Feed url you would like to search and assign a name to save it to your library.<br/>You can get the url by right clicking on the button <RssFeedIcon /> on the news/blog website.
            </Description>
                <TFContainer>
                    <TextField value={urlValue} onChange={(e) => handleUrlValue(e.target.value)} placeholder="Add url . / feed rss ...  xml maybe" />
                    { urlValue.length > 5 ? 
                        <TextField value={nameValue} onChange={(e) => handleNameValue(e.target.value)}  placeholder="Assign a name for this feed" /> : null 
                    }
                    { canSearch ? <SearchButton onClick={() => handleSearch()} >Search</SearchButton> : null   }           
                </TFContainer>
            { displayAlert && 
                <Alert 
                    text={alertText}
                    isTemp={false} 
                    setDisplayAlert={setDisplayAlert} 
                    firstActionText="OK"
                    handleFirstAction={() => setDisplayAlert(false)}
                />
            }
            { 
                feedPreview ? 
                    <CardList 
                        news={feedPreview.news}
                        displayTrailingButton={true}
                        trailingButtonText="Cancel"
                        trailingButtonIcon={<CancelIcon />}
                        handleTrailingButtonOnClick={handleCancel}
                        displaySecondTrailingButton={true}
                        secondTrailingButtonText="Save"
                        secondTrailingButtonIcon={<SaveAlt />}
                        handleSecondTrailingButtonOnclick={handleSaveFeed}
                    /> 
                    : isLoading && <Loading /> 
            }
        </Page>
    )
}

const Page = styled.div`
    background-color: ${props => props.theme.secondary};
    display: flow-root;
    min-height: 110vh;
`

const Title = styled.h2`
    font-size: 2.8rem;
    margin: 10rem auto 4rem; 
    width: 90vw;
    text-align: center;
    color:  ${props => props.theme.primary};

    @media screen and (max-width: 700px) {
        font-size: 2rem;
        margin: 8rem auto 3rem; 
    }
`
const Description = styled.p`
    font-size: 1.6rem;
    margin: 0 auto 2rem; 
    width: 90vw;
    color:  ${props => props.theme.tertiary};
    text-align: center;

    svg {
        vertical-align: center;
        font-size: 1.8rem;
        color:  ${props => props.theme.primary};
    }

    @media screen and (max-width: 700px) {
        font-size: 1.2rem;
    }
`
const TFContainer = styled.div`
    width: 90vw;
    margin: 2rem auto;
    display: flex;
    justify-content:center;

    @media screen and (max-width: 700px) {
        
        flex-direction: column;
        align-items: center;
    }
`


const TextField = styled.input`
    display: block;
    margin: 0 3rem 0 0;
    padding: 1rem;
    border: 1px solid ${props => props.theme.tertiaryAlt};
    width: 14rem;
    height: 2.2rem;
    background-color: ${props => props.theme.secondaryAlt};
    color: ${props => props.theme.primary};

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props => props.theme.tertiary};
    }
    :-ms-input-placeholder {
        color: ${props => props.theme.tertiary};
    }

    @media screen and (max-width: 700px) {
        margin: 1rem 0;
    }
`

const SearchButton = styled.button`
    padding: 0 1.4rem;
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    border-radius: 1.1rem;
    height: 2.2rem;
    box-shadow: -2px 4px 6px ${props => props.theme.secondaryAlt};

    @media screen and (max-width: 700px) {
        margin: 1rem 0;
        width: 140px;
        height: 44px;
    }
`
