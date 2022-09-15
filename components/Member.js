import styled from 'styled-components'
import DefaultProfileIcon from '../public/members/DefaultProfileIcon.svg'
import Image from 'next/image'

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 140px;
    background-image: url('/logos/Brain.png');
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
    background-position-x: -22px;
    background-position-y: -11px;
    background-color: ${({ color }) => color};
`

const Name = styled.p`
    margin: 0.3em;
    font: ${({ theme }) => theme.fonts.small20bold};
`

const Position = styled.p`
    margin: 0;
    font: ${({ theme }) => theme.fonts.small20};
`

export default function Member({ color, name, position, icon }) {
    return (
        <ProfileContainer>
            {/* {console.log(name, icon, color)} */}
            <IconContainer color={color}>
                <Image
                    alt={name}
                    src={icon || DefaultProfileIcon}
                    width={150}
                    height={150}
                    layout="fixed"
                />
            </IconContainer>
            <Name>{name}</Name>
            {position && <Position>{position}</Position>}
        </ProfileContainer>
    )
}
