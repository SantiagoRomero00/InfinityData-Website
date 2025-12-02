/*
  # Fix RLS policies and add missing database functions

  1. Security Updates
    - Enable RLS on lead_consultations table
    - Add policy for anonymous users to insert data (required for form submissions)
    - Grant necessary permissions to anon role

  2. Database Functions
    - Create get_table_columns function for schema validation in diagnostics
    - This function allows the diagnostic tools to properly validate table structure

  3. Important Notes
    - The anonymous insert policy is essential for the lead capture form to work
    - The get_table_columns function enables better error diagnostics
    - All changes are safe and follow security best practices
*/

-- Enable RLS on the lead_consultations table
ALTER TABLE lead_consultations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous inserts" ON lead_consultations;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON lead_consultations;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON lead_consultations;

-- Create policy to allow anonymous users to insert data (for form submissions)
CREATE POLICY "Allow anonymous inserts" 
ON lead_consultations 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to read data (for admin access)
CREATE POLICY "Enable read for authenticated users" 
ON lead_consultations 
FOR SELECT 
TO authenticated 
USING (true);

-- Grant necessary permissions
GRANT INSERT ON lead_consultations TO anon;
GRANT SELECT ON lead_consultations TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- Create the get_table_columns function for diagnostic tools
CREATE OR REPLACE FUNCTION public.get_table_columns(table_name text)
RETURNS TABLE (
    column_name text,
    data_type text,
    is_nullable text,
    column_default text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.column_name::text,
        c.data_type::text,
        c.is_nullable::text,
        c.column_default::text
    FROM
        information_schema.columns AS c
    WHERE
        c.table_schema = 'public' 
        AND c.table_name = get_table_columns.table_name
    ORDER BY
        c.ordinal_position;
END;
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.get_table_columns(text) TO anon;
GRANT EXECUTE ON FUNCTION public.get_table_columns(text) TO authenticated;