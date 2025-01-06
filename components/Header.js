import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import SmallLogo from '../public/logos/SmallLogo.svg';
import NAVLINKS from '../constants/navlinks';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.background || '#fff'};
`;

const ImageContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1100px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Toggle visibility */
        position: absolute;
        top: 60px;
        right: 20px;
        background-color: ${({ theme }) => theme.colors.background || '#fff'};
        flex-direction: column;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ accent, theme }) =>
        accent ? theme.colors.accent : theme.colors.black};
    font: ${({ theme }) => theme.fonts.nav};
    transition: color 0.2s, background-color 0.2s;
    border: ${({ accent, theme }) =>
        accent && `3px solid ${theme.colors.accent}`};
    border-radius: 50px;
    padding: 10px;
    margin: 0 15px;
    cursor: pointer;

    &:hover {
        color: ${({ accent, theme }) =>
            accent ? theme.colors.white : theme.colors.accent};
        background-color: ${({ accent, theme }) =>
            accent && theme.colors.accent};
    }

    @media screen and (max-width: 1100px) {
        margin: 10px 0;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px; /* Increase container width for larger touch area */
    height: 40px; /* Increase container height for larger touch area */

    @media screen and (max-width: 1100px) {
        display: flex; /* Show hamburger only on smaller screens */
    }
`;

const Bar = styled.span`
    width: 35px; /* Increase width for a larger logo */
    height: 5px; /* Increase height for thicker bars */
    background-color: ${({ theme }) => theme.colors.googleBlue || '#4285F4'}; /* Google Docs blue */
    margin: 5px 0; /* Space between bars */
    border-radius: 3px; /* Add rounded edges for a modern look */
    transition: all 0.3s ease-in-out;
    transform-origin: center;
`;

const NavLink = ({ name, href, accent = false }) => {
    return (
        <Link href={href} passHref={true}>
            <StyledLink
                accent={accent}
                target={href.includes('https') ? '_blank' : '_self'}
            >
                {name}
            </StyledLink>
        </Link>
    );
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false); // Close menu
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <ImageContainer title="About Us">
                <Link href="/">
                    <Image
                        alt="WATOLINK logo"
                        src={SmallLogo}
                        layout="fixed"
                        width={262}
                        height={92}
                    />
                </Link>
            </ImageContainer>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <Bar />
                <Bar />
                <Bar />
            </Hamburger>
            <HeaderContainer isOpen={isOpen} ref={menuRef}>
                {NAVLINKS.map((navlink) => (
                    <NavLink key={navlink.name} {...navlink} />
                ))}
            </HeaderContainer>
        </Container>
    );
}
