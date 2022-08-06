import React, {useState} from 'react';
import {Text, Card, Image, Container, Title, createStyles} from "@mantine/core";
import {User} from "../../SupaBase/SupabseUni";


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
        paddingLeft:theme.spacing.xl,
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },


}));

function Home() {
    const [data, setData] = useState(new User({
        name: "Fahim",
        email: "faimmanowarj5@gamil.com",
        university: "NSU",
        logo_url: "https://avatars.githubusercontent.com/u/63500913?s=40&v=4"
    }));

    const {classes} = useStyles();

    return (
        <Card className={classes.inner}>
            <Image src={data.user.logo_url} height={192} alt={data.user.name} radius={"xs"} width={192}/>
            <div className={classes.control}>
                <Title className={classes.title}>{data.user.name}</Title>
                <Text color="dimmed">University:    {data.user.university}</Text>
            </div>
        </Card>
    );
}

export default Home;