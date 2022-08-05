import {MultiSelect, Card, Paper, useMantineTheme, TextInput, Code} from '@mantine/core';
import COUNTRY_NAMES from "../Data/countryNames";
import {useState} from "react";
import {Search} from "tabler-icons-react";

export default function Universities() {
    const [value, setValue] = useState([]);

    const handleChange = (e: any) => {
        getUniversityList(e[0])
        setValue(e)
    }

    const getUniversityList = async (country: string) => {
        fetch("https://raw.githubusercontent.com/IAFahim/iafahim.github.io/master/public-university-data/" + country.toLowerCase() + ".json").then(e => {
            e.json().then(data =>
                console.log(data)
            )
        })
    }

    return (
        <Paper style={{display: "flex",}}>
            <TextInput style={{ flex:1, minWidth:180}}
                       p={"sm"}
                       placeholder="Search"
                       icon={<Search size={16}/>}
                       rightSectionWidth={90}
                       rightSection={<Code>1 found</Code>}
                       styles={{rightSection: {pointerEvents: 'none'}}}

            />
            <MultiSelect style={{maxWidth: 400}}
                         data={COUNTRY_NAMES}
                         value={value}
                         p={"sm"}
                // @ts-ignore
                         onChange={handleChange}
                         placeholder="Select region"
                         searchable
                         nothingFound="Nothing found"
                         clearButtonLabel="Clear selection"
                         clearable
            />
        </Paper>
    );
}