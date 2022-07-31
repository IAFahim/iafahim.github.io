import {createClient} from "@supabase/supabase-js";
import {Provider} from "@supabase/supabase-js";
const supabaseUrl = 'https://rputpzgefrvvxneknacq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzYzOTU1MiwiZXhwIjoxOTUzMjE1NTUyfQ.Dt1UNSWSBrPsMAjiTv0fobcyjnne5B0PEHuFzBPfaaY'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function loginWithGoogle(proiver: string){
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google'
    })
    return { user, session, error };
}

export async function logout(){
    const {error} = await supabase.auth.signOut();
    return error
}