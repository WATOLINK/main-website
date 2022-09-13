import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SmallLogo from '../public/logos/SmallLogo.svg'
import 'font-awesome/css/font-awesome.min.css'

const ImageContainer = styled.a`
    display: 'flex';
    flex-shrink: 0;
    cursor: pointer;
    margin: 10px;
`

const IconsContainer = styled.div`
    margin-left: 10px;
    display: inline-block;
`

const StyledSocialMediaMessage = styled.div`
    font: ${({theme}) => theme.fonts.footer};
    font-weight: 1000;
    margin-left: 20px;
    margin-bottom: 10px;
    display: inline-block;
`

const SocialMediaContainer = styled.div`
    max-width: 300px;
    display: inline-block;
    position: absolute;
    margin-right: 200px;
    transform:translate(0px, -20px);
    right: 0;
    top: 0;
`

export function FontIcons() {
    return (
        <IconsContainer>
            <ImageContainer title="Instagram">
                <Link href="https://www.instagram.com/watolink_uw/">
                    <i class='fa fa-instagram fa-3x' style={{color:"#0088FF"}}></i>
                </Link>
            </ImageContainer>
            <ImageContainer title="Twitter">
                <Link href="https://twitter.com/watolink/">
                    <i class='fa fa-twitter-square fa-3x' style={{color:"#0088FF"}}></i>
                </Link>
            </ImageContainer>
            <ImageContainer title="LinkedIn">
                <Link href="https://www.linkedin.com/company/watolink/">
                    <i class='fa fa-linkedin-square fa-3x' style={{color:"#0088FF"}}></i>
                </Link>
            </ImageContainer>
        </IconsContainer>
    )
}

export function SocialMediaBlock() {
    return (
        <SocialMediaContainer>
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
            <StyledSocialMediaMessage>
                Get In Touch!
            </StyledSocialMediaMessage>
            <FontIcons />
        </SocialMediaContainer>
    )
}
