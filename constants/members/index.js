import DIRECTORS from './directors'
import AI from './ai'
import BSR from './bsr'
import CONSOF from './consof'
import SIDE from './side'
import MECHDESIGN from './mechdesign'
import FACULTYADVISORS from './facultyadvisors'

import { theme } from '../../theme'

const { lightpurple, lightblue, yellow, pink, green, greyblue, grey } =
    theme.colors

const GROUPS = [
    {
        title: 'Managing Directors',
        members: DIRECTORS,
        color: lightpurple,
    },
    {
        title: 'Artificial Intelligence',
        leads: AI.filter((ai) => ai.lead),
        members: AI.filter((ai) => !ai.lead),
        color: lightblue,
    },
    {
        title: 'Bio-Signal Research',
        leads: BSR.filter((bsr) => bsr.lead),
        members: BSR.filter((bsr) => !bsr.lead),
        color: yellow,
    },
    {
        title: 'Connected Software',
        leads: CONSOF.filter((consof) => consof.lead),
        members: CONSOF.filter((consof) => !consof.lead),
        color: pink,
    },
    {
        title: 'Systems Integration',
        leads: SIDE.filter((side) => side.lead),
        members: SIDE.filter((side) => !side.lead),
        color: green,
    },
    {
        title: 'Mechanical Design',
        leads: MECHDESIGN.filter((mech) => mech.lead),
        members: MECHDESIGN.filter((mech) => !mech.lead),
        color: greyblue,
    },
    {
        title: 'Faculty Advisors',
        members: FACULTYADVISORS,
        color: grey,
    },
]

export default GROUPS
