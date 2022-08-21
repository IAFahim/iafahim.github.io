import {createClient} from "@supabase/supabase-js";
import Org,{org} from "./Org";

const supabaseUrl = 'https://qjfadaxadrjsmxpttxlr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmFkYXhhZHJqc214cHR0eGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDQzNjQsImV4cCI6MTk3NTcyMDM2NH0.pXR-z0YGh3IhlM0RZ14aB2X3XWYvXjGj9LzYAfJgFI0'
export const supabase = createClient(supabaseUrl, supabaseKey)

export interface profile {
    id?: number,
    name?: string,
    email?: string,
    logo_url?: string,
    university_name?: string,
    university_id?: number,
    karma?: number,
    social_websites?: string[],
    created?: Date;
    updated?: Date;
    visit_history?: string[]
}

export class Profile {
    private _profile = {
        name: "",
        logo_url: "",
        email: "",
        university_name:"",
        university_id: 0,
        karma: 0,
        social_websites: [],
        visit_history: [],
        created: new Date()
    } as profile;

    _org = new Org();

    constructor() {
        const profile = this.get_profile();
        if (profile == null) {
            this._profile = {
                name: "Guest",
                university_name: "Secret"
            }
        } else {
            this._profile = profile;
        }
    }

    async sendMagicLink(email: string) {
        this._profile.email = email;
        this.store_profile();
        const {error} = await supabase.auth.signIn({email: email})
        if (error) {
            // @ts-ignore
            alert(error.error_description || error.message)
        }
    }

    async fetch_profile() {
        const {data, error} = await supabase
            .from('profiles')
            .select('*').eq("uuid", supabase.auth.user()?.id)

        if (error) {
            alert("cant create profile")
        } else {

            // @ts-ignore
            console.log(data[0]);
            // @ts-ignore
            this._profile = {...data[0]};
            this.store_profile();
        }
    }

    async fetch_Change_ProfileName_University_name(name: string, university_name: string) {
        this._profile.name = name;
        this._profile.university_name = university_name;

        const {error} = await supabase
            .from('profiles')
            .update({
                name: name
            }).eq('id', this._profile.id)
        if (error) {
            alert("cant update profile")
        }else {
            this.store_profile();
        }
    }

    get profile(): profile {
        return this._profile;
    }

    set profile(value: profile) {
        this._profile = value;
    }

    async store_profile() {
        this._profile.updated = new Date();
        let data = JSON.stringify({...this._profile})
        localStorage.setItem("Profile", data);
    }

    get_profile() {
        // @ts-ignore
        return JSON.parse(localStorage.getItem("Profile"))
    }


    getDateNow() {
        return new Date(Date.now() + (1000 * 60 * (-(new Date()).getTimezoneOffset()))).toISOString().replace('T', ' ').replace('Z', '')
    }

    parseDateFromPostgresql(s: string) {
        let b = s.split(/\D/);
        // @ts-ignore
        --b[1];                  // Adjust month number
        b[6] = b[6].substr(0, 3); // Microseconds to milliseconds
        // @ts-ignore
        return new Date(Date.UTC(...b));
    }

}