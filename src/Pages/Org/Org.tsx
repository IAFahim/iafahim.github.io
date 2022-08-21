import React, {useEffect, useState} from 'react';
import {Profile} from "../../SupaBase/SupabseUni";
import {Text} from "@mantine/core";

let isLoading = false;
const Org = (props: any) => {
    const [orgsData, setOrgsData] = useState<Profile>(props.profile);
    const [joinedOrgs, setJoinedOrgs] = useState([]);


    const handleFatchJoinedOrg = () => {
        orgsData._org.fetch_joined_org_list(orgsData.profile).then(data => {
            console.log(data);
            isLoading= false;
        })
    }

    useEffect(() => {
        if (!isLoading) {
            isLoading=true;
            handleFatchJoinedOrg();
        }
    }, []);

    return (
        <div>
            <Text>{}</Text>
        </div>
    );
};

export default Org;
