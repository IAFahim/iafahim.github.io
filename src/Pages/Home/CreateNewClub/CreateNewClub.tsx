import React, {useRef, useState} from 'react';
import {Button, Card, Text, Textarea, TextInput} from "@mantine/core";

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

const CreateNewClub = (props: any) => {
    const org = useRef<org>({name: props.universityName + "-" + props.userName + "'s club"});
    const [clubName, setClubName] = useState(props.universityName + "-" + props.userName + "'s club");
    const [clubDescription, setClubDescription] = useState("");
    const handleCreateNewClub = async () => {
        props.data.create_org({name: clubName, description: clubDescription});
    }
    return (
        <Card>
            <Text>Create New Club</Text>
            <TextInput required mt={"xs"} mb={"xs"}
                       label="Club Name"
                       value={clubName}
                       placeholder={props.universityName + "-" + props.userName + "'s club"}
                       onChange={event => setClubName(event.target.value)}
            />
            <Textarea mt={"xs"} mb={"xs"}
                      label="Club Description"
                      value={clubDescription}
                      onChange={event => setClubDescription(event.target.value)}
                      placeholder={"Description"}/>
            <Button onClick={handleCreateNewClub}>Create</Button>
        </Card>
    );
};

export default CreateNewClub;
