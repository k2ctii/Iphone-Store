const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("DATABASE_URL must be defined");
    process.exit(1);
}

// Extract project ref from URL to construct storage URL
// DIRECT_URL: postgresql://postgres:pass@db.pjpjwvuhwempzmqcsohe.supabase.co:5432/postgres
// DATABASE_URL: postgres://postgres.pjpjwvuhwempzmqcsohe:pass@aws-1-us-east-1.pooler.supabase.com:6543/postgres

// I can just hardcode the project ref since I know it: pjpjwvuhwempzmqcsohe
// Or I can parse it from NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // https://pjpjwvuhwempzmqcsohe.supabase.co

if (!supabaseUrl) {
    console.error("NEXT_PUBLIC_SUPABASE_URL missing");
    process.exit(1);
}

// Construct storage base URL
const storageBase = `${supabaseUrl}/storage/v1/object/public/products`;

const updates = [
    { slug: 'iphone-16-pro-max', filename: 'iphone-16-pro-max.png' },
    { slug: 'iphone-16-pro', filename: 'iphone-16-pro.png' },
    { slug: 'iphone-16', filename: 'iphone-16.png' },
    { slug: 'iphone-15', filename: 'iphone-15.png' }
];

const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
});

async function runUpdates() {
    try {
        await client.connect();
        console.log("Connected to DB.");

        for (const item of updates) {
            const imageUrl = `${storageBase}/${item.filename}`;
            console.log(`Updating ${item.slug} -> ${imageUrl}`);

            const res = await client.query(
                `UPDATE products SET image_url = $1 WHERE slug = $2`,
                [imageUrl, item.slug]
            );

            console.log(`  Updated ${res.rowCount} rows.`);
        }

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}

runUpdates();
