import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please check your .env file contains:');
  console.error('VITE_SUPABASE_URL=your_supabase_url');
  console.error('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
  throw new Error('Missing Supabase environment variables. Check console for details.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No necesitamos sesiones para formularios anónimos
    autoRefreshToken: false
  },
  global: {
    headers: {
      'X-Client-Info': 'infinity-data-form'
    }
  }
});

// Types for our database
export interface LeadConsultation {
  id?: number;
  name: string;
  email: string;
  service: string;
  company: string;
  problems: string;
  additional_info?: string;
  created_at?: string;
  updated_at?: string;
}