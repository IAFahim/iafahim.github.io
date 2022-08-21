import React from 'react';
import {Button, Card, Textarea, TextInput, Title} from "@mantine/core";
import {useInputState} from "@mantine/hooks";
import {profile} from "../../../../SupaBase/SupabseUni";

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

const CreateNewOrg = (props: any) => {
    const [orgName, setOrgName] = useInputState(props.profile.profile.name + "'s org");
    const [orgDescription, setOrgDescription] = useInputState("");
    const handleCreateNewOrg = async () => {
        props.profile._org.create_org(props.profile.profile as profile, {name: orgName, orgDescription} as org);
    }

    return (
        <Card>
            <Title>Create New Organization</Title>
            <TextInput required mt={"xs"} mb={"xs"}
                       label="Organization Name"
                       value={orgName}
                       placeholder={props.profile.profile.name + "'s org"}
                       onChange={setOrgName}
            />
            <Textarea mt={"xs"} mb={"xs"}
                      label="Organization Description"
                      value={orgDescription}
                      onChange={setOrgDescription}
                      placeholder={"Description"}/>
            <Button onClick={handleCreateNewOrg}>Create</Button>
        </Card>
    );
};

export default CreateNewOrg;
