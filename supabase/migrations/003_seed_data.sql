-- ============================================================
-- iPhone Store — Seed Data
-- Run AFTER 001 and 002 migrations
-- ============================================================

-- ─── PRODUCTS ───────────────────────────────────────────────

INSERT INTO public.products (slug, name, price, tagline, badge, gradient, image_url, description) VALUES
  ('iphone-16-pro-max', 'iPhone 16 Pro Max', 1199.00,
   'The biggest upgrade to Pro.',
   'New',
   'from-amber-900/20 via-zinc-900 to-zinc-900',
   '/products/iphone-16-pro-max.webp',
   'iPhone 16 Pro Max features a 6.9-inch Super Retina XDR display, A18 Pro chip, 48MP camera system with 5x optical zoom, and up to 33 hours of video playback.'),

  ('iphone-16-pro', 'iPhone 16 Pro', 999.00,
   'The ultimate iPhone.',
   'Popular',
   'from-slate-800/30 via-zinc-900 to-zinc-900',
   '/products/iphone-16-pro.webp',
   'iPhone 16 Pro features a 6.3-inch Super Retina XDR display, A18 Pro chip, 48MP Fusion camera, and an aerospace-grade titanium design.'),

  ('iphone-16', 'iPhone 16', 799.00,
   'A total powerhouse.',
   NULL,
   'from-blue-900/20 via-zinc-900 to-zinc-900',
   '/products/iphone-16.webp',
   'iPhone 16 features a 6.1-inch display, A18 chip, 48MP dual camera system, and the new Camera Control button.'),

  ('iphone-15', 'iPhone 15', 699.00,
   'As amazing as ever.',
   NULL,
   'from-cyan-900/20 via-zinc-900 to-zinc-900',
   '/products/iphone-15.webp',
   'iPhone 15 features the Dynamic Island, 48MP main camera, A16 Bionic chip, and USB-C connectivity.');

-- ─── PRODUCT COLORS ─────────────────────────────────────────

-- iPhone 16 Pro Max colors
INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
SELECT id, c.name, c.hex, c.ord
FROM public.products, (VALUES
  ('Desert Titanium',  '#BFA48F', 0),
  ('Natural Titanium', '#C2BCB2', 1),
  ('White Titanium',   '#F2F0ED', 2),
  ('Black Titanium',   '#3C3B37', 3)
) AS c(name, hex, ord)
WHERE slug = 'iphone-16-pro-max';

-- iPhone 16 Pro colors
INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
SELECT id, c.name, c.hex, c.ord
FROM public.products, (VALUES
  ('Desert Titanium',  '#BFA48F', 0),
  ('Natural Titanium', '#C2BCB2', 1),
  ('White Titanium',   '#F2F0ED', 2),
  ('Black Titanium',   '#3C3B37', 3)
) AS c(name, hex, ord)
WHERE slug = 'iphone-16-pro';

-- iPhone 16 colors
INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
SELECT id, c.name, c.hex, c.ord
FROM public.products, (VALUES
  ('Ultramarine', '#7A96D6', 0),
  ('Teal',        '#B0D4C1', 1),
  ('Pink',        '#F2B8C6', 2),
  ('White',       '#F2F0ED', 3),
  ('Black',       '#3C3D41', 4)
) AS c(name, hex, ord)
WHERE slug = 'iphone-16';

-- iPhone 15 colors
INSERT INTO public.product_colors (product_id, name, hex_color, display_order)
SELECT id, c.name, c.hex, c.ord
FROM public.products, (VALUES
  ('Blue',   '#BECDE8', 0),
  ('Pink',   '#F5D1D8', 1),
  ('Yellow', '#F0E5C8', 2),
  ('Green',  '#D1E2D0', 3),
  ('Black',  '#3C3D41', 4)
) AS c(name, hex, ord)
WHERE slug = 'iphone-15';

-- ─── SAMPLE REVIEWS ─────────────────────────────────────────

INSERT INTO public.reviews (product_id, rating, title, body, author_name)
SELECT id, 5, 'Best iPhone Ever!',
  'The camera quality is insane. Night mode is a game-changer for photography enthusiasts.',
  'Sarah M.'
FROM public.products WHERE slug = 'iphone-16-pro-max';

INSERT INTO public.reviews (product_id, rating, title, body, author_name)
SELECT id, 5, 'Perfect Size',
  'The Pro model hits the sweet spot between size and features. Titanium frame feels premium.',
  'James K.'
FROM public.products WHERE slug = 'iphone-16-pro';

INSERT INTO public.reviews (product_id, rating, title, body, author_name)
SELECT id, 4, 'Great Value',
  'Amazing phone for the price. The new colors are beautiful and the camera is fantastic.',
  'Ana R.'
FROM public.products WHERE slug = 'iphone-16';

INSERT INTO public.reviews (product_id, rating, title, body, author_name)
SELECT id, 5, 'Still Going Strong',
  'Upgraded from iPhone 12 and the difference is incredible. Battery life is outstanding.',
  'Michael T.'
FROM public.products WHERE slug = 'iphone-15';
