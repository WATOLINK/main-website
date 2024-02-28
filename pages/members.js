import styled from 'styled-components'
import Member from '../components/Member'
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
`

const GroupContainer = styled.div`
    margin: 30px 0px;
`

const Subtitle = styled.h1`
    font: ${({ theme }) => theme.fonts.medium28};
    text-align: center;
`

const MemberRow = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const SeparatorLine = styled.hr`
    margin: 10px 10px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    width: 70vw;
`
const Spacer = styled.br`
    height: 100px;
`

// (just for me to see)
// type Member = {
//     name: String,
//     position: String,
//     icon: URL,
//     lead?: boolean,
// }

export default function Members() {
    return (
        <PageContainer>
                <Title style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>PEOPLE OF 
                    <Image
                        alt="WATOLINK logo"
                        src={SmallLogo}
                        layout="fixed"
                        width={320}
                        height={120}
                        style={{paddingBottom: '10px'}}
                    />
               </Title>

            {GROUPS.map((group) => (
                <div>
                <SeparatorLine></SeparatorLine>
                <GroupContainer key={group.title}>

                    {group.title === 'Faculty Advisors' && <Spacer />}
                    <Subtitle>{group.title}</Subtitle>
                    <MemberRow>
                        {group.leads?.map((lead) => (
                            <Member
                                key={lead.name}
                                color={group.color}
                                {...lead}
                            />
                        ))}
                    </MemberRow>
                    <MemberRow>
                        {group.members?.map((member) => (
                            <Member
                                key={member.name}
                                color={group.color}
                                {...member}
                            />
                        ))}
                    </MemberRow>
                </GroupContainer>
                </div>
            ))}
        </PageContainer>
    )
}
