import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SmallLogo from '../public/logos/SmallLogo.svg'
import SOCIALMEDIA from '../constants/contactinfo/socialmedia'

const ImageContainer = styled.a`
    display: 'flex';
    padding: ${({ custom }) => (custom ? custom : '0px')};
`

const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > a {
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.5;
        }
    }
`

const StyledSocialMediaMessage = styled.a`
    font: ${({ theme }) => theme.fonts.footer};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 900;
    ${'' /* padding-left: 20px; */}
`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    padding: 3rem 6rem;

    & > div {
        padding: 5px 0px 0px 10px;
    }
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 50px;
`

const Organizer = ({ image, filename, link, custom }) => {
    return (
        <ImageContainer title={image} custom={custom}>
            <Link href={link}>
                <Image alt={image} src={filename} layout="fixed" />
            </Link>
        </ImageContainer>
    )
}

export function FontIcons() {
    return (
        <IconsContainer>
            {SOCIALMEDIA.map((socialmedia) => (
                <Organizer
                    key={socialmedia.link}
                    image={socialmedia.image}
                    filename={socialmedia.filename}
                    link={socialmedia.link}
                    custom={socialmedia.custom}
                />
            ))}
        </IconsContainer>
    )
}

export default function SocialMediaBlock() {
    return (
        <SocialMediaContainer>
            <ImageContainer title="About Us">
                <Image alt="WATOLINK logo" src={SmallLogo} layout="fixed" />
            </ImageContainer>
            <CaptionContainer>
                <StyledSocialMediaMessage>
                    Get In Touch!
                </StyledSocialMediaMessage>
                <FontIcons />
            </CaptionContainer>
        </SocialMediaContainer>
    )
}
