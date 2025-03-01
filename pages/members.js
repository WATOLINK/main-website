import styled from 'styled-components'
import Member from '../components/Member'
import Lead from '../components/Lead'
import GROUPS from '../constants/members'
import SmallLogo from '../public/logos/SmallLogo.svg'
import Image from 'next/image'

const Title = styled.h1`
    font: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.blue};
    margin: 0;
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const GroupContainer = styled.div`
    margin: 30px 0px;
`

const Subtitle = styled.h1`
    font: ${({ theme }) => theme.fonts.bold24};
    text-align: center;
`

const MemberRow = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const LeadRow = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`
const SeparatorLine = styled.hr`
    margin: 10px auto;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    width: 90vw;
`
const Spacer = styled.br`
    height: 100px;
`
const BrainManagingDirectors = styled.div`
    position: absolute;
    width: 6.5%;
    height: 6.5%;
    top: 3.7%;
    right: 63.5%;
    transform: scaleX(-1);
`
const BrainBCIGaming1 = styled.div`
    position: absolute;
    width: 12%;
    height: 12%;
    top: 20.8%;
    right: 80%;
`
const BrainBCIGaming2 = styled.div`
    position: absolute;
    width: 16%;
    height: 16%;
    top: 28%;
    left: 70%;
`
const BrainWheelchair = styled.div`
    position: absolute;
    width: 27%;
    height: 27%;
    top: 46.8%;
    left: 56.2%;
`

const BrainAdvisors1 = styled.div`
    position: absolute;
    width: 16%;
    height: 16%;
    bottom: 1%;
    right: 72%;
`

const BrainAdvisors2 = styled.div`
    position: absolute;
    width: 16%;
    height: 16%;
    bottom: -5%;
    left: 68%;
`

export default function Members() {
    return (
        <PageContainer
        style={{textAlign: 'center', margin: 'auto'}}
        >
                <Title style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    PEOPLE OF
                    <div style={{padding: '0px 0px 0px 0px'}}><Image
                        alt="WATOLINK logo"
                        src={SmallLogo}
                        layout="fixed"
                        width={320}
                        height={120}
                        style={{paddingBottom: '11px'}}
                    /></div>
               </Title>

            {GROUPS.map((group) => (
                <div key={group.title}>
                <SeparatorLine></SeparatorLine>
                <GroupContainer>

                    {group.title === 'Faculty Advisors' && <Spacer />}
                    <Subtitle>{group.title}</Subtitle>
                    <LeadRow>
                        {group.leads?.map((lead) => (
                            <Lead
                                key={lead.name}
                                color={group.color}
                                {...lead}
                            />
                        ))}
                    </LeadRow>
                    {/*<Subtitle>Team Members</Subtitle>*/}
                    <br/>
                    <MemberRow>
                        {group.members?.map((member) => (
                            <Member
                                key={member.name}
                                color={group.color}
                                {...member}
                            />
                        ))}
                    </MemberRow>
                    <BrainManagingDirectors>
                        <Image
                            src={'/blue_blobs/first_blob.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="blob"
                        />     
                    </BrainManagingDirectors>
                    <BrainBCIGaming1>
                        <Image
                            src={'/blue_blobs/members_gaming_1.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="member gaming 1"
                        />   
                    </BrainBCIGaming1>
                    <BrainBCIGaming2>
                        <Image
                            src={'/blue_blobs/members_gaming_2.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="member gaming 2"
                        />   
                    </BrainBCIGaming2>
                    <BrainWheelchair>
                        <Image
                            src={'/blue_blobs/members_wheelchair_1.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="member wheelchair 1"
                        />   
                    </BrainWheelchair>
                    <BrainAdvisors1>
                        <Image
                            src={'/blue_blobs/members_advisors_1.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="member advisors 1"
                        />   
                    </BrainAdvisors1>
                    <BrainAdvisors2>
                        <Image
                            src={'/blue_blobs/members_advisors_2.png'}
                            layout="fill"
                            objectFit="contain"
                            alt="member advisors 1"
                        />   
                    </BrainAdvisors2>
                </GroupContainer>
                </div>
            ))}
        </PageContainer>
    )
}
