/*
  # Create InfinityData_Clients table
  
  1. New Tables
    - `InfinityData_Clients`
      - `id` (serial, primary key)
      - `name` (text, required) - Client name
      - `email` (text, required) - Client email
      - `service` (text, required) - Service requested
      - `company` (text, required) - Company name
      - `problems` (text, required) - Problems to solve
      - `additional_info` (text, optional) - Additional information
      - `created_at` (timestamp) - Record creation time
      - `updated_at` (timestamp) - Record update time
  
  2. Security
    - Enable RLS on `InfinityData_Clients` table
    - Allow anonymous users to INSERT (for form submissions)
    - Allow authenticated users to SELECT (for admin review)
  
  3. Indexes
    - Email index for fast lookups
    - Created_at index for sorting
    - Service index for filtering
*/

-- Create the InfinityData_Clients table
CREATE TABLE IF NOT EXISTS "InfinityData_Clients" (
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

-- Enable Row Level Security
ALTER TABLE "InfinityData_Clients" ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (for form submissions)
CREATE POLICY "Allow anonymous inserts"
  ON "InfinityData_Clients"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all records
CREATE POLICY "Enable read for authenticated users"
  ON "InfinityData_Clients"
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_infinitydata_clients_email ON "InfinityData_Clients"(email);
CREATE INDEX IF NOT EXISTS idx_infinitydata_clients_created_at ON "InfinityData_Clients"(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_infinitydata_clients_service ON "InfinityData_Clients"(service);