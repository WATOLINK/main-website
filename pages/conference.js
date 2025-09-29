import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
`

const Header = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    
    @media (max-width: 768px) {
        padding: 0.75rem 1rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 480px) {
        padding: 0.5rem 0.75rem;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: ${({ theme }) => theme.fonts.heading45 || 'bold 2rem Arial'};
    color: ${({ theme }) => theme.colors.black || '#000000'};
    font-weight: bold;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.25rem;
        gap: 0.25rem;
    }
`

const LogoHighlight = styled.span`
    color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
`

const BrainIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.black || '#000000'};
    border-radius: 50%;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
        border-radius: 50%;
    }
`

const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
    
    @media (max-width: 768px) {
        gap: 1rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        gap: 0.75rem;
        font-size: 0.8rem;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black || '#000000'};
    font: ${({ theme }) => theme.fonts.description24 || '1.2rem Arial'};
    transition: color 0.3s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
    }
`

const JoinButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
    border: 2px solid ${({ theme }) => theme.colors.blue || '#3b82f6'};
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font: ${({ theme }) => theme.fonts.apply || '1rem Arial'};
    cursor: pointer;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
        color: white;
    }
`

const HeroSection = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 4rem 2rem;
    text-align: left;
    position: relative;
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.5rem 0.75rem;
    }
`

const Title = styled.h1`
    font: ${({ theme }) => theme.fonts.heading45 || 'bold 2.5rem Arial'};
    color: ${({ theme }) => theme.colors.black || '#000000'};
    margin-bottom: 2rem;
    max-width: 1000px;
    margin-left: 112px;
    margin-right: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    
    @media (max-width: 1200px) {
        margin-right: 200px;
    }
    
    @media (max-width: 900px) {
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 2rem;
        max-width: calc(100vw - 4rem);
    }
    
    @media (max-width: 768px) {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.75rem;
        max-width: calc(100vw - 2rem);
    }
    
    @media (max-width: 480px) {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        font-size: 1.5rem;
        max-width: calc(100vw - 1.5rem);
    }
`

const Description = styled.div`
    font: ${({ theme }) => theme.fonts.description24 || '1.2rem Arial'};
    color: ${({ theme }) => theme.colors.lightblue || '#60a5fa'};
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: 112px;
    margin-right: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    
    @media (max-width: 1200px) {
        margin-right: 200px;
    }
    
    @media (max-width: 900px) {
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 1rem;
        max-width: calc(100vw - 4rem);
    }
    
    @media (max-width: 768px) {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 0.95rem;
        max-width: calc(100vw - 2rem);
    }
    
    @media (max-width: 480px) {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        font-size: 0.9rem;
        max-width: calc(100vw - 1.5rem);
    }
`

const RegisterButton = styled.button`
    background-color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font: ${({ theme }) => theme.fonts.apply || '1rem Arial'};
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 auto 3rem;
    display: block;
    
    @media (max-width: 768px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.7rem 1.2rem;
        font-size: 0.8rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkblue || '#1e40af'};
        transform: translateY(-2px);
    }
`

const BrainCharacterContainer = styled.div`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    
    @media (max-width: 1200px) {
        right: 2%;
    }
    
    @media (max-width: 900px) {
        display: none;
    }
`

const BrainImage1 = styled.div`
    transform: rotate(12deg);
    left:
`

const BrainImage2 = styled.div`
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
    z-index: 1;
    
    @media (max-width: 900px) {
        display: none;
    }
`

const GooseFeet = styled.div`
    transform: rotate(13deg);
    opacity: 70%;
    margin-top: 200px;
`
const SeparationLine = styled.div`
    width: 100%;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.lightblue2 || '#e0f2fe'};
    margin: 2rem 0;
`

const Section = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 4rem 2rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    margin-bottom: 3rem;
    box-sizing: border-box;
    
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
        margin-bottom: 2rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.5rem 0.75rem;
        margin-bottom: 1.5rem;
    }
`

const SectionTitle = styled.h2`
    font: ${({ theme }) => theme.fonts.subheading32 || 'bold 2rem Arial'};
    color: ${({ theme }) => theme.colors.black || '#000000'};
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
`

const SectionDescription = styled.p`
    font: ${({ theme }) => theme.fonts.description24 || '1.2rem Arial'};
    color: ${({ theme }) => theme.colors.black || '#000000'};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        max-width: 100%;
        padding: 0 1rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0 0.5rem;
    }
`

const Highlight = styled.span`
    color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
    font-weight: bold;
`
const BlueBand = styled.section`
  width: 100%;
  max-width: 100vw;
  height: 500px;
  background: ${({ theme }) => theme.colors.lightblue || '#60a5fa'};
  position: relative;
  overflow: hidden;
  display: grid;                /* simplest centering */
  place-items: center;          /* centers both axes */
  text-align: center;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    height: 400px;
    padding: 2rem 1rem;
  }
  
  @media (max-width: 640px) {
    overflow-x: auto;
    overflow-y: hidden;
    place-items: flex-start;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    height: 350px;
    padding: 1.5rem 0.75rem;
  }
`


const BandInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 640px) {
    width: 100%;
    min-width: max-content;
  }
`

const BandTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.subheading32 || '700 2rem Arial'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { 
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding: 0 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`

const Card = styled.div`
  text-align: center;
  
  @media (max-width: 640px) {
    flex: 0 0 auto;
    min-width: 280px;
    scroll-snap-align: start;
  }
`

const CardBox = styled.div`
  background: #fff;
  border-radius: 12px;
  height: 227px;
  width: 358px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  border: 2px solid rgba(0,0,0,0.06);
  font: ${({ theme }) => theme.fonts.apply || '600 1rem Arial'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 200px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    height: 180px;
    max-width: 280px;
  }
`

const CardDesc = styled.p`
  margin-top: .9rem;
  font: ${({ theme }) => theme.fonts.description24 || '1.05rem Arial'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  opacity: 0.9;
`
const WhiteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`
const SpeakerSection = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 4rem 2rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.5rem 0.75rem;
    }
`

const SpeakerCard = styled.div`
  text-align: center;
  max-width: 220px;
  
  @media (max-width: 768px) {
    max-width: 200px;
  }
  
  @media (max-width: 480px) {
    max-width: 180px;
  }
`

const SpeakerImage = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.lightblue || '#60a5fa'};
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`

const SpeakerName = styled.h4`
  font: ${({ theme }) => theme.fonts.subheading32 || 'bold 1.3rem Arial'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const SpeakerRole = styled.p`
  font: ${({ theme }) => theme.fonts.description24 || '1rem Arial'};
  color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const SponsorImage = styled.p`
    width:150px;
    height:100px;
    
    @media (max-width: 768px) {
        width: 120px;
        height: 80px;
    }
    
    @media (max-width: 480px) {
        width: 100px;
        height: 70px;
    }
`

const SponsorSection = styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 4rem 2rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.5rem 0.75rem;
    }
`
const SponsorWhiteBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`
const SponsorButton = styled.button`
    background-color: ${({ theme }) => theme.colors.blue || '#3b82f6'};
    color: white;
    border: none;
    padding: 1rem 2rem;
    margin:3rem;
    border-radius: 30px;
    font: ${({ theme }) => theme.fonts.apply || '1rem Arial'};
    cursor: pointer;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        padding: 0.8rem 1.5rem;
        margin: 2rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.7rem 1.2rem;
        margin: 1.5rem;
        font-size: 0.8rem;
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.darkblue || '#1e40af'};
        transform: translateY(-2px);
    }
`


export default function ConferencePage() {
    return (
        <PageContainer>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Quantico:ital,wght@0,400;1,400&display=swap" rel="stylesheet"></link>
            
            {/* Header */}
           

            <SeparationLine />

            {/* Hero Section */}
            <HeroSection>
                <Title>WATO<LogoHighlight>LINK</LogoHighlight> Neurotechnology Engineering Conference 2025</Title>
                <Description>
                    September Xst, 2025 · 9 AM to 4 PM E7, University of Waterloo
                </Description>
                <a  href='https://university-of-waterloo.myshopify.com/products/watolink-neurotech-conference-2025' target="_blank" style={{ textDecoration: 'none' }}><RegisterButton>Register Now!</RegisterButton></a>

                
                <BrainCharacterContainer>
                    <BrainImage1>
                        <Image
                            alt={'brain_blob'}
                            src={'/blue_blobs/first_blob.png'}
                            width={121.07}
                            height={130.72}
                        />
                    </BrainImage1>
                    <GooseFeet>
                        <Image
                            alt={'goose_feet'}
                            src={'/main-page-images/short_goose_feet.png'}
                            width={217}
                            height={33}
                        />
                    </GooseFeet>
                </BrainCharacterContainer>
            </HeroSection>

            <SeparationLine />

            {/* Learn From Industry Professionals Section */}
            <Section>
                <BrainImage2>
                    <Image
                        alt={'brain_blob'}
                        src={'/blue_blobs/first_blob.png'}
                        width={113.64}
                        height={130.42}
                    />
                </BrainImage2>
                
                <SectionTitle>Learn From Industry Professionals</SectionTitle>
                <SectionDescription>
                    The conference will bring together <Highlight>industry leaders, researchers and practitioners</Highlight> to share insights, explore <Highlight>collaboration</Highlight> opportunities and drive the <Highlight>future</Highlight> of neurotechnology forward.
                </SectionDescription>
            </Section>



            <Section>
                <SectionTitle>Develop Your Network</SectionTitle>
                <SectionDescription>
                    The event will feature <Highlight>networking opportunities</Highlight> and a showcase of <Highlight>cutting-edge neurotechnologies</Highlight> from organizations all across Canada.
                </SectionDescription>
            </Section>

            <BandTitle>Featured Projects</BandTitle>
            <BlueBand>
                <BandInner>

                    <Cards>
                    <Card>
                        <CardBox>Content 1</CardBox>
                        <CardDesc>Description 1</CardDesc>
                    </Card>

                    <Card>
                        <CardBox>Content 2</CardBox>
                        <CardDesc>Description 2</CardDesc>
                    </Card>

                    <Card>
                        <CardBox>Content 3</CardBox>
                        <CardDesc>Description 3</CardDesc>
                    </Card>
                    </Cards>
                </BandInner>
            </BlueBand>
            <SpeakerSection>
                <SectionTitle>Our Speakers</SectionTitle>
                <WhiteBox>
                    <SpeakerCard>
                        <SpeakerImage>
                            {/* <Image src="/WhiteBox/mackenzie.png" alt="Mackenzie Snyder" width={180} height={180}/> */}
                        </SpeakerImage>
                        <SpeakerName>MACKENZIE <br/> SNYDER</SpeakerName>
                        <SpeakerRole>Operations lead at WATO.LINK</SpeakerRole>
                    </SpeakerCard>
                    <SpeakerCard>
                        <SpeakerImage>
                            {/* <Image src="/WhiteBox/mackenzie.png" alt="Mackenzie Snyder" width={180} height={180}/> */}
                        </SpeakerImage>
                        <SpeakerName>MACKENZIE <br/> SNYDER</SpeakerName>
                        <SpeakerRole>Operations lead at WATO.LINK</SpeakerRole>
                    </SpeakerCard>
                    <SpeakerCard>
                        <SpeakerImage>
                            {/* <Image src="/WhiteBox/mackenzie.png" alt="Mackenzie Snyder" width={180} height={180}/> */}
                        </SpeakerImage>
                        <SpeakerName>MACKENZIE <br/> SNYDER</SpeakerName>
                        <SpeakerRole>Operations lead at WATO.LINK</SpeakerRole>
                    </SpeakerCard>
                    <SpeakerCard>
                        <SpeakerImage>
                            {/* <Image src="/WhiteBox/mackenzie.png" alt="Mackenzie Snyder" width={180} height={180}/> */}
                        </SpeakerImage>
                        <SpeakerName>MACKENZIE <br/> SNYDER</SpeakerName>
                        <SpeakerRole>Operations lead at WATO.LINK</SpeakerRole>
                    </SpeakerCard>
                    {/* ...more SpeakerCard components */}
                </WhiteBox>
            </SpeakerSection>
            <SponsorSection>
                <SectionTitle>Our Sponsors</SectionTitle>
                    <SponsorWhiteBox>
                        <SponsorImage>
                        <Image
                            alt={'WEBL'}
                            src={'/sponsors/WEBL.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                        <SponsorImage>
                        <Image
                            alt={'UWWEEF'}
                            src={'/sponsors/UWWEEF.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                        <SponsorImage>
                        <Image
                            alt={'ENGSOC'}
                            src={'/sponsors/UWEngSoc.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                        <SponsorImage>
                        <Image
                            alt={'UWENG'}
                            src={'/sponsors/UWEng.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                        <SponsorImage>
                        <Image
                            alt={'NTX'}
                            src={'/sponsors/NTX.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                        <SponsorImage>
                        <Image
                            alt={'NRE'}
                            src={'/sponsors/NRE.svg'}
                            width={113.64}
                            height={130.42}
                        />
                        </SponsorImage>
                    </SponsorWhiteBox>
                    <a href='mailto:business.watolink@gmail.com' target="_blank">
                        <SponsorButton>Sponsor Us</SponsorButton>
                    </a>   
                    
            </SponsorSection>
        </PageContainer>
    )
}
