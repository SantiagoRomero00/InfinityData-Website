/*
  # Fix RLS policy for lead_consultations table

  1. Security Updates
    - Drop existing policy if it exists
    - Create new policy that properly allows anonymous inserts
    - Ensure anon role has proper permissions

  2. Changes
    - Allow anonymous users to insert into lead_consultations
    - Grant necessary permissions to anon role
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow anonymous inserts" ON lead_consultations;

-- Create a new policy that allows anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
  ON lead_consultations 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Ensure anon role has insert permissions
GRANT INSERT ON lead_consultations TO anon;

-- Ensure anon role has usage on public schema
GRANT USAGE ON SCHEMA public TO anon;

-- Ensure anon role can use sequences (for auto-generated IDs)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;