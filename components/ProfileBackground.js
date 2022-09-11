import styled from 'styled-components'

const StyledProfileDiv = styled.div`
    background-color: ${({ color }) => color};
    width: 100px;
    border-radius: 5px;
`

export default function ProfileBackground({ color }) {
    return <StyledProfileDiv color={color}></StyledProfileDiv>
}
