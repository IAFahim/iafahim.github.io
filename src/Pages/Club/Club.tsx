import React, {useEffect, useState} from 'react';
import {Profile} from "../../SupaBase/SupabseUni";
import {Text} from "@mantine/core";

let isLoading = false;
const Club = (props: any) => {
    const [clubsData, setClubsData] = useState<Profile>(props.profile);
    const [joinedClubs, setJoinedClubs] = useState([]);


    const handleFatchJoinedClub = () => {
        clubsData._org.fetch_joined_org_list(clubsData.profile).then(data => {
            console.log(data);
            isLoading= false;
        })
    }

    useEffect(() => {
        if (!isLoading) {
            isLoading=true;
            handleFatchJoinedClub();
        }
    }, []);

    return (
        <div>
            <Text>{}</Text>
        </div>
    );
};

export default Club;
