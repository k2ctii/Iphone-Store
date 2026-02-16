const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function migrate() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error('No DIRECT_URL or DATABASE_URL found in .env.local');
        process.exit(1);
    }

    console.log('Connecting to database...');
    const client = new Client({
        connectionString,
    });

    try {
        await client.connect();
        console.log('Connected.');

        const sqlPath = path.join(__dirname, '../supabase/migrations/005_seed_macbooks.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        console.log('Executing SQL...');
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
