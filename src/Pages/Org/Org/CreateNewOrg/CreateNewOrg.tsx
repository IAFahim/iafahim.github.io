import React, {useRef, useState} from 'react';
import {Button, Card, Title, Textarea, TextInput} from "@mantine/core";
import {useInputState} from "@mantine/hooks";

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

const CreateNewOrg = (props: any) => {
    const [orgName, setOrgName] = useInputState(  props.profile.profile.name + "'s org");
    const [orgDescription, setOrgDescription] = useInputState("");
    const handleCreateNewOrg = async () => {
        props.profile.create_org({name: orgName, description: orgDescription});
    }

    return (
        <Card>
            <Title>Create New Org</Title>
            <TextInput required mt={"xs"} mb={"xs"}
                       label="Org Name"
                       value={orgName}
                       placeholder={props.profile.profile.name + "'s org"}
                       onChange={setOrgName}
            />
            <Textarea mt={"xs"} mb={"xs"}
                      label="Org Description"
                      value={orgDescription}
                      onChange={setOrgDescription}
                      placeholder={"Description"}/>
            <Button onClick={handleCreateNewOrg}>Create</Button>
        </Card>
    );
};

export default CreateNewOrg;
