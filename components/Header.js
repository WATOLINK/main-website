import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SmallLogo from '../public/logos/SmallLogo.svg'

// TODO: confirm route names with leads
const headers = [
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
        accent: true,
    },
]

const Container = styled.div`
    margin: 20px;
    height: auto;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.div`
    display: 'flex';
    flex-shrink: 0;
    cursor: pointer;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
`

const StyledLink = styled.a`
    color: ${({ accent, theme }) =>
        accent ? theme.colors.accent : theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.nav};
    transition: color 0.2s, background-color 0.2s;
    border: ${({ accent, theme }) =>
        accent && `3px solid ${theme.colors.accent}`};
    border-radius: 50px;
    padding: 10px;
    margin: 0px 30px;
    cursor: pointer;

    &:hover {
        color: ${({ accent, theme }) =>
            accent ? theme.colors.white : theme.colors.accent};
        background-color: ${({ accent, theme }) =>
            accent && theme.colors.accent};
    }
`

const NavLink = ({ name, href, accent = false }) => {
    return (
        <Link href={href}>
            <StyledLink accent={accent}>{name}</StyledLink>
        </Link>
    )
}

export default function Header() {
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
            <HeaderContainer>
                {headers.map((header) => (
                    <NavLink key={header.name} {...header} />
                ))}
            </HeaderContainer>
        </Container>
    )
}
