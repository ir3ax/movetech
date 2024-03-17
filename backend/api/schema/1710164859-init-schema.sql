create table if not exists
public.movetech_product_data (
    product_id uuid not null default gen_random_uuid(),
    img_name text null,
    img JSONB null,
    discount double precision null,
    supplier_price double precision null,
    original_price double precision null,
    discounted_price double precision null,
    description1 text null,
    description2 JSONB null,
    original_quantity double precision null,
    current_quantity double precision null,
    product_status text null,
    product_sold double precision null,
    product_freebies JSONB null,
    created_by uuid null,
    created_at timestamp with time zone null,
    updated_by uuid null,
    updated_at timestamp with time zone null,
    deleted_at timestamp with time zone null,
    constraint pdf_extractor_data_pkey primary key (product_id)
) tablespace pg_default;