import React from 'react';
import './App.css';
import AppShellMantine from "./Components/AppShell/AppShellMantine";
import {
    NavigationProgress,

} from '@mantine/nprogress';


function App() {
    return (
        <>
            <NavigationProgress/>
            <AppShellMantine/>
        </>
    );
}

export default App;
