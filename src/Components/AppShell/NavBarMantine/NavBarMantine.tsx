import React from "react";
import {Navbar, Button, ScrollArea, createStyles } from "@mantine/core";
import UserFooter from "./UserFooter/UserFooter";
import ButtonsForNav from "./ButtonsForNav.tsx/ButtonsForNav";
import {Clubs, Friends, Home, Icon as TablerIcon, School, Subtask} from 'tabler-icons-react';

import {
    Notes,
    CalendarStats,
    Gauge,
    PresentationAnalytics,
    FileAnalytics,
    Adjustments,
    Lock,
} from 'tabler-icons-react';
import {LinksGroup} from "./NavbarLinksGroup/NavbarLinksGroup";

const mockdata = [
    { label: 'Home', icon: Home },
    {
        label: 'Universities',
        icon: School,
        links: [
            { label: 'My University', link: '/' },
            { label: 'All Universities', link: '/' },
            { label: 'University Announcement', link: '/' },
            { label: "Join University", link: '/' },
        ],
    },
    {
        label: 'Clubs',
        icon: Clubs,
        links: [
            { label: 'Joined', link: '/' },
            { label: 'Join Club', link: '/' },
            { label: 'Browse Clubs', link: '/' },
        ],
    },
    {
        label: 'Task',
        icon: Subtask,
        links: [
            { label: 'Current Task', link: '/' },
            { label: 'Upcoming Task', link: '/' },
            { label: 'Releases Task', link: '/' },
            { label: 'Task History', link: '/' },
        ],
    },
    { label: 'Friends', icon: Friends },
    { label: 'Achievement', icon: PresentationAnalytics },
    {
        label: 'Settings',
        icon: Adjustments,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
}));


function NavBarMantine(props: any) {
    const { classes } = useStyles();
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <Navbar
             hiddenBreakpoint={props.navbarBreakPoint} hidden={!props.opened}
            width={{sm: 250, md: 275, lg: 300, base: 240}}
            style={{background: "#ffffff"}}>
            <Navbar.Section grow component={ScrollArea} >{
                <div className={classes.linksInner}>{links}</div>
            }
            </Navbar.Section>
            <Navbar.Section>{<UserFooter theme={props.theme}/>}</Navbar.Section>

        </Navbar>
    );
}

export default NavBarMantine;