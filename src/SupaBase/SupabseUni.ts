import {createClient} from "@supabase/supabase-js";
const supabaseUrl = 'https://rputpzgefrvvxneknacq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzYzOTU1MiwiZXhwIjoxOTUzMjE1NTUyfQ.Dt1UNSWSBrPsMAjiTv0fobcyjnne5B0PEHuFzBPfaaY'
export const supabase = createClient(supabaseUrl, supabaseKey)