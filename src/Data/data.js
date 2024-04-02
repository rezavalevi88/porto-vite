import design from '../assets/IMG/design.svg';
import softskills from '../assets/IMG/frontend.svg';
import frontend from '../assets/IMG/softskills.svg';
import tools from '../assets/IMG/tools.svg';

import design1 from '../assets/IMG/mimosa.png'
import design2 from '../assets/IMG/membleh.png'
import design3 from '../assets/IMG/sambal.png'
import design4 from '../assets/IMG/sandi.png'
import design5 from '../assets/IMG/ig1.png'
import design6 from '../assets/IMG/ig2.png'
import design7 from '../assets/IMG/ig3.png'
import design8 from '../assets/IMG/ig4.png'
import design9 from '../assets/IMG/mp.png'
import design10 from '../assets/IMG/mockup-mp.png'
import design11 from '../assets/IMG/booth.png'
import design12 from '../assets/IMG/macro.png'

import designfe1 from '../assets/IMG/republik.png'

export const SKILLS = [
    {
        title: 'Graphic Design',
        icon: design,
        skills: [
            { skill: 'Branding', percentage: '75%' },
            // { skill: 'Social Media', percentage: '85%' },
            { skill: 'Video Editing', percentage: '70%' },
            { skill: 'Motion Graphic', percentage: '65%' }
        ],
    },
    {
        title: 'Frontend',
        icon: frontend,
        skills: [
            // { skill: 'HTML 5', percentage: '80%' },
            { skill: 'Responsive', percentage: '70%' },
            { skill: 'Javascript', percentage: '65%' },
            { skill: 'React JS', percentage: '60%' }
        ],
    },
    {
        title: 'Soft Skills',
        icon: softskills,
        skills: [
            // { skill: 'HTML5', percentage: '100%' },
            { skill: 'UI/UX', percentage: '0%' },
            { skill: 'Node JS', percentage: '0%' }
            // { skill: 'React', percentage: '60%' }
        ],
    },
    {
        title: 'Tools',
        icon: tools,
        skills: [
            { skill: 'Adobe Products', percentage: '85%' },
            // { skill: 'Visual Studio Code', percentage: '70%' },
            { skill: 'Git & GitHub', percentage: '65%' },
            { skill: 'Figma', percentage: '40%' }
        ],
    },
];

export const PORTFOLIO = [
    {
        job: [
            {
                icon: design1,
            },
            {
                icon: design2,
            },
            {
                icon: design3,
            },
            {
                icon: design4,
            },
            {
                icon: design5,
            },
            {
                icon: design6,
            },
            {
                icon: design7,
            },
            {
                icon: design8,
            },
            {
                icon: design9,
            },
            {
                icon: design10,
            },
            {
                icon: design11,
            },
            {
                icon: design12,
            }
        ]
    }
];

export const PORTFOLIOFE = [
    {
        job: [
            {
                link: 'rezavalevi88.github.io/republik-project/',
                icon: designfe1,
            }
        ]
    }
]

export const EXPERIENCE = [
    {
        title: 'Graphic Design at PT. Inovtek Sentra Global',
        date: 'November 2022 - October 2023',
        responsibilities: [
            "Handling designs for 6 different stores",
            "Creating advertising designs",
            "Product photography and editing",
            "Producing motion & graphics for social media"
        ],
    },
    {
        title: 'Graphic Design at Cut The Crab',
        date: 'October 2021 - April 2022',
        responsibilities: [
            "Creating print design for advertising",
            "Producing label for various seasoning",
            "Developing layouts for printing",
            "Designing social media graphic"
        ],
    },
    {
        title: 'Graphic Design at Rumah Printing',
        date: 'November 2019 - September 2022',
        responsibilities: [
            "Creating designs to meet diverse print client needs",
            "Producing mockups for chosen designs",
            "Engaging in marketing across various sectors of UMKM",
            "Designing social media graphic"
        ],
    },
    {
        title: 'Graphic Design at Mulya Printing',
        date: 'November 2017 - October 2019',
        responsibilities: [
            "Creating designs for various print client needs",
            "Producing mockups of selected designs",
            "Developing layouts for printing",
            "Scheduling target deadlines for client queues"
        ],
    },
]