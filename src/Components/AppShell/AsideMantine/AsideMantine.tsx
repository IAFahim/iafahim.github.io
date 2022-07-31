import React from "react";
import {Aside, MediaQuery, Paper, Text} from "@mantine/core";

function AsideMantine(){
    return(
        <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
            <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>

                    <Text color={"white"}>Edit</Text>
            </Aside>
        </MediaQuery>
    );
}

export default AsideMantine;