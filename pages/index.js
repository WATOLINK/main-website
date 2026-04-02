import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import BigGoose from '../public/logos/BigGoose.svg'
import Name from '../public/logos/Name.svg'
import SmallName from '../public/logos/SmallName.svg'
import SPONSORS from '../constants/sponsors'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 0%;
`

const ProjectCardContainer1 = styled.div`
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        align-items: center;
    }
    @media (max-width: 425px) {
        width: 100%;
        margin: 0 12%;
        gap: 0%;
        align-items: center;
    }
    display: flex;
    gap: 5%;
    margin: 0% auto;
    width: 75%;
    max-width: 75%;
    justify-content: center;
    padding-bottom: 0%:
`

const InfoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        align-items: center; /* Center align the text */
        gap: 40px
    }
 `       

const InfoContainer1 = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 8%;
    padding-top: 0%;


    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        align-items: center; /* Center align the text */
    }
`

const Title = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.heading};
    background-color: ${({ theme }) => theme.colors.blue};
    opacity: 0.5;
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    outline: ${({ theme }) => theme.colors.blue};
    box-shadow: 0px 1px 6px black;
    margin-bottom: 0px;
`
const Title1 = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.heading};
    background-color: ${({ theme }) => theme.colors.blue};
    opacity: 0.5;
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    outline: ${({ theme }) => theme.colors.blue};
    box-shadow: 0px 1px 6px black;
    margin-bottom: 5%;
`
const ContentContainer = styled.div`
    margin: 30px 0px;
`
const ContentContainer1 = styled.div`
    margin: 0px 0px;
`

const HeroContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 7%;
`

const ImageWrap = styled.span`
    position: absolute;
    top: 100px;
    right: 200px;
`

const Heading = styled.div`
    font: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.accent};
    justify-content: center;
`

const Subheading = styled.div`
    font: ${({ theme }) => theme.fonts.subheading};
`

const Text = styled.div`
    font: ${({ theme }) => theme.fonts.small20};
    line-height: 2rem;
`

const InfoDiv = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 70px;
`

const BrainImageReverse = styled.div`
    position: absolute;
    width: 35%;
    height: 35%;
    bottom: 72%;
    transform: scaleX(-1);
    left: 37%;
`
const DuckFeet = styled.div`
    position: absolute;  
    opacity: 100%;
    top: 55%;
    transform-origin: center;
    width: 80%;
    height: 20%:
`

const LoopVector = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    right: 24%;
    bottom: 50%;
`
const BrainImageWheelchair = styled.div`
    position: absolute;
    width: 13%;
    height: 10%;
    bottom: 22%;
    left: 4%;
`

const BrainImageGaming = styled.div`
    position: absolute;
    width: 13%;
    height: 10%;
    bottom: 16.6%;
    left: 86.6%;
`

const GroupedContainer = styled.div`
    position: relative;
    display: flex;
    padding-bottom: 20%;
`

const Info = ({ heading, subheading, src, children }) => (
    <InfoDiv>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70px',
            }}
        >
            {src ? (
                <Image alt="Image" src={src} />
            ) : (
                <Heading>{heading}</Heading>
            )}
        </div>
        <Subheading>{subheading}</Subheading>
        <Text>{children}</Text>
    </InfoDiv>
)

const Divider = styled.div`
    width: 1px;
    height: 100%;
    border-left: 3px solid black;
    position: absolute;
    right: 50%; /* Center it horizontally */
    top: 50px; /* Add a vertical offset */

    @media (max-width: 768px) {
        border-left: none; /* Hide the line on smaller screens */
    }
`

const Divider1 = styled.div`
    width: 1px;
    height: 100%;
    border-left: 3px solid white;
    position: absolute;
    right: 50%; /* Center it horizontally */
    top: 50px; /* Add a vertical offset */

    @media (max-width: 768px) {
        border-left: none; /* Hide the line on smaller screens */
    }
`

const CaptionContainer = styled.div`
    text-align: center;
    padding: 0 50px;
`

const SponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`

const Sponsors = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
`
const ImageWrapper = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.primary || theme.colors.blue};
    border-radius: 8px; /* Add rounded corners */
    overflow: hidden; /* Ensures the image doesn't overflow */
    width: 70%; 
    aspect-ratio: 4 / 3; /* Maintain a consistent aspect ratio */
    margin: 10px; /* Space between images */
    position: relative; 
`;


export default function About() {
    return (
        <>
            <Head>
                <title>WATOLINK</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Container>
                <HeroContainer>
                    <Image alt="WATOLINK name logo" src={Name} layout="fixed" />
                    <ImageWrap>
                        <Image
                            alt="WATOLINK big logo"
                            src={BigGoose}
                            layout="fixed"
                        />
                    </ImageWrap>
                </HeroContainer>
                <GroupedContainer>
                    <DuckFeet>
                        <Image
                            alt={'duck_feet'}
                            src={'/main-page-images/long_duck_feet_trail.png'}
                            width={1020}
                            height={50}
                        />
                    </DuckFeet>
                    <BrainImageReverse>
                        <Image
                            alt={'brain_blob'}
                            src={'/blue_blobs/first_blob.png'}
                            layout="fill"
                            objectFit="contain"
                        />
                    </BrainImageReverse>
                    <LoopVector>
                        <Image
                            src={'/main-page-images/main_page_vector.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="squiggle"
                        />
                        </LoopVector>
                </GroupedContainer>
                <Title>Who We Are</Title>
                <ContentContainer>
                    <Container1>
                        <InfoContainer>
                            <Info heading="20+" subheading="Members">
                                Future projects may involve developing our own
                                sensor technology and BCI hardware. The efforts of
                                this team could eventually go towards graduate
                                research.
                            </Info>
                            <Divider />
                            <Info src={SmallName} subheading="Future">
                                Scaling towards longer term projects involving
                                speech rendering to make telepathy and brain
                                controlled applications involving audio generation
                                and mind-to-AI communication commercially viable.
                            </Info>
                        </InfoContainer>
                    </Container1>
                </ContentContainer>
                <ContentContainer>
                    <CaptionContainer>
                        <Text>
                            WATOLINK offers students an opportunity to develop
                            applications involving action-classification via EEG
                            signal analysis and inference. Our team won the NeuroTechX Competition in 2022
                            and currently has two sub-team projects on the go - a BCI Wheelchair project 
                            and a BCI Gaming project. 
                        </Text>
                    </CaptionContainer>
                </ContentContainer>
                <ContentContainer>
                    <SponsorContainer>
                        <Heading>OUR PARTNERS</Heading>
                        <Sponsors>
                            {SPONSORS.map((sponsor) => (
                                <Image
                                    key={sponsor.name}
                                    alt={sponsor.name}
                                    src={sponsor.src}
                                />
                            ))}
                        </Sponsors>
                    </SponsorContainer>
                </ContentContainer>
                <Title1>What We&apos;ve Been Doing</Title1>
                <ProjectCardContainer1>
                    <ImageWrapper>
                        <Image
                            alt="wheelchair_team" 
                            src="/main-page-images/IMG_7995.png"
                            width={500}
                            height={400}
                        />
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image
                            alt="gaming_team"
                            src="/main-page-images/IMG_1446.png"
                            width={500}
                            height={400}
                        />
                    </ImageWrapper>
                </ProjectCardContainer1>
                <ContentContainer1>
                    <Container1>
                        <InfoContainer1>
                            <Info subheading="BCI Wheelchair">
                                The team focuses on developing innovative solutions for wheelchair 
                                control using EEG-based brain signals, aiming to empower individuals 
                                with mobility impairments.
                            </Info>
                            <Divider1 />
                            <Info subheading="BCI Gaming">
                                The team focuses on utilizing EEG-based brain signals to control 
                                the movements of a character in a team-developed virtual game, creating 
                                an innovative and immersive gaming experience driven entirely 
                                by neural activity.
                            </Info>
                        </InfoContainer1>
                    </Container1>
                </ContentContainer1>
                <BrainImageWheelchair>
                    <Image
                        src={'/main-page-images/Main_page_wheelchair_brain.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="wheelchair_brain"
                    />        
                </BrainImageWheelchair>
                <BrainImageGaming>
                    <Image
                        src={'/main-page-images/main_page_gaming_brain.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="gaming brain"
                    />    
                </BrainImageGaming>
            </Container>
        </>
    );
}