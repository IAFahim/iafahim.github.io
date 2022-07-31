import React from "react";
import {Burger, Header, MediaQuery, Text, Group} from "@mantine/core";
import imgSrc from './logo192.png'
import UserFooter from "../NavBarMantine/UserFooter/UserFooter";

function HeaderMantine(props: any) {
    return (
        <Header height={props.height} p="md">
            <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <MediaQuery largerThan={props.navbarBreakPoint} styles={{display: 'none'}}>
                    <Burger
                        opened={props.opened}
                        onClick={() => props.setOpened((o: any) => !o)}
                        size="sm"
                        color={props.theme.colors.gray[4]}
                        mr="xl"
                    />
                </MediaQuery>

                <img src={imgSrc} height={props.height} alt={"Uni_logo"}/>
                <Text p={10} size="xl" weight={700}>{props.text}</Text>

            </div>
        </Header>
    )
}

export default HeaderMantine;