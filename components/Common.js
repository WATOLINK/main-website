import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SmallLogo from '../public/logos/SmallLogo.svg'
import SOCIALMEDIA from '../constants/contactinfo/socialmedia'

const ImageContainer = styled.a`
    display: 'flex';
    padding: ${({ custom }) => custom ? custom : '0px'};
`

const IconsContainer = styled.div`
    display: flex;

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
    font-weight: 900;
    padding-left: 20px;
`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        padding: 5px 0px 0px 10px;
    }
`

const Organizer = ({ image, filename, link, custom }) => {
    return (
        <ImageContainer title={image} custom={custom}>
            <Link href={link}>
                <Image
                    alt={image}
                    src={filename}
                    layout="fixed"
                />
            </Link>
        </ImageContainer>
    )
}

export function FontIcons() {
    return (
        <IconsContainer>
            {SOCIALMEDIA.map((socialmedia) => (
                <Organizer image={socialmedia.image} filename={socialmedia.filename} link={socialmedia.link} custom={socialmedia.custom}/>
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
            <StyledSocialMediaMessage>Get In Touch!</StyledSocialMediaMessage>
            <FontIcons />
        </SocialMediaContainer>
    )
}
