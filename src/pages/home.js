import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getParsedResponse } from '../services/parser'
import { useStateWithPromise } from '../hooks/use-state-with-promise'

import { CardList, Alert, Loading, SearchCollectionCard, SearchBar } from '../components'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Home() {

    const feedStr = 'rss-feed-manager'
    const [feeds, setFeeds] = useState(JSON.parse(localStorage.getItem(feedStr)))
    const [allNews, setAllNews] = useStateWithPromise(null)
    const [displayAlert, setDisplayAlert] = useState(false)

   
    const [searchedSources, setSearchedSources] = useState([])
    const [searchedNews, setSearchedNews] = useState([])

    useEffect(() => {
        if (feeds !== null) {
            getNewsfromUrls(feeds)
        }
    }, [feeds])


    const getNewsfromUrls = async (feeds) => {
        const resolvedPromisesArray = feeds.map(feed => getParsedResponse(feed.source, feed.url).catch(err => console.log('Promise err: ', err)))
        // console.log("resolved promises array: ", resolvedPromisesArray);

        await Promise.all(resolvedPromisesArray)
            .then(value => setAllNews(value))
            .catch(err => console.log('Promise ALL err: ', err))
    }

    const handleDelete = (source, url) => {
        const feedStr = 'rss-feed-manager'
        const allFeeds = JSON.parse(localStorage.getItem(feedStr))
        const newFeeds = allFeeds.filter(feed => feed.source !== source)
        localStorage.setItem(feedStr, JSON.stringify(newFeeds))
        setFeeds(newFeeds)
        window.scrollTo(0, 0)
        setDisplayAlert(true)
    }

    const handleSearch = (str) => {
        if (str.length >= 3) {
            const sources = allNews.filter(feed => feed.source.toLowerCase().includes(str.toLowerCase()))
            if ( sources.length > 0 ) {
                
                setSearchedSources(sources)
            }
            const news = allNews.flatMap(feed => feed.news.filter(news => news.title.toLowerCase().includes(str.toLowerCase())))
            if ( news.length > 0 ) {
                setSearchedNews(news)
            }
            
        } else {
            setSearchedSources([])
            setSearchedNews([])
        }
    }

    return (
        <Page>
            <Title>Manage and read through your subscribed RSS Feeds</Title>
            { displayAlert && 
                <Alert 
                    text="Feed successfully deleted"
                    isTemp={true} 
                    setDisplayAlert={setDisplayAlert} 
                />
            }
            { (allNews !== undefined && allNews !== null) ? 
                <>
                    <SearchBar 
                        searchDescription="Access faster to feed sources or news with keyword"
                        handleSearch={handleSearch} 
                        placeholder="Search for sources or news ..."
                        primaryData={searchedSources}
                        primaryText={`Results: ${searchedSources.length} ${searchedSources.length > 1 ? 'sources' : 'source'} found`}
                        secondaryData={searchedNews} 
                        secondaryText={`Results: ${searchedNews.length} news found`}
                    />
                   { (searchedSources.length > 0 || searchedNews.length > 0) ?
                        <>
                            { searchedSources.map((value, index) => 
                                value && 
                                    <CardList 
                                        key={index} 
                                        news={value.news} 
                                        displayTrailingButton={true}
                                        trailingButtonText="Delete"
                                        trailingButtonIcon={<DeleteForeverIcon />}
                                        handleTrailingButtonOnClick={handleDelete}
                                    />
                            )}
                            {
                                (searchedNews.length > 0) ?
                                    <SearchCollectionCard news={searchedNews} />
                                    : null
                            }
                        </>
                        : allNews.map((value, index) => 
                            value && 
                                <CardList 
                                    key={index} 
                                    news={value.news} 
                                    displayTrailingButton={true}
                                    trailingButtonText="Delete"
                                    trailingButtonIcon={<DeleteForeverIcon />}
                                    handleTrailingButtonOnClick={handleDelete}
                                />
                    )}
                </>
                : <Loading /> 
            }
        </Page>
    )
}

const Page = styled.div`
    background-color: ${props => props.theme.secondary};
    display: flow-root;
    min-height: 95vh;
`

const Title = styled.h1`
    /* color:  ${props => props.theme.primary};
    font-size: 3rem;
    padding: 1rem;
    margin: 8rem 2rem 2rem; */
    
    font-size: 2.8rem;
    margin: 10rem auto 4rem; 
    width: 90vw;
    text-align: center;
    color:  ${props => props.theme.primary};
`
