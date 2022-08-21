import {Code, MultiSelect, Paper, ScrollArea, TextInput} from '@mantine/core';
import COUNTRY_NAMES from "../Data/countryNames";
import {useEffect, useState} from "react";
import {Search} from "tabler-icons-react";
import {University} from "./University";

export default function Universities() {
    const [value, setValue] = useState([]);

    const handleChange = (e: any) => {
        getUniversityList(e[0])
        setValue(e)
    }
    const universityList = [] as any;
    const getUniversityList = async (country: string) => {
        fetch("https://raw.githubusercontent.com/IAFahim/iafahim.github.io/master/public-university-data/" + country.toLowerCase() + ".json").then(e => {
            e.json().then(data =>
                {
                    universityList.push(<University key={data.web_pages}
                                                     name={data.name}
                                                     web_page={data.web_pages}/>)

                }
            )
        })
    }

    useEffect(() => {
        getUniversityList("Bangladesh")
    })



    return (
        <ScrollArea>
            <Paper style={{display: "flex",}}>
                <TextInput style={{flex: 1, minWidth: 180}}
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

                             onChange={handleChange}
                             placeholder="Select region"
                             searchable
                             nothingFound="Nothing found"
                             clearButtonLabel="Clear selection"
                             clearable
                />
            </Paper>

            <University key={"NSU"}
                        abbreviation={"NSU"}
                        name={"North South University"}
                        img={"https://www.freelogovectors.net/wp-content/uploads/2022/03/nsu_logo_freelogovectors.net_.png"}
                        students_count={0}
                        address={"Bashundhara, Dhaka-1229, Bangladesh"}
                        c_o_count={0}
                        web_page="http://www.northsouth.edu"
                        mail={"registrar@northsouth.edu"}
                        phone={"+880-2-55668200"}
            />

            {universityList}


        </ScrollArea>
    );
}