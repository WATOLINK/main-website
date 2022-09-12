import styled from 'styled-components'
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
                <GroupContainer key={group.title}>{group.title}</GroupContainer>
            ))}
        </PageContainer>
    )
}
