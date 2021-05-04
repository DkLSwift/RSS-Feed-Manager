import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { discoverRSS } from '../constants/default-rss'

import { SearchBar, DiscoverCategory } from '../components'

export default function DiscoverFeed() {

    const feedStr = 'rss-feed-manager'
    const [currentFeeds, setCurrentFeeds] = useState(JSON.parse(localStorage.getItem(feedStr)))
    const [discoverFilteredFeeds, setDiscoverFilteredFeeds] = useState(null)

    const [searchedCategories, setSearchedCategories] = useState([])
    const [searchedFeeds, setSearchedFeeds] = useState([])

    const discoverFeeds = discoverRSS

    useEffect(() => {
        if (discoverFeeds !== undefined) {
            filterFeeds()   
        }
    }, [discoverFeeds, currentFeeds])

    // Compare static Discover RSS Feeds from _constants__default-rss file 
    //          to the user saved local storage RSS Feeds
    const filterFeeds = () => {
        const filteredFeeds = discoverFeeds.map((item) => item.data.filter((itemData) => !currentFeeds.some(feed => feed.url === itemData.url)))
        //  then set the filtered array to display
        setDiscoverFilteredFeeds(filteredFeeds)
    }


    const handleSearch = (str) => {
        if (discoverFeeds !== undefined){
            if (str.length >= 3) {
                // Filter categories based on search input
                const categories = discoverFeeds.filter(feed => feed.category.toLowerCase().includes(str.toLowerCase()))
                
                if ( categories.length > 0 ) {
                    // if categories found set to display
                    setSearchedCategories(categories)
                }
                // Filter each feeds based on search input
                const feeds = discoverFeeds.map(feed => feed.data.filter(data => data.source.toLowerCase().includes(str.toLowerCase()))).filter(category => category.length > 0)
                if ( feeds.length > 0 ) {
                    // if feeds found set to display
                    setSearchedFeeds(feeds)
                }
            } else {
                // no search triggered until input characters aren't 3 or over
                setSearchedCategories([])
                setSearchedFeeds([])
            }
        }
    }


    return (
        <Page>
            <Description>
                Search an interresting RSS feed through a small made up list
            </Description>
            <SearchBar 
                searchDescription="Search for categories or specifics RSS Feeds"
                handleSearch={handleSearch} 
                placeholder="Search for categories or feeds ..."
                primaryData={searchedCategories}
                primaryText={`Results: ${searchedCategories.length} ${searchedCategories.length > 1 ? 'categories' : 'category'} found`}
                secondaryData={searchedFeeds} 
                secondaryText={`Results: ${searchedFeeds.length} ${searchedFeeds.length > 1 ? 'feeds' : 'feed'} found`}
            />
            { 
                (searchedCategories.length > 0 || searchedFeeds.length > 0) ?
                    <>
                    {/* Either one of searched filtered categories or feeds or both are ready to display */}
                        { searchedCategories.map((category, index) => 
                            <DiscoverCategory key={index} category={category.data} currentFeeds={currentFeeds} setCurrentFeeds={setCurrentFeeds} />
                        )}
                        {
                            searchedFeeds.map((category, index) => 
                            <DiscoverCategory key={index} category={category} currentFeeds={currentFeeds} setCurrentFeeds={setCurrentFeeds} />
                        )}
                    </>  
                    // Normal display without search or no search results
                    : discoverFilteredFeeds && discoverFilteredFeeds.map((category, index) => 
                        <DiscoverCategory key={index} category={category} currentFeeds={currentFeeds} setCurrentFeeds={setCurrentFeeds} />
                    )
            }
        </Page>
    )
}

const Page = styled.div`
    display: flow-root;
    background-color:  ${props => props.theme.secondary};
    min-height: 100vh;
    text-align: center;
`

const Description = styled.h2`

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