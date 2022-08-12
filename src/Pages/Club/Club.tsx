import React, {useState} from 'react';
import {Profile} from "../../SupaBase/SupabseUni";

const Club = (props:any) => {
    const [clubsData, setClubsData] = useState<Profile>(props.profile);
    return (
        <div>
        </div>
    );
};

export default Club;
