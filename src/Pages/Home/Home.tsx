import React, {useEffect, useRef, useState} from 'react';
import {Text, Card, Image, Button, Title, createStyles, TextInput} from "@mantine/core";
import {Profile} from "../../SupaBase/SupabseUni";
import CreateNewClub from "./CreateNewClub/CreateNewClub";
import JoinedClub from "./JoinedClub/JoinedClub";

import Change from "../../Components/Change/Change";
import Login from "../Login/Login";
import ChangeProfileData from "./ChangeProfileData/ChangeProfileData";
import {Edit, EditCircle} from "tabler-icons-react";


const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'start',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,
        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        paddingLeft: theme.spacing.xl,
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },
}));

function Home(props: any) {
    const [profile, setProfile] = useState<Profile>(props.profile);
    const [changeProfile, setChangeProfile] = useState(false);


    const {classes} = useStyles();
    return (
        <>
            {profile.profile.name !== "Guest" && <Login profile={profile}/>}
            <Card className={classes.inner}>
                <Image src={profile.profile.logo_url} withPlaceholder height={192} alt={profile.profile.name}
                       radius={"xs"}
                       width={192}/>
                <div className={classes.control}>
                    <Title className={classes.title}>{profile.profile.name}<Edit style={{paddingLeft:10}}/></Title>
                    <Text color="dimmed">University: {profile.profile.university_name}</Text>
                </div>
            </Card>
            {changeProfile && <ChangeProfileData profile={profile} setProfile={setProfile}/>}

            <JoinedClub/>
            <CreateNewClub data={profile} universityName={profile.profile.university_id}
                           userName={profile.profile.name}/>

        </>
    );
}

export default Home;