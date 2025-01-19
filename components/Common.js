import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import SmallLogo from '../public/logos/SmallLogo.svg';
import SOCIALMEDIA from '../constants/contactinfo/socialmedia';

const ImageContainer = styled.a`
    display: 'flex';
    padding: ${({ custom }) => (custom ? custom : '0px')};
`;

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
`;

const StyledSocialMediaMessage = styled.a`
    font: ${({ theme }) => theme.fonts.footer};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 900;
`;

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    width: 288px;
    padding: 2rem 6rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1092px) {
        padding: 10px;
    }
`;

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 50px;
    position: relative;
    height: 100%;
`;

const Organizer = ({ image, filename, link, custom }) => {
    return (
        <ImageContainer title={image} custom={custom}>
            <Link href={link}>
                <Image alt={image} src={filename} layout="fixed" />
            </Link>
        </ImageContainer>
    );
};

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
    );
}

export default function SocialMediaBlock() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SocialMediaContainer>
            <ImageContainer title="About Us">
                <Image alt="WATOLINK logo" src={SmallLogo} layout="fixed" />
            </ImageContainer>
            <CaptionContainer>
                {screenWidth > 1092 && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '-65px',
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src="/icons/footerbrain2.png"
                            alt="Brain Icon"
                            width={90}
                            height={115}
                            objectFit="contain"
                        />
                    </div>
                )}
                <StyledSocialMediaMessage>Get In Touch!</StyledSocialMediaMessage>
                <FontIcons />
            </CaptionContainer>
        </SocialMediaContainer>
    );
}
