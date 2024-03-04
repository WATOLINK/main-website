import OPERATIONS from './operations'
import WHEELCHAIR from './wheelchair'
import GAMING from './gaming'
import FACULTYADVISORS from './facultyadvisors'

import { theme } from '../../theme'

const { lightpurple, lightblue, yellow, pink, green, greyblue, grey } =
    theme.colors

const GROUPS = [
    {
        title: 'Operational Team',
        leads: OPERATIONS.filter((operations) => operations.lead),
        members: OPERATIONS.filter((operations) => !operations.lead),
        color: grey,
    },
    {
        title: 'BCI Gaming Team',
        leads: GAMING.filter((gaming) => gaming.lead),
        members: GAMING.filter((gaming) => !gaming.lead),
        color: grey,
    },
    {
        title: 'BCI Wheelchair Team',
        leads: WHEELCHAIR.filter((wheelchair) => wheelchair.lead),
        members: WHEELCHAIR.filter((wheelchair) => !wheelchair.lead),
        color: grey,
    },
    {
        title: 'Faculty Advisors',
        members: FACULTYADVISORS,
        color: grey,
    },
]

export default GROUPS
