import {MultiSelect, Card, Container, useMantineTheme} from '@mantine/core';
import COUNTRY_NAMES from "../Data/countryNames";
import {useState} from "react";

export default function Universities() {
    const [value, setValue] = useState([]);

    const handleChange = (e: any) => {
        getUniversityList(e[0])
        setValue(e)
    }

    const getUniversityList = async (country: string) => {
        fetch("https://raw.githubusercontent.com/IAFahim/iafahim.github.io/master/public-university-data/" + country.toLowerCase() + ".json").then(e => {
            e.json().then(data=>
                console.log(data)
            )
        })
    }

    return (
        <Container>
            <MultiSelect style={{maxWidth: 400, overflow: 'hidden'}}
                         data={COUNTRY_NAMES}
                         value={value}
                // @ts-ignore
                         onChange={handleChange}
                         label="Your favorite frameworks/libraries"
                         placeholder="Pick all that you like"
                         searchable
                         nothingFound="Nothing found"
                         clearButtonLabel="Clear selection"
                         clearable
            />
        </Container>
    );
}