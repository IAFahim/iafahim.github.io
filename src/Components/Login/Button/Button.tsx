import React from 'react';

function Button(props: any) {
    return (
            <a href={"https://rputpzgefrvvxneknacq.supabase.co/auth/v1/authorize?provider=google"}>

            <button type="submit">{props.text}</button>
            </a>
    );
}

export default Button;
