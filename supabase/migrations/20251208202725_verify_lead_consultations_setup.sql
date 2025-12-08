/*
  # Verify and Update Lead Consultations Configuration
  
  1. Purpose
    - Ensure the lead_consultations table exists with correct structure
    - Verify RLS policies are properly configured for anonymous inserts
    - Ensure all required columns are present
    
  2. Changes
    - Recreate table if needed (with IF NOT EXISTS)
    - Update RLS policies for anonymous form submissions
    - Ensure proper indexes exist
    
  3. Security
    - RLS enabled for all operations
    - Anonymous users can INSERT (for form submissions)
    - Authenticated users can SELECT (for admin review)
    
  4. Notes
    - This migration is idempotent and safe to run multiple times
    - Preserves existing data
*/

-- Ensure the table exists with correct structure
CREATE TABLE IF NOT EXISTS lead_consultations (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  company text NOT NULL,
  problems text NOT NULL,
  additional_info text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE lead_consultations ENABLE ROW LEVEL SECURITY;

-- Drop old policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Anyone can submit lead consultations" ON lead_consultations;
DROP POLICY IF EXISTS "Authenticated users can read lead consultations" ON lead_consultations;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON lead_consultations;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON lead_consultations;

-- Create fresh policies
CREATE POLICY "Allow anonymous inserts"
  ON lead_consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
  ON lead_consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure indexes exist
CREATE INDEX IF NOT EXISTS idx_lead_consultations_email ON lead_consultations(email);
CREATE INDEX IF NOT EXISTS idx_lead_consultations_created_at ON lead_consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_consultations_service ON lead_consultations(service);