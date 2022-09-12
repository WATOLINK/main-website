import { theme } from '../theme'

const { lightpurple, lightblue, yellow, pink, green, greyblue, grey } =
    theme.colors

const GROUPS = [
    {
        title: 'Managing Directors',
        leads: Directors.filter((director) => director.lead),
        members: Directors.filter((director) => !director.lead),
        color: lightpurple,
    },
    {
        title: 'Artificial Intelligence',
        members: [],
        color: lightblue,
    },
    {
        title: 'Bio-Signal Research',
        members: [],
        color: yellow,
    },
    {
        title: 'Connected Software',
        members: [],
        color: pink,
    },
    {
        title: 'Systems Integration',
        members: [],
        color: green,
    },
    {
        title: 'Mechanical Design',
        members: [],
        color: greyblue,
    },
    {
        title: 'Faculty Advisors',
        members: [],
        color: grey,
    },
]

export default GROUPS
