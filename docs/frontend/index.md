# Frontend

Documentation on features and changes made to the frontend of the application.

# Overall Changes

## These are the main changes made on frontend:

- Improved the product listing page to display products in a more organized and user-friendly manner.
- The atomic design has been implemented to ensure consistency and reusability across the application.
- A context API has been introduced to manage global state and improve data flow between components.
- The search functionality has been enhanced to allow users to search for products by name, category and description.
- Improved UX and UI design to make the application more visually appealing and user-friendly.
- Add skeleton while product data is loading.

# Products Search

This is the page that contains most of my work. to access it you can go to `http://localhost:3000/product-search`

- It renders the same improved component used in the product listing page, but with a search bar at the top. Users can now search for products by name, category and description, making it easier to find the products they are looking for.

## Folder Structure

- `app/products/layout.tsx` - Product page layout
- `app/products/page.tsx` - Product Main Page
- `app/products/[productId]/page.tsx` - Page for the single page description
- `app/product-search/page.tsx` - Product Search Page
- `src/mock/small/products-new.json` - Mock JSON for Prodcut list
- `src/mock/large/products-new.json` - Mock JSON for Prodcut list

## Steps to run these new features

1. Run `pnpm install` in order to install the dependencies
2. Run `pnpm dev` to start the server
3. Go to `http://localhost:3000/product-search` to see the new features

# Next Steps

- Create a filter to filter products by rate and price range.
- Improve the product detail page to display more information about the product.
