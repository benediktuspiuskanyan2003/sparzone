
import { createClient } from '@supabase/supabase-js';

// Mengambil URL dan Kunci dari variabel lingkungan
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

// Memeriksa apakah variabel lingkungan sudah diatur
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined in your .env file');
}

// Membuat satu instance klien Supabase untuk digunakan di seluruh aplikasi
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
