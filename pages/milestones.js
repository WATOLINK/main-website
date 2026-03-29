import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
`

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font: 600 40px 'Orbitron', sans-serif;
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    margin-bottom: 0;
`

const BlueLine = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.lightblue};
    margin-bottom: 50px;
`

const TimelineContainer = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px 140px 20px;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 3px;
        height: calc(100% - 150px);
        background-color: #828282;
        top: 30px;
    }

    @media (max-width: 768px) {
        &::before {
            left: 30px;
            height: calc(100% - 100px);
        }
        padding-bottom: 80px;
    }
`

const TimelineItem = styled.div`
    display: flex;
    justify-content: ${({ position }) => position === 'left' ? 'flex-start' : 'flex-end'};
    padding: 30px 0;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 70px;
    }
`

const TimelineContent = styled.div`
    position: relative;
    width: 39%;
    padding: 40px 35px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 15px;
    ${({ position }) => position === 'left' ? 'margin-right: 300px;' : 'margin-left: 300px;'}

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 24px;
        height: 24px;
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.blue};
        ${({ position }) => position === 'left' ? `
            right: -14px;
            transform: translateY(-50%) rotate(45deg);
            border-left: none;
            border-bottom: none;
        ` : `
            left: -14px;
            transform: translateY(-50%) rotate(45deg);
            border-right: none;
            border-top: none;
        `}
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 20px;
        margin-right: 0;
        
        &::before {
            left: -15px;
            right: auto;
            transform: translateY(-50%) rotate(45deg);
            border-right: none;
            border-top: none;
            border-left: 3px solid ${({ theme }) => theme.colors.blue};
            border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
        }
    }
`

const TimelineDot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: 4px solid white;
    border-radius: 50%;
    top: 50%;
    margin-top: -12px;
    z-index: 1;

    @media (max-width: 768px) {
        left: 30px;
    }
`

const TimelineDate = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font: 600 18px 'Quantico', sans-serif;
    color: ${({ theme }) => theme.colors.grey};
    width: 150px;
    ${({ position }) => position === 'left' ? `
        right: -220px;
        text-align: left;
    ` : `
        left: -220px;
        text-align: right;
    `}

    @media (max-width: 768px) {
        position: relative;
        left: auto;
        right: auto;
        top: auto;
        transform: none;
        margin-bottom: 10px;
    }
`

const MilestoneTitle = styled.h3`
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font: 900 24px 'Orbitron', sans-serif;
    margin: 0 0 10px 0;
`

const MilestoneDescription = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
    font: 500 16px 'Quantico', sans-serif;
    margin: 0;
    line-height: 1.5;
`

const BlobTopRight = styled.div`
    position: absolute;
    top: 290px;
    right: 30px;
    width: 220px;
    height: 220px;
    z-index: 1;
    transform: rotate(40deg);
    
    @media (max-width: 768px) {
        right: 10px;
        width: 70px;
        height: 70px;
    }
`

const BlobBottomLeft = styled.div`
    position: absolute;
    bottom: -50px;
    left: 40px;
    width: 180px;
    height: 180px;
    z-index: 1;
    
    @media (max-width: 768px) {
        left: 10px;
        width: 70px;
        height: 70px;
    }
`

const MILESTONES = [
    {
        title: 'NeuroTechX Competition',
        description: 'Achieved the Grand Winner (1st Place) with a $2,000 USD prize',
        date: 'December 2022',
        position: 'left'
    },
    {
        title: 'Neurotech Conference',
        description: 'A full day of cutting-edge talks, networking, student showcases, and an industry panel.',
        date: 'October 2025',
        position: 'right'
    },
    {
        title: 'Neurotech Hackathon',
        description: 'More details coming soon!',
        date: 'Upcoming...',
        position: 'left'
    }
]

export default function Milestones() {
    return (
        <Container>
            <Head>
                <title>Our Milestones | WATOLINK</title>
                <meta name="description" content="WATOLINK team milestones and achievements" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            
            <BlobTopRight>
                <Image 
                    src="/blue_blobs/members_advisors_1.png" 
                    alt="Decorative blob"
                    width={250}
                    height={140}
                    style={{ objectFit: 'contain'}}
                />
            </BlobTopRight>
            
            <BlobBottomLeft>
                <Image 
                    src="/blue_blobs/first_blob.png" 
                    alt="Decorative blob"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain', transform: 'rotate(-10deg) scaleX(-1)' }}
                />
            </BlobBottomLeft>

            <Title>Our Milestones</Title>
            <BlueLine />
            
            <TimelineContainer>
                {MILESTONES.map((milestone, index) => (
                    <TimelineItem key={index} position={milestone.position}>
                        <TimelineDot />
                        <TimelineContent position={milestone.position}>
                            <TimelineDate position={milestone.position}>
                                {milestone.date}
                            </TimelineDate>
                            <MilestoneTitle>{milestone.title}</MilestoneTitle>
                            <MilestoneDescription>{milestone.description}</MilestoneDescription>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </Container>
    )
}
