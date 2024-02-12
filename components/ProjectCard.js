import styled from 'styled-components'

const StyledCardDiv = styled.div`
    background-color: ${({ color }) => color};
    width: 100px;
    border-radius: 5px;
    outline: ${({theme}) => theme.colors.blue} solid;
    opacity: 0.5;
`

export default function ProjectCard({ color }) {
    return <StyledCardDiv color={color}></StyledCardDiv>
}
