# Soilva Sprint 11 — Unified Support Centre

FAQ, Privacy, Terms, and Shipping & Returns remain separate URLs because each serves a different legal or support purpose and may need to be linked directly. Customers do not need to type them manually.

Use one hub:

http://localhost:3000/support

The Support Centre links to every policy, FAQ, contact and distributor-help page.

Run:

npm install
npm run dev


# Sprint 12A.1 — Product Card Standardization

## Fixed

- All seven product images now use the same 600 × 820 canvas
- Every pouch has the same visual height and bottom alignment
- Original proportions are preserved
- No pouch is stretched or cropped
- Added consistent soft shadows
- Product cards now use equal-height flex layouts
- Product buttons remain aligned at the bottom
- Added explicit image dimensions to reduce layout shift
- Original unmodified images are kept in `public/products-original`

## Run

```powershell
npm install
npm run dev
```

Review the product section at:

```text
http://localhost:3000/#products
```
