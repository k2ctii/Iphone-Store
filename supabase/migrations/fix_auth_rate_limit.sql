-- ============================================================
-- FIX: Bypass Auth Rate Limits (Manual User Creation)
-- ============================================================

-- 1. Enable pgcrypto to hash the password
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Insert a new user specifically to bypass email verification
--    Email:  admin@example.com
--    Pass:   password123
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated', -- 'aud' claim
  'authenticated', -- Postgres role
  'admin@example.com', -- CHANGE THIS EMAIL IF NEEDED
  crypt('password123', gen_salt('bf')), -- secure password hash
  now(), -- This timestamp makes the user "verified"
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Admin User"}',
  now(),
  now(),
  '',
  '',
  '',
  ''
) ON CONFLICT (email) DO NOTHING;

-- 3. The 'public.profiles' table should be automatically populated
--    by the trigger 'on_auth_user_created' defined in 001_initial_schema.sql.
--    No extra insert needed if that trigger is active.
