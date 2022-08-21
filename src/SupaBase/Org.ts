import {supabase, profile} from "./SupabseUni";

export interface org {
    id?: number,
    created_by?: number,
    logo_url?: string,
    name: string,
    description?: string
    created?: string,
    updated?: string,
    social_websites?: string[]
}

export interface org_member {
    org_id: number,
    user_id: number,
    status: string
}

export default class Org {
    private _org = new Map<number, org>();
    private _orgId = new Map<number, string>();

    //create orgId set in local storage as {"orgId",{1,2,3}}

    constructor() {
        this.get_all_org_from_local_storage();
    }

    async get_all_org_from_local_storage() {
        let orgId = localStorage.getItem('org');
        if (orgId) {
            // @ts-ignore
            orgId = JSON.parse(orgId);
            console.log(orgId)
            if (Array.isArray(orgId)) {
                // @ts-ignore
                orgId.forEach(e => {
                    this._orgId.set(e.org_id, e.status);
                    let org = localStorage.getItem('org ' + e.org_id);
                    if (org) {
                        // @ts-ignore
                        this._org.set(e.org_id, JSON.parse(org));
                    }
                })
            }
            console.log(this._org);
        }
    }

    async store_org_data(org: org) {
        if (org.id) {
            this._orgId.set(org.id, "pending");
            localStorage.setItem("org", JSON.stringify(this._orgId))
            this._org.set(org.id, org);
            localStorage.setItem("org " + org.id, JSON.stringify(org))
        }
    }

    async store_joined_org(arr: any) {
        arr.forEach((e: org_member) => {
            this._orgId.set(e.org_id, e.status);
            let org = localStorage.getItem('org ' + e.org_id);
            if (org) {
                // @ts-ignore
                this._org.set(e.org_id, JSON.parse(org));
            }
        })
        localStorage.setItem("org", JSON.stringify(arr))

    }

    async load_org_list() {
        localStorage.getItem('org');

    }


    get org(): Map<number, org> {
        return this._org;
    }

    set org(value: Map<number, org>) {
        this._org = value;
    }

    get orgId(): Map<number, string> {
        return this._orgId;
    }

    set orgId(value: Map<number, string>) {
        this._orgId = value;
    }

    async create_org(profile: profile, org: org) {
        const {data, error} = await supabase
            .from('org')
            .insert([
                {created_by: profile.id, name: org.name, description: org.description},
            ]);
        if (error) {
            alert("Org exists")
        } else {
            // @ts-ignore
            this.store_org_data(data[0]);
            console.log(data[0]);
        }

    }

    async fetch_joined_org_list(profile: profile) {
        const {data, error} = await supabase
            .from('org_member')
            .select('*').eq('profiles_id', profile.id);
        if (error) {
            alert("cant fetch org list")
        } else {
            // @ts-ignore
            this.store_joined_org(data);
        }
    }


}