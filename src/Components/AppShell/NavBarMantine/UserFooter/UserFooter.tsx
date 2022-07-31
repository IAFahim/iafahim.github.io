import React from 'react';
import {Text, UnstyledButton, Group, Avatar, Box} from "@mantine/core";
import {ChevronRight, ChevronLeft} from 'tabler-icons-react';

function UserFooter(props: any) {
    return (

        <Box
            sx={{
                paddingTop: props.theme.spacing.sm,
                borderTop: `1px solid ${
                    props.theme.colorScheme === 'dark' ? props.theme.colors.dark[4] : props.theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: props.theme.spacing.xs,
                    paddingBottom: props.theme.spacing.xl,
                    borderRadius: props.theme.radius.sm,
                    color: props.theme.colorScheme === 'dark' ? props.theme.colors.dark[0] : props.theme.black,

                    '&:hover': {
                        backgroundColor:
                            props.theme.colorScheme === 'dark' ? props.theme.colors.dark[6] : props.theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/63500913?s=40&v=4"
                        radius="xl"
                    />
                    <Box sx={{flex: 1}}>
                        <Text size="sm" weight={500}>
                            PRO_GrAMmER
                        </Text>
                        <Text color="dimmed" size="xs">
                            fahimmanowarj5@gmail.com
                        </Text>
                    </Box>

                    {props.theme.dir === 'ltr' ? <ChevronRight size={18}/> : <ChevronLeft size={18}/>}
                </Group>
            </UnstyledButton>
        </Box>
    );
}

export default UserFooter;