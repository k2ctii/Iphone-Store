const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Manually read .env.local
const envPath = path.resolve(__dirname, '..', '.env.local');
let connectionString = '';

try {
    const content = fs.readFileSync(envPath, 'utf8');
    for (const line of content.split('\n')) {
        if (line.trim().startsWith('DATABASE_URL=')) {
            connectionString = line.trim().substring('DATABASE_URL='.length).replace(/^"|"$/g, '');
            break;
        }
    }
} catch (e) {
    console.error("Failed to read .env.local", e);
}

if (!connectionString) {
    console.error("DATABASE_URL not found in .env.local");
    process.exit(1);
}

const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
});

async function runMigrations() {
    try {
        console.log('Connecting to database (Pooler)...');
        await client.connect();
        console.log('Connected successfully.');

        const migrationDir = path.join(__dirname, '..', 'supabase', 'migrations');

        if (!fs.existsSync(migrationDir)) {
            console.error(`Migration directory not found: ${migrationDir}`);
            process.exit(1);
        }

        const files = fs.readdirSync(migrationDir).sort();

        for (const file of files) {
            if (file.endsWith('.sql')) {
                console.log(`\n--------------------------------------------------`);
                console.log(`Running migration: ${file}`);
                const sql = fs.readFileSync(path.join(migrationDir, file), 'utf8');

                try {
                    await client.query(sql);
                    console.log(`✅  Success: ${file}`);
                } catch (qErr) {
                    console.error(`❌  Failed in ${file}:`);
                    console.error(qErr.message);
                    // Some might fail if tables already exist and script uses CREATE TABLE without IF NOT EXISTS
                    // But we will continue
                }
            }
        }

        console.log('\n🎉 Migration process finished.');
    } catch (err) {
        console.error('❌ Connection or Execution error:', err);
    } finally {
        await client.end();
    }
}

runMigrations();
