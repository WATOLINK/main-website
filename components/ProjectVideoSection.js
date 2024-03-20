import styled from 'styled-components'
import Image from 'next/image'

const ProjectVideoTitle = styled.div`
    font: ${({ theme }) => theme.fonts.subheading};
    text-align: center;
    font-size: 1.5rem;
`

const ProjectVideoTitleContainer = styled.div`
    margin: 35px 0;
`

const ProjectVideoContainer = styled.iframe`
    margin: 0 auto;
    @media (max-width: 425px) {
        width: 75%;
    }
`

const ProjectVideoCaption = styled.div`
    @media (max-width: 425px) {
        padding: 0 50px;
    }
    text-align: center;
    margin: 50px 0;
    font: ${({ theme }) => theme.fonts.small20};
    padding: 0 150px;
`

export default function ProjectVideoSection() {
    return (
        <>
            <ProjectVideoTitleContainer>
                <ProjectVideoTitle>
                    NeuroTechX 2022 Neurotechnology Competition
                </ProjectVideoTitle>
                <ProjectVideoTitle>Winning Submission Video:</ProjectVideoTitle>
            </ProjectVideoTitleContainer>
            <ProjectVideoContainer
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dEvILV4_CIg?start=2159"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></ProjectVideoContainer>
            <ProjectVideoCaption>
                <strong>Grand Winner (1st Place):</strong> Watolink from the
                University of Waterloo. Their prize was $2,000 USD and 1 hour
                live consultation with Branch Out&apos;s Director of Research
                about product commercialization
            </ProjectVideoCaption>
            <Image
                alt="neruotechx icon"
                width={400}
                height={150}
                src={'/icons/NeuroTechX.svg'}
            />
        </>
    )
}
