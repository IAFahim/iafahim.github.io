import React, {useRef, useState} from 'react';
import {Button, Card, Title, Textarea, TextInput} from "@mantine/core";
import {useInputState} from "@mantine/hooks";

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

const CreateNewClub = (props: any) => {
    const [clubName, setClubName] = useInputState(  props.profile.profile.name + "'s club");
    const [clubDescription, setClubDescription] = useInputState("");
    const handleCreateNewClub = async () => {
        props.profile.create_org({name: clubName, description: clubDescription});
    }

    return (
        <Card>
            <Title>Create New Club</Title>
            <TextInput required mt={"xs"} mb={"xs"}
                       label="Club Name"
                       value={clubName}
                       placeholder={props.profile.profile.name + "'s club"}
                       onChange={setClubName}
            />
            <Textarea mt={"xs"} mb={"xs"}
                      label="Club Description"
                      value={clubDescription}
                      onChange={setClubDescription}
                      placeholder={"Description"}/>
            <Button onClick={handleCreateNewClub}>Create</Button>
        </Card>
    );
};

export default CreateNewClub;
