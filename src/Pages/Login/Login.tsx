import React, {useRef, useState} from 'react'
import {supabase} from '../../SupaBase/SupabseUni'
import {Button, Card, createStyles, TextInput, Title} from "@mantine/core";
import {Edit, Mail, Settings} from "tabler-icons-react";

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




}));

export default function Login(props:any) {
    const {classes} = useStyles();
    const email = useRef("");

    return (
    <Card className={classes.inner} style={{flexDirection: "column"}}>
        <Title>Login</Title>
        <TextInput mt={"md"} type={'email'} placeholder={'Email'} icon={<Mail/>} onChange={(e) => {
            email.current = e.target.value
        }}></TextInput>
        <Button mt={"xs"} onClick={() => {
            props.profile.sendMagicLink(email.current)
        }}>Send</Button>

    </Card>
)
}