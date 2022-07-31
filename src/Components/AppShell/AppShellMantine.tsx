import React, {useState} from 'react';

import {
    AppShell, MantineNumberSize,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import HeaderMantine from "./HeaderMantine/HeaderMantine";
import Clubs from "../Clubs/Clubs";
import {NavigationProgress} from "@mantine/nprogress";

export default function AppShellMantine() {
    const theme = useMantineTheme();
    theme.colorScheme = "light";
    theme.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
    const navbarBreakPoint = "sm" as MantineNumberSize;
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            className="App"
            padding={0}
            styles={{main: {background: "#f8f9fa"}}}
            navbarOffsetBreakpoint={navbarBreakPoint}
            fixed navbar={
            <NavBarMantine opened={opened} navbarBreakPoint={navbarBreakPoint} theme={theme} text={"Lazy to dev..."}/>
        }
            header={<HeaderMantine theme={theme} text={"You and I"} opened={opened} setOpened={setOpened}
                                   navbarBreakPoint={navbarBreakPoint} height={48}/>}
        >

            <Clubs></Clubs>
        </AppShell>
    );
}