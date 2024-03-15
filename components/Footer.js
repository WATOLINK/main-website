import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SocialMediaBlock from '../components/Common'
import NAVLINKS from '../constants/navlinks'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 50px;
    background-color: ${({ theme }) => theme.colors.lightblue};
    background-image: url('/logos/BigGoose.svg');
    background-repeat: repeat-x;
    background-size: auto 100%;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0rem clamp(1rem, 5vw, 16rem);
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 25px;
    padding: 2rem 6rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
`

const StyledCopyright = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0px;
    font: ${({ theme }) => theme.fonts.footer};
    color: ${({ theme }) => theme.colors.white};
`

const StyledLink = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.footer};
    text-align: center;
    transition: color 0.3s, background-color 0.2s;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
    z-index: 2;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.white};
    }
`

export default function Footer({ page, bottomed = false }) {
    return (
        <Container>
            <TopContainer bottomed={bottomed}>
                <SocialMediaBlock />
                <LinkContainer>
                    {NAVLINKS.map((header) => (
                        <Link key={header.name} href={header.href}>
                            <StyledLink>{header.name}</StyledLink>
                        </Link>
                    ))}

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '100px', // Adjust as necessary
                            left: '200px', // Adjust as necessary
                        }}
                    >
                        <Image
                            src="/icons/footerbrain1.png"
                            alt="Brain Icon"
                            width={145}
                            height={84}
                            objectFit="contain"
                        />
                    </div>
                </LinkContainer>
            </TopContainer>
            <StyledCopyright> &copy; WATOLINK 2024 </StyledCopyright>
        </Container>
    )
}
