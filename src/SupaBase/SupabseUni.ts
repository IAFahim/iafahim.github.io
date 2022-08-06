import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://rputpzgefrvvxneknacq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzYzOTU1MiwiZXhwIjoxOTUzMjE1NTUyfQ.Dt1UNSWSBrPsMAjiTv0fobcyjnne5B0PEHuFzBPfaaY'
export const supabase = createClient(supabaseUrl, supabaseKey)

interface user {
    name?: string,
    logo_url?: string,
    email?: string,
    university?: string,
    karma?: number,
    social_websites?: string[],
    visit_history?: string[]
}

export class User {
    private _user = {name: "",
        logo_url: "", email: "", university: "", karma: 0,
        social_websites:[], visit_history:[]
    } as user;

    constructor(user: user) {
        this._user = user;
    }

    get user(): user {
        return this._user;
    }

    set user(value: user) {
        this._user = value;
    }
}