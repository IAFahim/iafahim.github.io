import React, {useEffect, useState} from 'react';
import AppShellMantine from "./Components/AppShell/AppShellMantine";
import {
    NavigationProgress,

} from '@mantine/nprogress';
import {supabase} from "./SupaBase/SupabseUni";

function App() {
    const [session, setSession] = useState(null);
    useEffect(() => {
        // @ts-ignore
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            // @ts-ignore
            setSession(session)
        })
    }, [])
    return (
        <>
            <NavigationProgress/>
            <AppShellMantine/>
        </>
    );
}

export default App;
