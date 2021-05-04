import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import * as ROUTES from '../constants/routes'

import { dephtsOfWater, blueberry, darkOrangeColors } from '../components/Theme'

import PaletteIcon from '@material-ui/icons/Palette';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = ({ setTheme, themeColors }) => {


    const [toggleSettings, setToggleSettings] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const themeDiv = useRef(null)
    const menu = useRef(null)
    useOutsideAlerter(themeDiv)
    useOutsideAlerter(menu)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggleSettings(false)
                    setShowMenu(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref])
    }

    const handleChangeOfTheme = (selectedTheme) => {
        
        console.log(selectedTheme);
        switch (selectedTheme) {
            case 'darkOrangeColors':
                setTheme(darkOrangeColors)
                break;
            case 'blueberry':
                setTheme(blueberry)
                break;
            case 'dephtsOfWater':
                setTheme(dephtsOfWater)
                break;
            default:
                setTheme(darkOrangeColors)
                break;
        }
        setToggleSettings(false)
    }


    return (
        
         <Nav>
            <NavContainer>
                <Logo href={ROUTES.HOME}>
                    App Name
                </Logo>
                <NavList>
                    <StyledLink  to={ROUTES.SEARCH_FEEDS}>
                        Search
                    </StyledLink>
                    <StyledLink to={ROUTES.DISCOVER_FEEDS}>
                        Discover
                    </StyledLink>
                    <ThemeWrapper>
                        <ThemeSettingsButton onClick={() => {
                            if (!toggleSettings) setToggleSettings(true)
                        }} >
                            <PaletteIcon />
                        </ThemeSettingsButton>
                        { toggleSettings && 
                            <ThemeContainer ref={themeDiv}>
                                <h3>Choose Theme</h3>
                                <Button onClick={() => handleChangeOfTheme(themeColors.darkOrangeColors)}>Dark Orange</Button>
                                <Button onClick={() => handleChangeOfTheme(themeColors.dephtsOfWater)}>Dephts Of Water</Button>
                                <Button onClick={() => handleChangeOfTheme(themeColors.blueberry)}>Blueberry</Button>
                            </ThemeContainer>
                        }
                    </ThemeWrapper>
                    
                    
                </NavList>
            <MenuButton onClick={() => setShowMenu(true)}>
                <MenuOpenIcon />
            </MenuButton>
            </NavContainer>
            <Menu showMenu={showMenu} ref={menu}>
                <MenuHeader>
                    <h2>Menu</h2>
                    <Button onClick={() => setShowMenu(false)} >
                        <CloseIcon  />
                    </Button>
                </MenuHeader>
                <MenuHeaderUnderline />
                <MenuList>
                    <h4>Pages</h4>
                    <StyledLink  to={ROUTES.HOME} onClick={() => {
                            setShowMenu(false)
                            window.scrollTo(0,0)
                        }}>
                        Home
                    </StyledLink>
                    <StyledLink  to={ROUTES.SEARCH_FEEDS} onClick={() => {
                            setShowMenu(false)
                            window.scrollTo(0,0)
                        }}>
                        Search
                    </StyledLink>
                    <StyledLink to={ROUTES.DISCOVER_FEEDS} onClick={() =>{ 
                            setShowMenu(false)
                            window.scrollTo(0,0)
                        }} >
                        Discover
                    </StyledLink>
                </MenuList>
                <MenuTheme>
                    <h4>Theme  <PaletteIcon /></h4>
                    <Button onClick={() => handleChangeOfTheme(themeColors.darkOrangeColors)}>Dark Orange</Button>
                    <Button onClick={() => handleChangeOfTheme(themeColors.dephtsOfWater)}>Dephts Of Water</Button>
                    <Button onClick={() => handleChangeOfTheme(themeColors.blueberry)}>Blueberry</Button>
                </MenuTheme>
                
            </Menu>
        </Nav>
    );
}


export default Navbar

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.secondaryAlt2};
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 20;

    li {
        padding-left: 50px;
    }
`
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1800px;
    margin: auto;
`

const NavList = styled.ul`
    float: right;
    height: 100%;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2rem;

     @media screen and (max-width: 600px) {
        display: none;
    }
`

const Logo = styled.a`
    margin-left: 2rem;
    font-size: 2.4rem;
    text-decoration: none;
    color:   ${props => props.theme.primaryAlt};
`
const StyledLink = styled(Link)`
    text-decoration: none;
    margin-left: 3rem;
    font-size: 1.6rem;
    color:  ${props => props.theme.primary};

    &:visited, &:link {
        color:  ${props => props.theme.primary};
    }
    &:hover {
        color:  ${props => props.theme.primaryAlt};
    }

`

const ThemeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end
`

const ThemeSettingsButton = styled.button`

    border: none;
    padding: 0 1rem;
    cursor: pointer;
    background-color: ${props => props.theme.secondaryAlt2};
    color: ${props => props.theme.primary};
    margin-left: 1.4rem;

    &:focus {
        border: none;
        outline: none;
    }

    svg {
        font-size: 2.6rem;
    }
`
const ThemeContainer = styled.div`
    height: 200px;
    width: 240px;
    background-color: ${props => props.theme.secondaryAlt2};
    position: absolute; 
    top: 82px; 
    -webkit-clip-path: polygon(100% 7%, 91% 7%, 81% 0, 70% 7%, 0 7%, 0 100%, 100% 100%);
    clip-path: polygon(100% 7%, 91% 7%, 81% 0, 70% 7%, 0 7%, 0 100%, 100% 100%);

    display: flex;
    flex-direction: column;


    h3 {
        color: ${props => props.theme.tertiary};
        margin: 2rem auto 1rem;
        text-align: center;
        border-bottom: 1px solid ${props => props.theme.tertiary};
        width: 84%;
        padding-bottom: 4px;
    }

`


const Button = styled.button`
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: ${props => props.theme.secondaryAlt2};
    color: ${props => props.theme.primary};
    margin-bottom: 0.8rem;

    &:focus {
        border: none;
        outline: none;
    }
`

const MenuButton = styled(ThemeSettingsButton)`
    
    @media screen and (min-width: 600px) {
        display: none;
    }
`

const Menu = styled.div`
    
    height: 100vh;
    width: 80vw;
    position: fixed;
    top:0;
    bottom:0;
    right: 0;
    background-color: ${props => props.theme.secondaryAlt2};
    transform: ${props => props.showMenu ? 'translate3d(0, 0, 0)' : 'translate3d(80vw, 0, 0);' };
    transition: transform .3s
              cubic-bezier(0, .52, 0, 1);
    z-index: 11;
    box-shadow: -6px 0px 10px ${props => props.theme.secondaryAlt};
`
const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem 0;

    h2 {
        margin-right: 3rem;
        font-size: 2rem;
        color: ${props => props.theme.primaryAlt};
        
    }

    svg {
        font-size: 2.6rem;
    }

   
`
const MenuHeaderUnderline = styled.div`
    width: 90%;
    text-align: center;
    height: 1px;
    background-color: ${props => props.theme.primaryAlt};
    margin: auto;
`

const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2rem auto;

    h4 {
        color: ${props => props.theme.tertiary};
        font-size: 1.2rem;
    }
    a {
        margin: 1rem 0;
    }
`

const MenuTheme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: 2rem auto;


    h4 {
        color: ${props => props.theme.tertiary};
        font-size: 1.2rem;
    }

    button {
        margin: 0.8rem 0;
    }
`