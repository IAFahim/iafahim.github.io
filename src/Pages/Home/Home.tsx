import React, {useEffect, useRef, useState} from 'react';
import {Text, Card, Image, Button, Title, createStyles, TextInput} from "@mantine/core";
import {Profile} from "../../SupaBase/SupabseUni";
import CreateNewClub from "./CreateNewClub/CreateNewClub";
import JoinedClub from "./JoinedClub/JoinedClub";
import {Edit, Settings} from "tabler-icons-react";
import Change from "../../Components/Change/Change";


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

function Home(props:any) {
    const [data, setData] = useState<Profile>(props.profile);
    const email = useRef("");
    const {classes} = useStyles();
    return (
        <>
            <Card className={classes.inner}>
                <Image src={data.profile.logo_url} withPlaceholder height={192} alt={data.profile.name} radius={"xs"}
                       width={192}/>
                <div className={classes.control}>
                    <Title className={classes.title}>{data.profile.name}<Change/></Title>
                    <Text color="dimmed">University: {data.profile.university_id}</Text>
                    <TextInput mt={"xl"} style={{flex: 1, minWidth: 300}} type={'email'} onChange={(e) => {
                        email.current = e.target.value
                        console.log(email.current)
                    }}></TextInput>
                    <Button mt={"md"} onClick={() => {
                        data.sendMagicLink(email.current)
                    }}>Send</Button>
                    <Button mt={"md"} ml={"md"} onClick={() => {
                        data.fetch_profile()
                    }}>logit</Button>
                </div>
            </Card>
            <JoinedClub/>
            <CreateNewClub data={data} universityName={data.profile.university_id} userName={data.profile.name}/>

        </>
    );
}

export default Home;