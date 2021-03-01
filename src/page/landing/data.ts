import { svgStats,svgLearn,svgDashboard,svgComment } from './svgData';


export const heroText: String = "Ultimate preperation guide for your upcoming exam"
export const btnText: String = "Get started"

export const Questions = [
    {
        id: 0,
        question: "Find where you stand",
        answer: [
            {
                id: 0,
                answerText: "80 percentile",
                isTrue: false,
            },
            {
                id: 1,
                answerText: "90 percentile",
                isTrue: false,
            },
            {
                id: 2,
                answerText: "70 percentile",
                isTrue: false,
            },
            {
                id: 3,
                answerText: "99 percentile",
                isTrue: true,
            }]
    },
    {
        id: 1,
        question: "Learn your strengths and weaknesses",
        answer: [
            {
                id: 0,
                answerText: "Memory Based",
                isTrue: false,
            },
            {
                id: 1,
                answerText: "Past Questions",
                isTrue: false,
            },
            {
                id: 2,
                answerText: "Pathsala Question sets",
                isTrue: true,
            },
            {
                id: 3,
                answerText: "Maths based",
                isTrue: false,
            }]
    },
    {
        id: 2,
        question: "Save $$$",
        answer: [
            {
                id: 0,
                answerText: "$15 per month",
                isTrue: false,
            },
            {
                id: 1,
                answerText: "$150 yearly",
                isTrue: false,
            },
            {
                id: 2,
                answerText: "Free",
                isTrue: true,
            },
            {
                id: 3,
                answerText: "30 day trial",
                isTrue: false,
            }]
    },
    {
        id: 3,
        question: "Monitor your progress",
        answer: [
            {
                id: 0,
                answerText: "Daily Tasks",
                isTrue: true,
            },
            {
                id: 1,
                answerText: "Personalized Challenges",
                isTrue: false,
            },
            {
                id: 2,
                answerText: "Advanced Charts",
                isTrue: false,
            },
            {
                id: 3,
                answerText: "Personalized Learning Path",
                isTrue: false,
            }]
    }
]

export const FeaturesData = [
    {
        id: 0,
        title: "Dashboard",
        svg: svgDashboard,
        description:"A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
    },
    {
        id: 1,
        title: "Comment",
        svg: svgComment,
        description:"A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
    },
    {
        id: 2,
        title: "Personalized Learning Path",
        svg: svgStats,
        description:"A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
    },
    {
        id: 3,
        title: "Statistics",
        svg: svgStats,
        description:"A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
    }

]