import React, {useState} from 'react';

import {
    AppShell, MantineNumberSize,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import HeaderMantine from "./HeaderMantine/HeaderMantine";
import Orgs from "../../Pages/Org/Org/Orgs";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import Tasks from "../../Pages/Tasks/Tasks";
import Universities from "../../Pages/University/Universities/Universities";
import {Profile} from "../../SupaBase/SupabseUni";
import Org from "../../Pages/Org/Org";
import CreateNewOrg from "../../Pages/Org/Org/CreateNewOrg/CreateNewOrg";

export default function AppShellMantine(props:any) {
    const theme = useMantineTheme();
    theme.colorScheme = "light";
    theme.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
    const navbarBreakPoint = "sm" as MantineNumberSize;
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            className="App"
            padding={0}
            styles={{main: {background: "#ffffff"}}}
            navbarOffsetBreakpoint={navbarBreakPoint}
            fixed navbar={
            <NavBarMantine opened={opened} navbarBreakPoint={navbarBreakPoint} theme={theme} text={"Lazy to dev..."}/>
        }
            header={<HeaderMantine theme={theme} text={"You and I"} opened={opened} setOpened={setOpened}
                                   navbarBreakPoint={navbarBreakPoint} height={48}/>}
        >
            <Routes>
                <Route path="/" element={<Home profile={props.profile}/>} />
                <Route path="org" element={<Org profile={props.profile}/>} />
                <Route path="create-org" element={<CreateNewOrg profile={props.profile}/>} />

                <Route path="task" element={<Tasks/>} />
                <Route path="universities" element={<Universities/>} />
                <Route path="friends" element={<Page404 text={'Friends'}/>} />
                <Route path="achievement" element={<Page404 text={'Achievement'} />} />
                <Route path="settings" element={<Page404 text={'Settings'} />} />
                <Route path="undefined" element={<Page404 text={'Mr. CLEVER enough to put strange links'} />} />
            </Routes>
        </AppShell>
    );
}