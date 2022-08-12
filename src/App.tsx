import React, {useEffect, useState} from 'react';
import AppShellMantine from "./Components/AppShell/AppShellMantine";
import {Profile} from "./SupaBase/SupabseUni";

function App() {
    return (
        <>
            <AppShellMantine profile={new Profile()}/>
        </>
    );
}

export default App;
