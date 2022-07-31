import React from 'react';
import {Button} from "@mantine/core";

function ButtonsForNav(props: any) {
    return (
        <Button sx={{
            display: 'block',
            width: '100%',
            padding: props.theme.spacing.xs,
            borderRadius: props.theme.radius.sm,
            color: props.theme.colorScheme === 'dark' ? props.theme.colors.dark[0] : props.theme.black,

            '&:hover': {
                backgroundColor:
                    props.theme.colorScheme === 'dark' ? props.theme.colors.dark[6] : props.theme.colors.gray[0],
            },
        }} fullWidth={true} variant={"light"} color={'cyan'} style={{marginBottom:4}} leftIcon={props.icon}>{props.text}</Button>
    );
}

export default ButtonsForNav;