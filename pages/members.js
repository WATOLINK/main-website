import styled from 'styled-components'
import Member from '../components/Member'
import {
    GROUPS,
    DIRECTORS,
    // AI, BSR, CONSOF, SIDE, MECHDESIGN, FACULTYADVISORS
} from '../constants/members'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GroupContainer = styled.div`
    margin: 40px 0px;
`

const Subtitle = styled.h1`
    font: ${({ theme }) => theme.fonts.medium28};
    text-align: center;
`

const MemberRow = styled.div`
    display: flex;
    justify-content: center;
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
            {GROUPS.map((group) => (
                <GroupContainer key={group.title}>
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
            ))}
        </PageContainer>
    )
}
