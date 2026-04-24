/*
  # Create quote_requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - customer full name
      - `email` (text, required) - customer email address
      - `phone` (text, required) - customer phone number
      - `company` (text, optional) - company name
      - `vehicle_type` (text, optional) - type of vehicle
      - `quantity` (text, optional) - quantity needed
      - `custom_branding` (text, optional) - material preference (rubber/polyethylene)
      - `timeline` (text, optional) - requested project timeline
      - `message` (text, optional) - additional details
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `quote_requests` table
    - Allow anonymous users to INSERT (public quote form, no auth required)
    - No SELECT/UPDATE/DELETE for public — only service role can read submissions
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text DEFAULT '',
  vehicle_type text DEFAULT '',
  quantity text DEFAULT '',
  custom_branding text DEFAULT '',
  timeline text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
