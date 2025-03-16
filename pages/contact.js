import styled from 'styled-components';
import CONTACTS from '../constants/contactinfo/contactinfo';
import { FontIcons } from '../components/Common';
import Image from 'next/image'
import BigGoose from '../public/logos/BigGoose.svg'

// Assuming you have a theme context or provider
const Card = styled.div`
    background-color: white;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 150px;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding-bottom: 13%;
    padding-left: 10%;
    padding-top: 10%;
`;

const Title = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.heading};
    font-size: 55px;
    display: flex;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 45.826px; /* Decrease font size for medium screens */
    }

    @media (max-width: 480px) {
        font-size: 36.663px; /* Further decrease font size for small screens */
    }
`
const LineContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    font-size: 24px; /* Default font size for larger screens */

    @media (max-width: 768px) {
        font-size: 20px; /* Decrease font size for medium screens */
    }

    @media (max-width: 480px) {
        font-size: 16px; /* Further decrease font size for small screens */
    }
`;

const Text = styled.span`
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.text || '#333'};
`;

const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: flex-start; /* Aligns icons to the left */
    width: 100%; /* Ensures it spans the full width of the Card */
`;

const HeroContainer = styled.div`
    width: 20%;
    height: 20%;
    top: 205px;
    left: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const ImageWrap = styled.span`
    position: absolute;
`

export default function ContactCard() {
    return (
        <Card>
            <HeroContainer>
                <ImageWrap>
                    <Image
                        alt="WATOLINK big logo"
                        src={BigGoose}
                        layout="fixed"
                    />
                </ImageWrap>
            </HeroContainer>
            <Title>Get In Touch</Title>
            <br /><br />
            {CONTACTS.map((contact, index) => (
                <LineContainer key={index}>
                    <Text><strong>{contact.type}&nbsp;</strong></Text>
                    <Text>{contact.info}</Text>
                </LineContainer>
            ))}
            <br />
            <SocialMediaIcons>
                <FontIcons />
            </SocialMediaIcons>
        </Card>
    );
}
