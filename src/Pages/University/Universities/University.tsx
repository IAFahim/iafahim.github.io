import {
    Card,
    Grid,
    Text,
    Image,
    Paper,
    Skeleton,
    useMantineTheme,
    createStyles,
    Code,
    Title,
    Group, Button
} from '@mantine/core';
import {Car, Icon as TablerIcon} from "tabler-icons-react";
import {NavLink} from "react-router-dom";
import React from "react";


const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'start',
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
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
        minHeight: 100,
        maxWidth: 200,
        [theme.fn.smallerThan('md')]: {},
    },

}));

interface university {
    name?: string;
    img?: string;
    abbreviation: string;
    web_page: string;
    address: string;
    students_count?: number;
    c_o_count?: number;
    mail: string;
    phone: string;
}

export function University(props: university | null) {
    const theme = useMantineTheme();
    const {classes} = useStyles();
    return (
        <>
            <Card m={10} className={classes.inner}>
                <Image className={classes.image} src={props?.img} fit={"cover"} withPlaceholder alt={props?.name}/>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        {props?.abbreviation}
                    </Title>
                    <Text color="dimmed" mt={0}>
                        {props?.name}
                    </Text>
                    <Text color="dimmed" size={20}>Students joined: {props?.students_count}</Text>
                    <Text mt="xs">
                        {props?.address}
                    </Text>
                    <Card mt={10}>
                        <Text>
                            {props?.web_page}
                        </Text>
                        <Text>
                            {props?.mail}
                        </Text>
                        <Text>
                            {props?.phone}
                        </Text>
                    </Card>
                </div>
            </Card>
        </>
    );
}