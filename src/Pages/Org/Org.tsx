import React, {useEffect, useState} from 'react';
import {Profile} from "../../SupaBase/SupabseUni";
import {ActionIcon, Anchor, Avatar, Badge, Group, ScrollArea, Table, Text, useMantineTheme} from "@mantine/core";
import {Edit, Eraser} from "tabler-icons-react";
import {org, org_member} from '../../SupaBase/Org';
import orgData from "./Org/OrgData";

interface UsersTableProps {
    data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const jobColors: Record<string, string> = {
    admin: 'blue',
    pending: 'cyan',
    member: 'pink',
};
let isLoading = false;
const Org = (props: any) => {
    const [orgsData] = useState<Profile>(props.profile);
    const [joinedOrgs, setJoinedOrgs] = useState<Map<number, string>>();

    const handleFatchJoinedOrg = () => {
        orgsData._org.fetch_joined_org_list(orgsData.profile).then(() => {
            setJoinedOrgs(orgsData._org.orgId);
        })
    }

    useEffect(() => {
        if (!isLoading) {
            isLoading = true;
            handleFatchJoinedOrg();
        }
    });

    const theme = useMantineTheme();
    let rows=[] as any ;
    joinedOrgs?.forEach((status,id) => {rows.push(<tr key={id}>
        <td>
            <Group spacing="sm">
                <Avatar size={30} src={""} radius={30} />
                <Text size="sm" weight={500}>
                    {id}
                </Text>
            </Group>
        </td>

        <td>
            <Badge
                color={jobColors[status]}
                variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
            >
                {status}
            </Badge>
        </td>
        <td>
            <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
                {orgsData._org.org.get(id)?.name}
            </Anchor>
        </td>
        <td>
            <Text size="sm" color="dimmed">
                {orgsData._org.org.get(id)?.description}
            </Text>
        </td>
        <td>
            <Group spacing={0} position="right">
                <ActionIcon>
                    <Edit size={16} />
                </ActionIcon>
                <ActionIcon color="red">
                    <Eraser size={16} />
                </ActionIcon>
            </Group>
        </td>
    </tr>)});


    return (
        <>
            <Table sx={{minWidth: 800}} verticalSpacing="sm">
                <thead>
                <tr>
                    <th>Organization Name</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </>


    );
};

export default Org;

