-- Create the 'products' storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true)
ON CONFLICT (id) DO NOTHING;

-- Policy to allow public read access to the bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'products' );

-- Policy to allow authenticated uploads (temporarily allow public/anon for script)
CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'products' );

-- Policy to allow update
CREATE POLICY "Public Update"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'products' );
