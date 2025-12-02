/*
  # Comprehensive RLS Policy Fix for Lead Consultations

  1. Security Changes
    - Drop all existing policies on lead_consultations table
    - Recreate proper policies for anonymous inserts and authenticated reads
    - Ensure RLS is properly enabled

  2. Policies
    - Allow anonymous users to insert lead consultation requests
    - Allow authenticated users to read all lead consultations
    - Prevent anonymous users from reading data (privacy protection)
*/

-- Drop all existing policies on the table
DROP POLICY IF EXISTS "Anyone can submit lead consultations" ON lead_consultations;
DROP POLICY IF EXISTS "Authenticated users can read lead consultations" ON lead_consultations;

-- Ensure RLS is enabled
ALTER TABLE lead_consultations ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous inserts (form submissions)
CREATE POLICY "Enable insert for anonymous users" ON lead_consultations
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create policy for authenticated reads (admin access)
CREATE POLICY "Enable read for authenticated users" ON lead_consultations
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Grant necessary permissions to anon role
GRANT INSERT ON lead_consultations TO anon;
GRANT USAGE ON SCHEMA public TO anon;