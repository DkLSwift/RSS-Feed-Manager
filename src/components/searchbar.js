import React, { useState } from 'react'
import styled from 'styled-components'

export default function SearchBar({ searchDescription, primaryData, primaryText, secondaryData, secondaryText, placeholder, handleSearch }) {

     const [searchStr, setSearchStr] = useState("")

    return (
        // Reusable Title & search component
        <SearchFieldContainer>
                <h3>{searchDescription}</h3>
                <TextFieldContainer>
                    <TextField value={searchStr} onChange={(e) => {
                            setSearchStr(e.target.value)
                            handleSearch(e.target.value)
                        }} 
                        placeholder={placeholder} />
                    { searchStr.length > 0 && <ClearSearchButton onClick={() => {
                        setSearchStr('')
                        handleSearch('')
                        }}>
                            Clear
                        </ClearSearchButton> 
                    }
                </TextFieldContainer>
                {/* Display custom reusable text */}
                <SearchResults>
                    { primaryData.length > 0 && <p>{primaryText}</p> }
                    { secondaryData.length > 0 && <p>{secondaryText}</p> }
                    { ( searchStr.length > 2 && primaryData.length === 0 && secondaryData.length === 0) && <p>No match !</p> }
                </SearchResults>
        </SearchFieldContainer>
    )
}



const SearchFieldContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: left;
    width: 90%;
    max-width: 1700px;
    margin: 0 auto;
    text-align: right;

    h3 {
        color: ${props => props.theme.tertiary};
    }

    @media screen and (max-width: 700px) {
        align-items: center;
         text-align: center;
         
    }

`

const TextFieldContainer = styled.div`

`

const TextField = styled.input`
    margin: 2rem 0rem;
    padding: 1rem;
    border: 1px solid ${props => props.theme.tertiaryAlt};
    width: 18rem;
    min-width: 10rem;
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

`

const ClearSearchButton = styled.button`
    margin: 2rem 0 2rem 1rem;
    padding: 0 1.4rem;
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    border-radius: 1.1rem;
    height: 2.2rem;
    box-shadow: -2px 4px 6px ${props => props.theme.secondaryAlt};
`

const SearchResults = styled.div`
    color: ${props => props.theme.primary};
    font-size: 1.2rem;
`