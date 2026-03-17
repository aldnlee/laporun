import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Tambahkan proteksi biar nggak error pas build
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing! Check your Environment Variables.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');