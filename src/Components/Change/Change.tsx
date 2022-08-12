import {useState} from 'react';
import {Dialog, Group, Button, TextInput, Text} from '@mantine/core';
import {Settings} from "tabler-icons-react";

export default function Change(props:any) {
    const [opened, setOpened] = useState(false);

    return (
        <>

            <Settings onClick={() => setOpened((o) => !o)}/>

            <Dialog
                opened={opened}
                withCloseButton
                onClose={() => setOpened(false)}
                size="lg"
                radius="md"
            >
                <Text size="sm" style={{marginBottom: 10}} weight={500}>
                    Update Name
                </Text>

                <Group align="flex-end">
                    <TextInput placeholder="Your Name" style={{flex: 1}}/>
                    <Button onClick={() => setOpened(false)}>Send</Button>
                </Group>
            </Dialog>
        </>
    );
}