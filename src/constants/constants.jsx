
import { BookText, BracesIcon, BrickWall, Briefcase, BriefcaseBusinessIcon, FolderArchive, FolderKanban, LayoutDashboard, LayoutDashboardIcon, LucideSeparatorVertical } from "lucide-react";


const F = {
    NAVLINKS: [
        {
            icon: <LayoutDashboard/>,
            text: "Overview",
            link: "/dash"
        },

        {
            icon: <BookText/>,
            text: "About",
            link: "/dash/about"
        },

        {
            icon: <FolderKanban/>,
            text: "Skills",
            link: "/dash/skills"
        },

        {
            icon: <FolderArchive/>,
            text: "Experience",
            link: "/dash/experience"

        },

        {
            icon: <BracesIcon/>,
            text: "Projects",
            link: "/dash/projects"

        },

        {
            icon: <Briefcase/>,
            text: "Acheivement",
            link: "/dash/acheive"
        },

        {
            icon: <BrickWall/>,
            text: "Social Media",
            link: "/dash/socialmedia"
        }
    ],

   NAV: [
    {
        name: "Home",
        path:"/"
    },
    {
        name: "Dashboard",
        path:"/dash"
    },
    {
        name: "Preview",
        path:"/prev"
    },
    {
        name: "Sign Up",
        path:"/sign"
    },
    {
        name: "Sign In",
        path:"/sig"
    },

   ]


}

export default F