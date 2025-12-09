/*
  # Fix Security Issues

  1. Drop Unused Indexes
    - Remove `idx_lead_consultations_email` from InfinityData_Clients (unused)
    - Remove `idx_lead_consultations_created_at` from InfinityData_Clients (unused)
    - These indexes were created with old names and are not being used

  2. Add RLS Policies for BD Inconvenientes
    - Allow anonymous users to INSERT (for form submissions)
    - Allow authenticated users to SELECT (for admin review)

  3. Add RLS Policies for BD Servicios
    - Allow anonymous users to INSERT (for form submissions)
    - Allow authenticated users to SELECT (for admin review)

  4. Fix Function Search Path
    - Update `get_table_columns` function to use immutable search_path
    - Add `SET search_path = public` to prevent search path manipulation attacks
*/

-- 1. Drop unused indexes from InfinityData_Clients
DROP INDEX IF EXISTS idx_lead_consultations_email;
DROP INDEX IF EXISTS idx_lead_consultations_created_at;

-- 2. Add RLS policies to BD Inconvenientes table
CREATE POLICY "Allow anonymous inserts on BD Inconvenientes"
  ON "BD Inconvenientes"
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users on BD Inconvenientes"
  ON "BD Inconvenientes"
  FOR SELECT
  TO authenticated
  USING (true);

-- 3. Add RLS policies to BD Servicios table
CREATE POLICY "Allow anonymous inserts on BD Servicios"
  ON "BD Servicios"
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users on BD Servicios"
  ON "BD Servicios"
  FOR SELECT
  TO authenticated
  USING (true);

-- 4. Fix function search path for get_table_columns
CREATE OR REPLACE FUNCTION public.get_table_columns(table_name text)
 RETURNS TABLE(column_name text, data_type text, is_nullable text, column_default text)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
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
$function$;