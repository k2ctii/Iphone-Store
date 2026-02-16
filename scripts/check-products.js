const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing credentials");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('slug, name, image_url');

    if (error) {
        console.error("Error fetching products:", error);
        return;
    }

    console.log("Current Products in DB:");
    data.forEach(p => {
        console.log(`- ${p.slug}: ${p.image_url}`);
    });
}

checkProducts();
