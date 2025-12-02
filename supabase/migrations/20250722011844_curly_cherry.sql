/*
  # Create lead consultations table

  1. New Tables
    - `lead_consultations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `service` (text, required)
      - `company` (text, required)
      - `problems` (text, required)
      - `additional_info` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `lead_consultations` table
    - Add policy for public insert access (for form submissions)
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS lead_consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  company text NOT NULL,
  problems text NOT NULL,
  additional_info text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE lead_consultations ENABLE ROW LEVEL SECURITY;

-- Allow public to insert new lead consultations (for form submissions)
CREATE POLICY "Anyone can submit lead consultations"
  ON lead_consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all lead consultations
CREATE POLICY "Authenticated users can read lead consultations"
  ON lead_consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_lead_consultations_email ON lead_consultations(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_lead_consultations_created_at ON lead_consultations(created_at DESC);