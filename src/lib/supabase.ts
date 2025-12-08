import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('🔧 Initializing Supabase client...');
console.log('📍 Supabase URL:', supabaseUrl ? '✓ Present' : '✗ Missing');
console.log('🔑 Supabase Key:', supabaseAnonKey ? '✓ Present' : '✗ Missing');

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Missing Supabase environment variables');
  console.warn('Please check your .env file contains:');
  console.warn('VITE_SUPABASE_URL=your_supabase_url');
  console.warn('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
  console.warn('⚠️ Form submissions will fail until this is configured');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
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