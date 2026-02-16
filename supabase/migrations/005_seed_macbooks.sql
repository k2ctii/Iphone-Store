-- Migration: Seed MacBook Data
-- Description: Removes existing products and seeds MacBook Air and MacBook Pro models.

-- 1. Clean up existing product data (cascades to product_colors)
DELETE FROM public.order_items;
DELETE FROM public.reviews;
DELETE FROM public.products;

-- 2. Insert MacBook Air 13-inch (M3)
INSERT INTO public.products (id, slug, name, price, tagline, badge, gradient, image_url, description, storage_capacity, is_active)
VALUES 
(
    'c0a80121-7ac0-4b1c-9b1c-123456789001',
    'macbook-air-13-m3',
    'MacBook Air 13"',
    1099,
    'Lean. Mean. M3 machine.',
    'Best Seller',
    'from-blue-500/20 to-purple-500/20',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
    'The world’s most popular laptop. Now with M3 performance.',
    ARRAY['256GB', '512GB', '1TB', '2TB'],
    true
);

INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
VALUES 
('c0a80121-7ac0-4b1c-9b1c-123456789001', 'Midnight', '#2E3642', 1),
('c0a80121-7ac0-4b1c-9b1c-123456789001', 'Starlight', '#F0E5D3', 2),
('c0a80121-7ac0-4b1c-9b1c-123456789001', 'Space Gray', '#7D7E80', 3),
('c0a80121-7ac0-4b1c-9b1c-123456789001', 'Silver', '#E3E4E5', 4);


-- 3. Insert MacBook Air 15-inch (M3)
INSERT INTO public.products (id, slug, name, price, tagline, badge, gradient, image_url, description, storage_capacity, is_active)
VALUES 
(
    'c0a80121-7ac0-4b1c-9b1c-123456789002',
    'macbook-air-15-m3',
    'MacBook Air 15"',
    1299,
    'Impressively big. Impossibly thin.',
    'New',
    'from-orange-500/20 to-red-500/20',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
    'A spacious Liquid Retina display in a thin and light design.',
    ARRAY['256GB', '512GB', '1TB', '2TB'],
    true
);

INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
VALUES 
('c0a80121-7ac0-4b1c-9b1c-123456789002', 'Midnight', '#2E3642', 1),
('c0a80121-7ac0-4b1c-9b1c-123456789002', 'Starlight', '#F0E5D3', 2),
('c0a80121-7ac0-4b1c-9b1c-123456789002', 'Space Gray', '#7D7E80', 3),
('c0a80121-7ac0-4b1c-9b1c-123456789002', 'Silver', '#E3E4E5', 4);


-- 4. Insert MacBook Pro 14-inch (M4)
INSERT INTO public.products (id, slug, name, price, tagline, badge, gradient, image_url, description, storage_capacity, is_active)
VALUES 
(
    'c0a80121-7ac0-4b1c-9b1c-123456789003',
    'macbook-pro-14-m4',
    'MacBook Pro 14"',
    1599,
    'Mind-blowing. Head-turning.',
    'Pro Performance',
    'from-cyan-500/20 to-blue-500/20',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916255141',
    'The most advanced Mac laptop for pros.',
    ARRAY['512GB', '1TB', '2TB', '4TB', '8TB'],
    true
);

INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
VALUES 
('c0a80121-7ac0-4b1c-9b1c-123456789003', 'Space Black', '#2E2E2E', 1),
('c0a80121-7ac0-4b1c-9b1c-123456789003', 'Silver', '#E3E4E5', 2);


-- 5. Insert MacBook Pro 16-inch (M4)
INSERT INTO public.products (id, slug, name, price, tagline, badge, gradient, image_url, description, storage_capacity, is_active)
VALUES 
(
    'c0a80121-7ac0-4b1c-9b1c-123456789004',
    'macbook-pro-16-m4',
    'MacBook Pro 16"',
    2499,
    'The ultimate pro laptop.',
    'Ultimate',
    'from-purple-500/20 to-pink-500/20',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916255141',
    'Extreme performance with the largest battery ever in a Mac.',
    ARRAY['512GB', '1TB', '2TB', '4TB', '8TB'],
    true
);

INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
VALUES 
('c0a80121-7ac0-4b1c-9b1c-123456789004', 'Space Black', '#2E2E2E', 1),
('c0a80121-7ac0-4b1c-9b1c-123456789004', 'Silver', '#E3E4E5', 2);

