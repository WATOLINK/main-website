import OPERATIONS from './operations'
import WHEELCHAIR from './wheelchair'
import GAMING from './gaming'
import FACULTYADVISORS from './facultyadvisors'

import { theme } from '../../theme'

const { lightpurple, lightblue, yellow, pink, green, greyblue, grey } =
    theme.colors

const GROUPS = [
    {
        title: 'MANAGING DIRECTORS',
        leads: OPERATIONS.filter((operations) => operations.lead),
        members: OPERATIONS.filter((operations) => !operations.lead),
        color: grey,
    },
    {
        title: 'BCI GAMING',
        leads: GAMING.filter((gaming) => gaming.lead),
        members: GAMING.filter((gaming) => !gaming.lead),
        color: grey,
    },
    {
        title: 'BCI WHEELCHAIR',
        leads: WHEELCHAIR.filter((wheelchair) => wheelchair.lead),
        members: WHEELCHAIR.filter((wheelchair) => !wheelchair.lead),
        color: grey,
    },
    {
        title: 'FACULTY ADVISORS',
        members: FACULTYADVISORS,
        color: grey,
    },
]

export default GROUPS
