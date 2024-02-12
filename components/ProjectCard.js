import styled from 'styled-components'
import Image from 'next/image'

const StyledCardDiv = styled.div`
    background-color: ${({ color }) => color};
    width: 100px;
    border-radius: 5px;
`

export default function ProjectCard({ color, icon, name }) {
    return (
        <StyledCardDiv color={color}>
            <Image alt={name} src={icon} width={400} height={400} />
        </StyledCardDiv>
    )
}
