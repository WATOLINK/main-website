import styled from 'styled-components'
import Link from 'next/link'
import { FooterIcons } from '../components/Common'

const FooterItems = [
    {
        name: 'About Us',
        href: '/',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Team',
        href: '/members',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'Join our Team',
        href: '/',
    },
]

const FooterContainer = styled.div`
    width: auto;
    height: auto;
    position: ${({bottomed}) => bottomed ? 'absolute' : 'relative'};
    bottom: ${({bottomed}) => bottomed ? 0 : 'none'};
`

const MenuContainer = styled.div`
    max-width: 500px;
`

const StyledCopyright = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin 15px 0px;
    font: ${({theme}) => theme.fonts.footer};
`

const StyledLink = styled.div`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.footer};
    transition: color 0.2s, background-color 0.2s;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 200px;
    cursor: pointer;
    display: inline-block;

    &:hover {
        color: ${({ theme }) => theme.colors.accent };
        background: ${({ theme }) => theme.colors.white};
    }
`

const NavLink = ({ name, href }) => {
    return (
        <Link href={href}>
            <StyledLink> {name} </StyledLink>
        </Link>
    )
}

export function Copyright({ bottomed = false }) {
    return (
        <FooterContainer bottomed = {bottomed}>
            <StyledCopyright> &copy; WATOLINK 2022 </StyledCopyright>
        </FooterContainer>
    )
}

export function DefaultFooter({ bottomed = false }) {
    return (
        <FooterContainer bottomed = {bottomed}>
            <MenuContainer>
                {FooterItems.map((header) => (
                    <NavLink key={header.name} {...header} />
                ))}
            </MenuContainer>
            <FooterIcons />
            <Copyright />
        </FooterContainer>
    )
}

export function AboutFooter({ bottomed = false }) {
    return (
        <FooterContainer bottomed = {bottomed}>
            <DefaultFooter />
        </FooterContainer>
    )
}
