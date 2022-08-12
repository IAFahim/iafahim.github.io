import {createClient} from "@supabase/supabase-js";
import {uuid} from "@supabase/supabase-js/dist/main/lib/helpers";

const supabaseUrl = 'https://qjfadaxadrjsmxpttxlr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmFkYXhhZHJqc214cHR0eGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDQzNjQsImV4cCI6MTk3NTcyMDM2NH0.pXR-z0YGh3IhlM0RZ14aB2X3XWYvXjGj9LzYAfJgFI0'
export const supabase = createClient(supabaseUrl, supabaseKey)

interface profile {
    id?: number,
    name?: string,
    logo_url?: string,
    university_id?: string,
    karma?: number,
    social_websites?: string[],
    created?: Date;
    updated?: Date;
    visit_history?: string[]
}

interface org {
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

export class Profile {

    private _profile = {
        name: "",
        logo_url: "", email: "", university_id: "", karma: 0,
        social_websites: [], visit_history: []
    } as profile;

    constructor() {
        const profile = this.getProfile();
        if (profile == null) {
            this._profile = {
                name: "Guest",
                university_id: "Secret"
            }
        } else {
            this._profile = profile;
        }
    }

    async sendMagicLink(email: string) {
        const {error} = await supabase.auth.signIn({email: email})
    }

    async fetchProfile() {
        const {data} = await supabase
            .from('profiles')
            .select('*').eq("uuid", supabase.auth.user()?.id)

        // @ts-ignore
        console.log(data[0]);
        // @ts-ignore
        this._profile = {...data[0]};
        this.saveProfile();
    }

    get profile(): profile {
        return this._profile;
    }

    set profile(value: profile) {
        this._profile = value;
    }

    async saveProfile() {
        this._profile.updated=new Date();
        let data = JSON.stringify({...this._profile})
        localStorage.setItem("Profile", data);
    }

    getProfile() {
        // @ts-ignore
        return JSON.parse(localStorage.getItem("Profile"))
    }

    async createClub(org: org) {
        const {data, error} = await supabase
            .from('org')
            .insert([
                {created_by: this._profile.id, name: org.name, description: org.description},
            ]);
        console.log(data);
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