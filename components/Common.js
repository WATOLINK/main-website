import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SmallLogo from '../public/logos/SmallLogo.svg'
// replace with uploaded icons from figma
import 'font-awesome/css/font-awesome.min.css'

const ImageContainer = styled.a`
    display: 'flex';
`

const IconsContainer = styled.div`
    display: flex;
    padding-left: 10;
    
    & > a {
        padding: 10px;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.5;
        }
    }
`

const StyledSocialMediaMessage = styled.div`
    font: ${({ theme }) => theme.fonts.footer};
    font-weight: 900;
    padding-left: 10px;
`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export function FontIcons() {
    return (
        <IconsContainer>
            <ImageContainer title="Instagram">
                <Link href="https://www.instagram.com/watolink_uw/">
                    <i
                        className="fa fa-instagram fa-3x"
                        style={{ color: '#0088FF' }}
                    ></i>
                </Link>
            </ImageContainer>
            <ImageContainer title="Twitter">
                <Link href="https://twitter.com/watolink/">
                    <i
                        className="fa fa-twitter-square fa-3x"
                        style={{ color: '#0088FF' }}
                    ></i>
                </Link>
            </ImageContainer>
            <ImageContainer title="LinkedIn">
                <Link href="https://www.linkedin.com/company/watolink/">
                    <i
                        className="fa fa-linkedin-square fa-3x"
                        style={{ color: '#0088FF' }}
                    ></i>
                </Link>
            </ImageContainer>
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
