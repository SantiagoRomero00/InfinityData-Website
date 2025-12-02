/*
  # Update lead_consultations table ID sequence

  1. Changes
    - Drop existing UUID primary key
    - Add new integer ID column starting from 1
    - Update existing data to have sequential IDs
    - Set up auto-increment sequence

  2. Security
    - Maintain existing RLS policies
    - Preserve all data during migration
*/

-- First, add a new temporary integer column
ALTER TABLE lead_consultations ADD COLUMN new_id SERIAL;

-- Drop the existing primary key constraint
ALTER TABLE lead_consultations DROP CONSTRAINT lead_consultations_pkey;

-- Drop the old id column
ALTER TABLE lead_consultations DROP COLUMN id;

-- Rename the new column to id
ALTER TABLE lead_consultations RENAME COLUMN new_id TO id;

-- Add the new primary key constraint
ALTER TABLE lead_consultations ADD CONSTRAINT lead_consultations_pkey PRIMARY KEY (id);

-- Reset the sequence to start from 1 for new records
SELECT setval(pg_get_serial_sequence('lead_consultations', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM lead_consultations;