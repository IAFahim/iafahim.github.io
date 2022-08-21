import {supabase,profile} from "./SupabseUni";

export interface org {
    id?: number,
    logo_url?: string,
    name: string,
    description?: string
    social_websites?: string[]
}

export default class Org {
    private _org = new Map<string, org>();


    async create_org(profile: profile, org: org) {
        const {data, error} = await supabase
            .from('org')
            .insert([
                {created_by: profile.name, name: org.name, description: org.description},
            ]);
        if (error) {
            alert("Org exists")
        } else {
            // @ts-ignore
            org = {...data};
            this._org.set(org.name, org);
            console.log(this._org);
            localStorage.setItem(org.name, JSON.stringify(org))
        }
    }


    async fetch_joined_org_list(profile: profile) {
        const {data, error} = await supabase
            .from('org_member')
            .select('*').eq('profiles_id', profile.id);
        data?.forEach(e => {
            this._org.set(e.org_id, e);
            localStorage.setItem(e.org_id, JSON.stringify(e))
        })
        return data;
    }

    async fetch_joined_org_data(id: number) {
        const {data, error} = await supabase
            .from('org')
            .select('*').eq('id', id)
        if (error) {
            alert("Org doesn't exist, Handsome");
        }
        // @ts-ignore
        localStorage.set(id + "", JSON.stringify(data[0]))
    }

    async get_org_list() {
        const tempOrg = new Map<string, org>();
        this._org.forEach(e => {
            // @ts-ignore
            const data = JSON.parse(localStorage.getItem(e.id + ''))
            // @ts-ignore
            tempOrg.set(data)
        })
        this._org = tempOrg;
    }

}