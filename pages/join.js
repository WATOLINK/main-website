import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import TeamPhoto from '../public/join-us-images/team-photo.png'; // Replace with your actual image
import LabPhoto from '../public/join-us-images/Lab-photo.png'; // Replace with your actual image
import Mascot from '../public/join-us-images/looking-brain.png'; // Replace with your actual SVG
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* slight upward motion */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
    background-color: #ffffff;
    background-image: url('/join-us-images/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
`;

const MainContent = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 50px 28px 5px 28px;
        gap: 10px;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 26px 0px
    align-items: center;
    margin-bottom: 80px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        margin-bottom: 40px;
        align-items: center;
        justify-content: center;
        width: 100%;

        /* This allows for order control of direct children */
        & > * {
            width: 100%;
        }
    }
`;

const FadeSection = styled(Section)`
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  &:nth-of-type(1) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(2) {
    animation-delay: 1s;
  }
`;


const ImageBox = styled.div`
    position: relative;
    width: 429.37px;
    height: 266px;
    flex-shrink: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: auto;
    margin-bottom: auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 180px;
        max-width: 280px;
    }

    /* override the NEXT <span> wrappers */
    > span {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 3;
    }

    /* finally, make the img cover & center */
    > span > img {
        object-fit: cover !important;
        object-position: center !important;
    }

    /* Top-left background layer */
    &::before {
        content: '';
        position: absolute;
        top: -11%;
        left: -8%;
        width: 112%;
        height: 118%;
        background-color: rgba(0, 136, 255, 0.31);
        z-index: 1;

        @media (max-width: 768px) {
            top: -13%;  /* Larger percentage on mobile */
            left: -9%; /* Larger percentage on mobile */
            width: 115%; /* Wider to maintain coverage */
            height: 122%; /* Taller to maintain coverage */
        }
    }

    /* Bottom-right background layer */
    &::after {
        content: '';
        position: absolute;
        top: -6%;
        left: -4%;
        width: 112%;
        height: 119%;
        background-color: rgba(0, 136, 255, 0.14);
        z-index: 0;

        @media (max-width: 768px) {
            top: -6%;  /* Convert px to larger % for mobile */
            right: -7%; /* Convert px to larger % for mobile */
            width: 115%;
            height: 122%;
        }
    }
`;

const BrainOverlayOne = styled.img`
  position: absolute;
  bottom: -22%;          /* 5% of ImageBox height */
  right: -20%;           /* 5% of ImageBox width */
  width: 25%;          /* 20% of ImageBox width */
  height: auto;
  z-index: 5;
  transform: rotate(11.076deg);
  
  @media (max-width: 768px) {
    bottom: -25%;
    right: -20%;
    width: 25%;
  }
`;

const BrainOverlayTwo = styled.img`
  position: absolute;
  bottom: -22%;          /* 5% of ImageBox height */
  top: -28%;           /* 5% of ImageBox width */
  left: -18%;          /* 20% of ImageBox width */
  width: 25%;
  height: auto;
  z-index: 5;
  transform: rotate(11.076deg) scaleX(-1);
  
  @media (max-width: 768px) {
    top: -30%;
    left: -20%;
    width: 25%;
  }
`;

const TextSection = styled.div`
    flex: 1;
    min-width: 500px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-family: 'Quantico', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #003159;

    p {
        margin: 0;
    }

    ul {
        margin: 5px;
    }

    @media (max-width: 768px) {
        min-width: unset;
        width: 100%;
        text-align: center;
        font-size: 18px;

        ul {
            margin: 5px 35px;
        }
    }
`;

const SecondSectionText = styled(TextSection)`
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
        order: 2; /* Display text second on mobile */
    }
`;

const FirstSectionImage = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: left;
    margin-left: 20px;
    text-align: left;

    @media (max-width: 768px) {
        margin: 0;
        justify-content: center;
    }
`;



const SecondSectionImage = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: right;
    margin-right: 20px;

    @media (max-width: 768px) {
        order: 1; /* Display image first on mobile */
        margin: 0;
        justify-content: center;
    }
`;

const Heading = styled.h2`
    font-size: 32px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Bullet = styled.li`
    margin-bottom: 0;

    @media (max-width: 768px) {
        text-align: left;
    }
`;

const JoinButton = styled.a`
    background-color: #007bff;
    justify-content: center;
    width: 181px;
    color: white;
    padding: 10px 5px;
    border-radius: 30px;
    text-decoration: none;
    display: flex;
    margin-top: 20px;

    @media (max-width: 768px) {
        align-self: center;
    }
`;

export default function JoinPage() {
    return (
        <>
            <Head>
                <title>Join Our Team | WATOLINK</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <PageWrapper>
                <MainContent>
                    <FadeSection>
                        <FirstSectionImage>
                            <ImageBox>
                                <Image
                                    src={TeamPhoto}
                                    alt="Team Photo"
                                    fill
                                />
                                <BrainOverlayOne
                                    src={Mascot.src}
                                    alt="Brain Overlay"
                                />
                            </ImageBox>
                        </FirstSectionImage>
                        <TextSection>
                            <Heading>Why Join?</Heading>
                            <p>
                                Watolink offers students an opportunity to develop applications involving
                                action-classification via EEG signal analysis. Some perks…
                            </p>
                            <ul>
                                <Bullet>Competitions like NeuroTechX</Bullet>
                                <Bullet>Flexible Work Weeks</Bullet>
                            </ul>
                        </TextSection>
                    </FadeSection>

                    <FadeSection>
                        <SecondSectionText>
                            <Heading>How To Join</Heading>
                            <p>
                                We’re not currently hiring for any roles, but we’re always excited to connect with potential team members. 
                                If you’re interested in future opportunities, feel free to reach out at <a href="mailto:business.watolink@gmail.com">business.watolink@gmail.com</a>.
                            </p>
                            <JoinButton href="#">Apply Now!</JoinButton>
                        </SecondSectionText>
                        <SecondSectionImage>
                            <ImageBox>
                                <Image 
                                    src={LabPhoto} 
                                    alt="Lab Photo" 
                                    fill
                                />
                                <BrainOverlayTwo
                                    src={Mascot.src}
                                    alt="Brain Overlay"
                                />
                            </ImageBox>
                        </SecondSectionImage>
                    </FadeSection>
                </MainContent>
            </PageWrapper>
        </>
    );
}