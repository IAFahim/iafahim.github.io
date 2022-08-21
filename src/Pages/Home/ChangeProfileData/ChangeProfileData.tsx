import React from 'react';
import {Card, TextInput, Title, Button} from "@mantine/core";
import {useInputState} from '@mantine/hooks';
import {Database, Dots, School, Send, User} from "tabler-icons-react";
import Change from "../../../Components/Change/Change";

const ChangeProfileData = (props: any) => {

    const [profileName, setProfileName] = useInputState(props.profile.profile.name);
    const [university_name, setUniversity_name] = useInputState(props.profile.profile.university_name);

    const handleProfileChange = () => {
        props.profile.fetch_Change_ProfileName_University_name(profileName, university_name);
        handleClose();
    }

    const handleClose = () => {
        props.setIsChangingProfile(false);
    }

    return (
        <Card>
            <Title mb={"xs"}>Change User Data</Title>
            <TextInput value={profileName} onChange={setProfileName} mb={'xs'} icon={<User/>}
                       placeholder={"User Name"}></TextInput>
            <TextInput value={university_name} onChange={setUniversity_name} icon={<School/>}
                       placeholder={"University"}></TextInput>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
                <Button m={"xs"} type={"submit"} variant={"gradient"} onClick={handleProfileChange}>Save</Button>
                <Button onClick={handleClose} mt={"xs"} type={"submit"} variant={"outline"}>Cancel</Button>

            </div>
        </Card>
    );
};

export default ChangeProfileData;
