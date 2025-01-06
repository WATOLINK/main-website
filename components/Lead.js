import styled from 'styled-components'
import DefaultProfileIcon from '../public/members/DefaultProfileIcon.svg'
import Image from 'next/image'

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 400px;
    margin: 0px 20px 40px 20px;
    border-radius: 0px 0px 200px 200px;
    overflow: hidden; 
    background-color: #007AFF;
    color: 007AFF; 
    position: relative;
`;

const ProfileImageContainer = styled.div`
    position: absolute;
    transform: translate(-50%, 0%);
    border-radius: 30%;
    overflow: hidden;
    height: 225px;
    width: 225px;
    left: 50%;
    bottom: 0;
`;

const ProfileBanner = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    padding: 20px;
    box-sizing: border-box;
`;

const Name = styled.h2`
    margin: 20px 0px 0px 0px;
    font: ${({ theme }) => theme.fonts.lead1}; 
    text-align: center;
`;

const Position = styled.h3`
    margin: 0 0 0 0;
    font: ${({ theme }) => theme.fonts.lead2}; 
    text-align: center;
    position: absolute;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
`;

const Program = styled.h3`
    font: ${({ theme }) => theme.fonts.lead3}; 
    text-align: center;
`;

export default function Lead({ color, name, program, position, icon }) {
    return (
        <ProfileContainer style={{ backgroundColor: 'rgba(0, 136, 255, 0.5)' }}>
            <ProfileBanner>
                <Name>{name}</Name>
                <Program>{program || 'Engineering'}</Program>
                <Position>{position}</Position>
            </ProfileBanner>
            <ProfileImageContainer>
                <Image
                    alt={name}
                    src={icon || DefaultProfileIcon}
                    width={'100px'} // Adjust the size to fit the design
                    height={'100px'} // Adjust the size to fit the design
                    layout="responsive"
                />
            </ProfileImageContainer>
        </ProfileContainer>
    );
}
