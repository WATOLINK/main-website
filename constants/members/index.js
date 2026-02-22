import DIRECTORS from './directors'
import OPERATIONS from './operations'
import WHEELCHAIR from './wheelchair'
import GAMING from './gaming'
import DRONE from './drone'
import TRANSCRIPTION from './transcription'
import MINDFLEX from './mindflex'
import ALUMNI from './alumni'
import FACULTYADVISORS from './facultyadvisors'

import { theme } from '../../theme'

const { lightpurple, lightblue, yellow, pink, green, greyblue, grey } =
    theme.colors

const GROUPS = [
    {
        title: 'DIRECTORS',
        leads: DIRECTORS,
        color: grey,
    },
    {
        title: 'OPERATIONS',
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
    /*
    {
        title: 'BCI WHEELCHAIR',
        leads: WHEELCHAIR.filter((wheelchair) => wheelchair.lead),
        members: WHEELCHAIR.filter((wheelchair) => !wheelchair.lead),
        color: grey,
    },
    */
    {
        title: 'MINDFLEX',
        leads: MINDFLEX.filter((mindflex) => mindflex.lead),
        members: MINDFLEX.filter((mindflex) => !mindflex.lead),
        color: grey,
    },
    {
        title: 'BRAIN BASED TRANSCRIPTION',
        leads: TRANSCRIPTION.filter((transcription) => transcription.lead),
        members: TRANSCRIPTION.filter((transcription) => !transcription.lead),
        color: grey,
    },
    {
        title: 'MIND CONTROLLED DRONE',
        leads: DRONE.filter((drone) => drone.lead),
        members: DRONE.filter((drone) => !drone.lead),
        color: grey,
    },
    {
        title: 'ALUMNI',
        members: ALUMNI,
        color: grey,
    },
    {
        title: 'FACULTY ADVISORS',
        members: FACULTYADVISORS,
        color: grey,
    },
]

export default GROUPS
