const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });

async function migrate() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL is not defined in .env.local');
        process.exit(1);
    }

    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false } // Supabase requires SSL, but we might need to allow self-signed if pooler certificates aren't set up perfectly or just standard logic
    });

    try {
        await client.connect();
        console.log('Connected to database.');

        const migrationPath = path.join(__dirname, '../supabase/migrations/005_seed_macbooks.sql');
        const sql = fs.readFileSync(migrationPath, 'utf8');

        console.log('Running migration...');
        await client.query(sql);
        console.log('Migration completed successfully.');
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

migrate();
