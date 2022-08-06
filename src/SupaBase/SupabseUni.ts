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

    async sendMagicLink(email: string){
        const { error } = await supabase.auth.signIn({ email:email})
    }

    async getUser(){
        const { data } = await supabase
            .from('profiles')
            .select('id, last_name')
        // @ts-ignore
        // this._user.name=data.username;
        // // @ts-ignore
        // this._user.logo_url=data.avatar_url;
        // // @ts-ignore
        // this._user.social_websites?.push(data.website)
        console.log(data);
    }

    get user(): user {
        return this._user;
    }

    set user(value: user) {
        this._user = value;
    }
}
