import React, {useState} from 'react';
import {supabase} from "../../../SupaBase/SupabseUni";

const MyComponent = () => {
    const [data, setData] = useState('Nodata')
    const [loading, setLoading] = useState(false)
    const get_mail = async (e: any) => {
        e.preventDefault();
        try {
            const {data, error} = await supabase.from("hello").select("*");
            if (error) throw error;
            console.log(data);
            // @ts-ignore
            setData(data);
        } catch (error) {
            // @ts-ignore
            alert(error.error_description || error.message)
        }
    }
    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <button onClick={get_mail}>data</button>
        </>
    );
};

export default MyComponent;
