import styled from 'styled-components'
import CONTACTS from '../constants/contactinfo/contactinfo'
import { FontIcons } from '../components/Common'
import BigGoose from '../public/logos/BigGoose.svg'
import Image from 'next/image'

const CenteredContainer = styled.div`
    transform: translate(0%, 50%);
    padding: 0px 100px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('logos/BigGoose.svg');
    background-position: top right;
    background-repeat: no-repeat;
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LineContainer = styled.div`
    padding-bottom: 10px;
    display: flex;
`

const Title = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font: ${({ theme }) => theme.fonts.heading};
    padding-bottom: 35px;
    display: flex;
`

const BoldBodyText = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font: ${({ theme }) => theme.fonts.medium24bold};
`

const BodyText = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font: ${({ theme }) => theme.fonts.medium24};
`

const Organizer = ({ type, info }) => {
    return (
        <LineContainer>
            <BoldBodyText>
                {type}
                &nbsp;
            </BoldBodyText>
            <BodyText>
                {info}
            </BodyText>
        </LineContainer>
    )
}

export default function Contact() {
    return (
        <CenteredContainer>
            <Container>
                <Title>
                    GET IN TOUCH:
                </Title>
                <BodyContainer>
                    {CONTACTS.map((contact) => (
                        <Organizer
                            key={contact.type}
                            type={contact.type}
                            info={contact.info}
                        />
                    ))}
                </BodyContainer>
                <FontIcons />
            </Container>
        </CenteredContainer>
    )
}
