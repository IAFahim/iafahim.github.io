import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://qjfadaxadrjsmxpttxlr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmFkYXhhZHJqc214cHR0eGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDQzNjQsImV4cCI6MTk3NTcyMDM2NH0.pXR-z0YGh3IhlM0RZ14aB2X3XWYvXjGj9LzYAfJgFI0'
export const supabase = createClient(supabaseUrl, supabaseKey)

interface profile {
    id?: number,
    name?: string,
    email?: string,
    logo_url?: string,
    university_id?: string,
    karma?: number,
    social_websites?: string[],
    created?: Date;
    updated?: Date;
    visit_history?: string[]
}

interface Org {
    id?: number,
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

export class Profile {

    private _profile = {
        name: "",
        logo_url: "", email: "", university_id: "", karma: 0,
        social_websites: [], visit_history: [], created: new Date()
    } as profile;

    private _org = new Map<string, Org>();

    constructor() {
        const profile = this.get_profile();
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


    get org(): Map<string, Org> {
        return this._org;
    }

    set org(value: Map<string, Org>) {
        this._org = value;
    }

    async create_org(org: Org) {
        const {data, error} = await supabase
            .from('org')
            .insert([
                {created_by: this._profile.id, name: org.name, description: org.description},
            ]);
        if (error) {
            alert("Club exists")
        } else {
            // @ts-ignore
            org = {...data};
            this._org.set(org.name, org);
            console.log(this._org);
            localStorage.setItem(org.name, JSON.stringify(org))
        }
    }


    async fetch_joined_org_list() {
        const {data, error} = await supabase
            .from('org_member')
            .select('*').eq('profiles_id', this._profile.id);
        data?.forEach(e => {
            this._org.set(e.org_id, e);
            localStorage.setItem(e.org_id, JSON.stringify(e))
        })
    }

    async fetch_joined_org_data(id: number) {
        const {data, error}=await supabase
            .from('org')
            .select('*').eq('id',id)
        if(error){
            alert("Club doesn't exist, Handsome");
        }
        // @ts-ignore
        localStorage.set(id+"", JSON.stringify(data[0]))
    }

    async get_org_list() {
        const tempOrg = new Map<string, Org>();
        this._org.forEach(e => {
            // @ts-ignore
            const data = JSON.parse(localStorage.getItem(e.id + ''))
            // @ts-ignore
            tempOrg.set(data)
        })
        this._org = tempOrg;
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