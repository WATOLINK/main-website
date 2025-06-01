import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import SocialMediaBlock from '../components/Common';
import NAVLINKS from '../constants/navlinks';
import { useRouter } from 'next/router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 50px;
    position: relative;
    background-image: url('/logos/BigGoose.png');
    background-repeat: repeat-x;
    background-position: center;
    background-size: auto 100%;
`;


const BlueOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.blue};
    opacity: 0.4; 
    mix-blend-mode: multiply;
    z-index: 0;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0rem clamp(1rem, 5vw, 16rem);
    z-index: 2;
`

const LinkContainer = styled.div`
    display: flex;
    width: 288px;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 25px;
    padding: 2rem 6rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;

    @media screen and (max-width: 1092px) {
        padding: 10px;
    }

    @media screen and (max-width: 684px) {
        margin-top: 10px;
    }
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.footer};
    text-align: center;
    text-decoration: none;
    transition: color 0.3s, background-color 0.2s;
    cursor: pointer;
    display: inline-block;
    z-index: 3;
    width: auto;
    margin: auto;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
        transition: opacity 0.3s;
        opacity: 0.5;
    }

    @media screen and (max-width: 684px) {
        padding: 5px;
    }
`;


const FooterBrain = styled.div`
    position: absolute;
    bottom: 100px; 
    left: 300px; 
    z-index: 2;
`;

const StyledCopyright = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0px;
    font: ${({ theme }) => theme.fonts.footer};
    color: ${({ theme }) => theme.colors.white};
    z-index: 1;
`;

export default function Footer({ page, bottomed = false }) {
    const router = useRouter();

    return (
        <Container>
            <BlueOverlay /> 
            <TopContainer bottomed={bottomed}>
                <SocialMediaBlock />
                <LinkContainer>
                    {NAVLINKS.map((header) => (
                         header.href.includes('https') ? (
                            <StyledLink
                                as="a"
                                key={header.name}
                                href={header.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {header.name}
                            </StyledLink>
                        ) : (
                            <Link key={header.name} href={header.href} passHref legacyBehavior>
                                <StyledLink as="a">{header.name}</StyledLink>
                            </Link>
                        )
                    ))}
                    <FooterBrain>
                        <Image
                            src="/icons/footerbrain1.png"
                            alt="Brain Icon"
                            width={145}
                            height={84}
                            objectFit="contain"
                        />
                    </FooterBrain>
                </LinkContainer>
            </TopContainer>
            <StyledCopyright> &copy; WATOLINK 2025 </StyledCopyright>
        </Container>
    )
}
