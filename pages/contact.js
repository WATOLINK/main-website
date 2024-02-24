import styled from 'styled-components';
import CONTACTS from '../constants/contactinfo/contactinfo';
import { FontIcons } from '../components/Common';

// Assuming you have a theme context or provider
const Card = styled.div`
    background-color: white;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: auto;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.primary || '#007bff'};
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
`;

const LineContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Text = styled.span`
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.text || '#333'};
`;

export default function ContactCard() {
    return (
        <Card>
            <Title>Get In Touch</Title>
            <br /><br />
            {CONTACTS.map((contact, index) => (
                <LineContainer key={index}>
                    <Text><strong>{contact.type}</strong></Text>
                    <Text>{contact.info}</Text>
                </LineContainer>
            ))}
            <br /><br />
            <FontIcons />
        </Card>
    );
}
