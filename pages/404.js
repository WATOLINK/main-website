import styled from 'styled-components'
import Image from 'next/image'
import BigGoose from '../public/logos/BigGoose.svg'
import Link from 'next/link'

const Container = styled.div`
    margin: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ErrorText = styled.p`
    font: ${({ theme }) => theme.fonts.medium28bold};
`

const ReturnLink = styled.a`
    color: ${({ theme }) => theme.colors.black};
    font: ${({ theme }) => theme.fonts.medium28bold};
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export default function ErrorPage() {
    return (
        <Container>
            <Image alt="WATOLINK Logo" src={BigGoose} layout="fixed" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ErrorText>Sorry, we couldn&apos;t find that page!</ErrorText>
                <Link href="/">
                    <ReturnLink>Return to Home</ReturnLink>
                </Link>
            </div>
        </Container>
    )
}
