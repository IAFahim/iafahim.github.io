import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon, Card
} from '@mantine/core';
import {Icon} from 'tabler-icons-react';
import image from './ACM_Logo.png';
import clubData from "./ClubData";
import {NavLink, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Tasks from "../../Tasks/Tasks";
import React from "react";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'start',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        backgroundColor: theme.colors.gray[0]
    },

    content: {
        maxWidth: 480,
        paddingLeft: theme.spacing.xl,
        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
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
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,
        maxWidth: 200,
        maxHeight: 200,
        [theme.fn.smallerThan('md')]: {},
    },

}));


function Task(props: any) {
    return (
        <div>props.text</div>
    );
}

export default function Clubs() {

    const {classes} = useStyles();
    return (

        <Card className={classes.inner}>
            <Image src={image} withPlaceholder className={classes.image} fit={"contain"}/>
            <div className={classes.content}>
                <Title className={classes.title}>
                    {clubData.name}
                </Title>
                <Text color="dimmed" size={20}>Memeber: {clubData.user_count}</Text>
                <Text color="dimmed" mt="md">
                    {clubData.description}
                </Text>
                <Group mt={30}>

                    <Button radius="xl" size="md" className={classes.control}>
                        Apply
                    </Button>
                    <NavLink style={{textDecoration: 'none'}} to={clubData.name + ''}>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Manage
                        </Button>
                    </NavLink>
                </Group>

            </div>

        </Card>
    );
}