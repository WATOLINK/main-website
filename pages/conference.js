import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500vh;
    overflow-y: auto;
    padding: clamp(1rem, 3vw, 2rem);
`

const SeparationLine = styled.div`
    width: min(100%, 1484px);
    height: 15px;
    background-color: ${({ theme }) => theme.colors.lightblue2};
    position: absolute;
    top: ${({ top }) => top || '0px'};
`

const TitleContainer = styled.div`
    width: min(90%, 801px);
    height: 122px;
    top: 240px;
    left: clamp(2rem, 8vw, 112px);
    position: absolute;
    padding: clamp(0.5rem, 2vw, 1rem);
`

const DescriptionContainer = styled.div`
    width: min(90%, 443px);
    height: 64px;
    top: 370px;
    left: clamp(2rem, 8vw, 112px);
    position: absolute;
    padding: clamp(0.5rem, 2vw, 1rem);
`

const SubtitleContainer = styled.div`
    width: min(90%, 824px);
    height: 40px;
    left: clamp(2rem, 20vw, 329px);
    position: absolute;
    top: ${({ top }) => top || '0px'};
    text-align: center;
    padding: clamp(0.5rem, 2vw, 1rem);
`

const SubDescriptionContainer = styled.div`
    width: min(90%, 947px);
    height: 130px;
    left: clamp(2rem, 18vw, 265px);
    position: absolute;
    top: ${({ top }) => top || '0px'};
    text-align: center;
    padding: clamp(1rem, 3vw, 2rem);
`

const Title = styled.h1`
    font: ${({ theme }) => theme.fonts.heading45};
    color: ${({ theme }) => theme.colors.black};
`

const Description = styled.body`
    font: ${({ theme }) => theme.fonts.description24};
    color: ${({ theme }) => theme.colors.blue};
`

const SubDescription = styled.body`
    font: ${({ theme }) => theme.fonts.description24};
    color: ${({ theme }) => theme.colors.black};
`

const Subtitle = styled.body`
    font: ${({ theme }) => theme.fonts.subheading32};
    color: ${({ theme }) => theme.colors.black};
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.blue}; 
`

const RegisterButton = styled.button`
    top: 485px;
    left: clamp(2rem, 38vw, 584px);     
    width: min(90%, 316px);
    height: 65px;
    border-radius: 30px;
    padding: clamp(6px, 1.5vw, 11px) clamp(6px, 2vw, 11px);
    gap: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.blue};
    position: absolute;
    cursor: pointer;
    font: ${({ theme }) => theme.fonts.apply};
    color: ${({ theme }) => theme.colors.white};
`

const BrainImage1 = styled.div`
    top: 240px;
    left: clamp(60vw, 78vw, 1156px);
    transform: rotate(11deg);
    position: absolute;
    padding: clamp(0.5rem, 1vw, 1rem);
`

const BrainImage2 = styled.div`
    top: 632px;
    left: clamp(1rem, 2vw, 29px);
    transform: scaleX(-1);
    position: absolute;
    padding: clamp(0.5rem, 1vw, 1rem);
`

const GooseFeet = styled.div`
    top: 370px;
    left: clamp(70vw, 84vw, 1248px);
    transform: rotate(13deg);
    opacity: 70%;
    position: absolute;
    padding: clamp(0.5rem, 1vw, 1rem);
`

export default function ConferencePage() {
    return (
        <PageContainer>
            <SeparationLine top="171px"></SeparationLine>

                <TitleContainer>
                    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Quantico:ital,wght@0,400;1,400&display=swap" rel="stylesheet"></link>
                    <Title>WATO<Highlight>LINK</Highlight> Neurotechnology Engineering Conference 2025</Title>
                </TitleContainer>
                    <DescriptionContainer>                    
                        <Description>September Xst, 2025 · 9 AM to 4 PM E7, University of Waterloo</Description>
                    </DescriptionContainer>
                <Link href="https://google.com" passHref>
                    <RegisterButton>Apply Now!</RegisterButton>
                </Link>

            <SeparationLine top="597px"></SeparationLine>

                <BrainImage1>
                    <Image
                        alt={'brain_blob'}
                        src={'/blue_blobs/first_blob.png'}
                        width={121.07}
                        height={130.72}
                    />
                </BrainImage1>

            <SubtitleContainer top="703px">
                <Subtitle>Learn From Industry Professionals</Subtitle>
            </SubtitleContainer>
                <SubDescriptionContainer top="759px">
                    <SubDescription>The conference will bring together <Highlight>industry leaders, researchers and practitioners</Highlight> to share insights, explore <Highlight>collaboration</Highlight> opportunities and drive the <Highlight>future</Highlight> of neurotechnology forward. </SubDescription>
                </SubDescriptionContainer>
            <SubtitleContainer top="949px">
                <Subtitle>Develop Your Network</Subtitle>
            </SubtitleContainer>
                <SubDescriptionContainer top="1004px">
                    <SubDescription>The event will feature <Highlight>networking opportunities</Highlight> and a showcase of <Highlight>cutting-edge neurotechnologies</Highlight> from organizations all across Canada. </SubDescription>
                </SubDescriptionContainer>

                <BrainImage2>
                    <Image
                        alt={'brain_blob'}
                        src={'/blue_blobs/first_blob.png'}
                        width={113.64}
                        height={130.42}
                    />
                </BrainImage2>

                <GooseFeet>
                    <Image
                        alt={'goose_feet'}
                        src={'/main-page-images/short_goose_feet.png'}
                        width={217}
                        height={33}
                    />
                </GooseFeet>

        </PageContainer>
    )
}