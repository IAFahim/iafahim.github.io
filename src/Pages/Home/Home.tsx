import React, {useState} from 'react';
import {Button, Card, createStyles, Image, Text, Title} from "@mantine/core";
import {Profile} from "../../SupaBase/SupabseUni";
import JoinedOrg from "./JoinedOrg/JoinedOrg";
import Login from "../Login/Login";
import ChangeProfileData from "./ChangeProfileData/ChangeProfileData";


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
    const [isChangingProfile, setIsChangingProfile] = useState(false);

    const handleChangeProfileData = () => {
        setIsChangingProfile(!isChangingProfile);
    }
    const {classes} = useStyles();
    return (
        <>
            {localStorage.length < 1 && <Login profile={profile}/>}
            <Card className={classes.inner}>
                <Image src={profile.profile.logo_url} withPlaceholder height={192} alt={profile.profile.name}
                       radius={"xs"}
                       width={192}/>
                <div className={classes.control}>
                    <Title className={classes.title}>{profile.profile.name}</Title>
                    <Text color="dimmed">University: {profile.profile.university_name}</Text>
                </div>
            </Card>
            <Button ml='md' style={{width: 192}} variant={"gradient"} onClick={handleChangeProfileData}>Edit
                Profile</Button>
            {isChangingProfile && <ChangeProfileData profile={profile} isChangingProfile={isChangingProfile}
                                                     setIsChangingProfile={setIsChangingProfile}/>}
            <JoinedOrg/>
        </>
    );
}

export default Home;