import { ArchiveIcon, ArchiveRestore, Award, Badge, BadgeCheck, BadgeIcon, Book, BookA, Briefcase, DivideSquareIcon, ExpandIcon, GraduationCap, HeartHandshake, ProjectorIcon, School, Settings, SkipForward, Volume1Icon } from "lucide-react"

import award from "../images/award.jpg"




const F = {
    NAVLINKS: [
        {

            text: "UserProfile",
            link: "/dash"
        },

        {

            text: "About",
            link: "/dash/about"
        },

        {

            text: "Skills",
            link: "/dash/skills"
        },

        {

            text: "Experience",
            link: "/dash/experience"

        },

        {

            text: "Projects",
            link: "/dash/projects"

        },

        {

            text: "Acheivement",
            link: "/dash/acheive"
        },

        {

            text: "Social Media",
            link: "/dash/social"
        }


    ],


    SKILLS: [

        {
            title: "Programming Language",
            name: "JavaScript (ES2015+), TypeScript,HTML,CSS,SASS",
            levelofProficiency: "Advance"
        },
        {
            title: "Libraries & FRameworks",
            name: "React, Next.js, Gatsby, Eleventy, Node.js,React,Tailwind CSS, Styled Componenrs",

            levelofProficiency: "Intermediate"
        },
        {

            title: "Tools & Platforms",
            name: "Git, GitHub, Netlify, Vercel, Heroku,WordPress,Algolia, Firebase",

            levelofProficiency: "Advance"
        },
        {

            title: "Tools & Platforms",
            name: "Git, GitHub, Netlify, Vercel, Heroku,WordPress,Algolia, Firebase",

            levelofProficiency: "Advance"
        },
        
        {
            title: "Libraries & FRameworks",
            name: "React, Next.js, Gatsby, Eleventy, Node.js,React,Tailwind CSS, Styled Componenrs",

            levelofProficiency: "Intermediate"
        },

        {

            title: "Tools & Platforms",
            name: "Git, GitHub, Netlify, Vercel, Heroku,WordPress,Algolia, Firebase",

            levelofProficiency: "Advance"
        },
        
       
    ],

    PROJECTS: [
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },
        {
            title: "Build a Spotify Connected App",
            discription: "Video course that teaches how to build a web App with Spotify web API.Topics covered include REST APIs, user outh flows,Node,Express,React,Styled Components and more",
            year: "June 2023 to September 2023",
            institution: "Spotify"
        },


    ],

    EXPERIENCES: [

        {
            Companyname: "Google",
            role: "Lead Engineer",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2020 to March 2022",
            location: "Texas, USA"
        },
        {
            Companyname: "Tesla",
            role: "Frontend Engineer",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2022 to March 2023",
            location: "Accra, Ghana"
        },
        {
            Companyname: "Apple",
            role: "Software Engineer",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2020 to March 2022",
            location: "Texas, USA"
        },
        {
            Companyname: "Microsoft",
            role: "Creative Technologist",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2020 to March 2022",
            location: "Texas, USA"
        },
        {

            Companyname: "Youtube",
            role: "Lead Engineer",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2020 to March 2022",
            location: "Texas, USA"
        },
        {
            Companyname: "Amazon",
            role: "Lead Engineer",
            responsibilty: "Build and style ship high-quality websites, designs systems,mobile apps and cross platform digital experiences for a diverse array of clients using technologies such as JavaScript,TypeScript,React,CSS and More",
            date: "September 2020 to March 2022",
            location: "Texas, USA"
        },


    ],


    EDUCATION: [
        {
            schoolName: "Brock University",
            program: "Msc.Computer Science",
            qualification: "Masters Degree",
            grade: "First Class",
            location: "Canada",
            startDate: " Start Date: July 2014",
            endDate: "End Date: July 2018"


        },
        {
            schoolName: "University of Ghana",
            program: "BSC.Computer Science",
            qualification: "Bachelor Degree",
            grade: "First Class",
            location: "Ghana",
            startDate: " Start Date: July 2014",
            endDate: "End Date: July 2018"


        },
        {
            schoolName: "Ashesi Univeristy",
            program: "Diploma in Software Dvelopment",
            qualification: "Diploma",
            grade: "Pass",
            location: "Canada",
            startDate: " Start Date: July 2014",
            endDate: "End Date: July 2018"


        }


    ],

    VOLUNTEERING: [
        {
            projectName: "Hackathons",
            organization: "Tech Africa",
            role: "Software Engineer",
            description: "Participate in hackathons focused on social good. Websites like Devpost and Hackathons for Good list events where you can collaborate with others to create tech solutions for various causes.",
            startDate: " Start Date: July 2014",
            endDate: "End Date: July 2018"
        },

        {
            projectName: "Technovation",
            organization: "Tech Africa",
            role: "Software Engineer",
            description: "Participate in hackathons focused on social good. Websites like Devpost and Hackathons for Good list events where you can collaborate with others to create tech solutions for various causes.",
            startDate: " Start Date: July 2014",

            endDate: "End Date: July 2018"
        },

        {
            projectName: "Code for America",
            organization: "Tech Africa",
            role: "Software Engineer",
            description: "Participate in hackathons focused on social good. Websites like Devpost and Hackathons for Good list events where you can collaborate with others to create tech solutions for various causes.",
            startDate: " Start Date: July 2014",
            endDate: "End Date: July 2018"
        }

    ],

    ACHEIVEMENTS: [
        {
            award: "Best UI/UX Design",
            nameOfInstitution: "Amalitech",
            description: "Awarded for exceptional user interface and user experience design projects or features that led to winning the award,focusing on design principles and visual aesthetics. ",
            image: award 
        },

        {
            award: "Employee of the Year",
            nameOfInstitution: "Google",
            description: "Awarded for exceptional user interface and user experience design projects or features that led to winning the award,focusing on design principles and visual aesthetics. ",
            image: award 
        },

        {
            award: "Best UI/UX Design",
            nameOfInstitution: "Amalitech",
            description: "Awarded for exceptional user interface and user experience design projects or features that led to winning the award,focusing on design principles and visual aesthetics. ",
            image: award 
        },

        {
            award: "Best Frontend Design",
            nameOfInstitution: "Pinterest",
            description: "Awarded for exceptional user interface and user experience design projects or features that led to winning the award,focusing on design principles and visual aesthetics. ",
            image: award 
        }

    ],

    OVERVIEW: [

        {
            title: "Skills",
            total : "22",
            icon: <Book/>
        },
        {
            title: "Projects",
            total : "6",
            icon: <ProjectorIcon/>
        },
        {
            title: "Experiences",
            total : "10",
            icon: <Briefcase/>
        },
        {
            title: "Acheivements",
            total : "15",
            icon: <Award/>
        },
        {
            title: "Education",
            total : "6",
            icon: <GraduationCap/>
        },
        {
            title: "Volunteering",
            total : "10",
            icon: <HeartHandshake/>
        },

    ]
}

export default F