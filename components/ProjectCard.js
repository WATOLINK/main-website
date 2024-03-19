import styled from 'styled-components'
import Image from 'next/image'

const StyledCardDiv = styled.div`
    width: 80%;
    border-radius: 30px;
    outline: rgb(0, 136, 254, 0.2) solid 4px;
    box-shadow: 0px 1px 10px ${({ theme }) => theme.colors.blue};
    padding: 30px 70px;
    padding-bottom: 50px;
`

const ImageContainerLogo = styled.div`
    width: fit;
    margin: 0 auto;
`

const ProjectCardTitle = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.heading};
    text-align: center;
    margin: 20px 0;
    font-size: 2em;
`

const ProjectCardDescription = styled.div`
    font: ${({ theme }) => theme.fonts.small20bold};
    font-size: 1.1em;
`

export default function ProjectCard({ project }) {
    return (
        <StyledCardDiv key={project.name} color={'white'}>
            <ImageContainerLogo>
                <Image
                    alt={project.name}
                    src={project.icon}
                    width={500}
                    height={500}
                />
            </ImageContainerLogo>
            <ProjectCardTitle>{project.name}</ProjectCardTitle>
            <ProjectCardDescription>
                {project.description}
            </ProjectCardDescription>
        </StyledCardDiv>
    )
}
