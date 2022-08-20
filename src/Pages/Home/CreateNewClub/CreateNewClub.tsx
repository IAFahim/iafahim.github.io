import React, {useRef, useState} from 'react';
import {Button, Card, Title, Textarea, TextInput} from "@mantine/core";

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

const CreateNewClub = (props: any) => {
    const [clubName, setClubName] = useState(props.universityName + "-" + props.userName + "'s club");
    const [clubDescription, setClubDescription] = useState("");
    const handleCreateNewClub = async () => {
        props.data.create_org({name: clubName, description: clubDescription});
    }
    return (
        <Card>
            <Title>Create New Club</Title>
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
