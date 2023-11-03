import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzscohgfouzcvpehawyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2NvaGdmb3V6Y3ZwZWhhd3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyODA4OTYsImV4cCI6MjAxMDg1Njg5Nn0.XYc_a5E4iSDF-bw3-dcrnZTw0JyRW5gvaGDxuBd6eDU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
