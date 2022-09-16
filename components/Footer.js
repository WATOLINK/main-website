import styled from 'styled-components'
import Link from 'next/link'
import SocialMediaBlock from '../components/Common'
import NAVLINKS from '../constants/navlinks'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 100px;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledCopyright = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0px;
    font: ${({ theme }) => theme.fonts.footer};
`

const StyledLink = styled.div`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.footer};
    transition: color 0.3s, background-color 0.2s;
    padding: 20px;
    cursor: pointer;
    display: inline-block;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.white};
    }
`

export default function Footer({ page, bottomed = false }) {
    return (
        <Container>
            {page !== 'Contact' && (
                <TopContainer bottomed={bottomed}>
                    <LinkContainer>
                        {NAVLINKS.map((header) => (
                            <Link key={header.name} href={header.href}>
                                <StyledLink>{header.name}</StyledLink>
                            </Link>
                        ))}
                    </LinkContainer>
                    <SocialMediaBlock />
                </TopContainer>
            )}
            <StyledCopyright> &copy; WATOLINK 2022 </StyledCopyright>
        </Container>
    )
}
