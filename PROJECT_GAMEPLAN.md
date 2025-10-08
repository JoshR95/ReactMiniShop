# React Mini Shop - Project Game Plan

## 🎯 Project Overview
Build a functional e-commerce site with product listing, search, filters, and shopping cart using React (frontend) and Laravel (backend).

---

## 📋 Phase 1: Database & Backend Foundation (Start Here!)

### 1.1 Set Up Database
**Goal:** Create a products table to store your shop items

**What to learn:**
- Laravel migrations
- Database schema design
- Eloquent models

**Tasks:**
```bash
# In backend directory
php artisan make:model Product -m
```

**What to do:**
1. Open `database/migrations/xxxx_create_products_table.php`
2. Define columns you need:
   - name (string)
   - description (text)
   - price (decimal)
   - category (string)
   - image_url (string)
   - stock (integer)
   - created_at, updated_at (automatic)

3. Run the migration:
```bash
php artisan migrate
```

**Resources to learn:**
- Laravel Migrations: https://laravel.com/docs/migrations
- Data types for columns

---

### 1.2 Create Sample Data (Seeder)
**Goal:** Populate your database with test products

**What to learn:**
- Database seeders
- Faker library for fake data

**Tasks:**
```bash
php artisan make:seeder ProductSeeder
```

**What to do:**
1. Open `database/seeders/ProductSeeder.php`
2. Create 20-30 sample products with different categories
3. Run the seeder:
```bash
php artisan db:seed --class=ProductSeeder
```

**Resources to learn:**
- Laravel Seeders: https://laravel.com/docs/seeding

---

### 1.3 Create Product API Endpoints
**Goal:** Build REST API to get products from database

**What to learn:**
- Laravel controllers
- API routes
- JSON responses
- Query builder / Eloquent

**Tasks:**
```bash
php artisan make:controller Api/ProductController
```

**What to do:**
1. Open `app/Http/Controllers/Api/ProductController.php`
2. Create these methods:
   - `index()` - Get all products
   - `show($id)` - Get single product
   - `search(Request $request)` - Search products
   
3. Add routes in `routes/api.php`:
```php
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/search', [ProductController::class, 'search']);
```

4. Test in browser:
   - http://localhost:8000/api/products
   - http://localhost:8000/api/products/1

**Resources to learn:**
- Laravel Controllers: https://laravel.com/docs/controllers
- Eloquent Queries: https://laravel.com/docs/eloquent

---

### 1.4 Add Search & Filter Functionality
**Goal:** Allow filtering by category, price range, and searching by name

**What to learn:**
- Query parameters
- WHERE clauses
- LIKE queries for search

**What to do:**
1. In your ProductController, accept query parameters:
   - `?search=laptop` - search by name
   - `?category=electronics` - filter by category
   - `?min_price=100&max_price=500` - price range

2. Use Eloquent to build dynamic queries

**Example API calls:**
```
/api/products?search=phone
/api/products?category=electronics
/api/products?min_price=100&max_price=500
/api/products?category=electronics&search=laptop
```

**Resources to learn:**
- Query parameters in Laravel
- Dynamic WHERE clauses

---

## 📋 Phase 2: Frontend - Product Display

### 2.1 Install Frontend Dependencies
**Goal:** Add necessary packages for API calls and routing

**Tasks:**
```bash
# In frontend directory
npm install axios react-router-dom
```

**What these do:**
- `axios` - Make HTTP requests to your Laravel API
- `react-router-dom` - Handle page navigation

---

### 2.2 Set Up React Router
**Goal:** Create a basic page structure with routing

**What to learn:**
- React Router basics
- Component structure
- Page navigation

**What to do:**
1. Create a `pages` folder in `src/`
2. Create these page components:
   - `HomePage.jsx` - Main product listing
   - `ProductDetailPage.jsx` - Single product view
   - `CartPage.jsx` - Shopping cart (later)

3. Set up router in `App.jsx`

**Resources to learn:**
- React Router tutorial: https://reactrouter.com/en/main/start/tutorial

---

### 2.3 Create API Service
**Goal:** Centralize all API calls in one place

**What to learn:**
- Axios configuration
- Async/await
- API service pattern

**What to do:**
1. Create `src/services/api.js`
2. Set up axios with base URL:
```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);
export const searchProducts = (params) => API.get('/products', { params });
```

**Resources to learn:**
- Axios documentation: https://axios-http.com/docs/intro

---

### 2.4 Build Product List Component
**Goal:** Display all products in a grid

**What to learn:**
- useState, useEffect hooks
- Fetching data from API
- Mapping arrays to components
- CSS Grid/Flexbox

**What to do:**
1. Create `src/components/ProductCard.jsx` - Single product display
2. Create `src/components/ProductList.jsx` - Grid of products
3. Fetch products from API on component mount
4. Display in a responsive grid

**Key concepts:**
```javascript
// Fetch data when component loads
useEffect(() => {
  // API call here
}, []);

// Store data in state
const [products, setProducts] = useState([]);

// Map products to components
products.map(product => <ProductCard key={product.id} product={product} />)
```

**Resources to learn:**
- React useEffect: https://react.dev/reference/react/useEffect
- React useState: https://react.dev/reference/react/useState

---

### 2.5 Build Single Product Page
**Goal:** Show detailed view when clicking a product

**What to learn:**
- React Router params
- useParams hook
- Dynamic routing

**What to do:**
1. Create `ProductDetailPage.jsx`
2. Get product ID from URL
3. Fetch single product from API
4. Display full details

**Resources to learn:**
- React Router useParams

---

## 📋 Phase 3: Search & Filter UI

### 3.1 Create Search Bar Component
**Goal:** Allow users to search products by name

**What to learn:**
- Controlled inputs in React
- Debouncing (prevent too many API calls)
- Event handling

**What to do:**
1. Create `src/components/SearchBar.jsx`
2. Add input field that triggers search
3. Update product list based on search query

**Bonus:** Learn about debouncing to wait until user stops typing

---

### 3.2 Create Filter Sidebar
**Goal:** Add category and price filters

**What to learn:**
- Multiple state variables
- Checkboxes/radio buttons in React
- Range inputs

**What to do:**
1. Create `src/components/FilterSidebar.jsx`
2. Add:
   - Category checkboxes (get unique categories from API)
   - Price range sliders (min/max)
   - "Clear filters" button

3. Pass filter values to parent component
4. Update API call with filter parameters

**Resources to learn:**
- React forms and controlled components

---

### 3.3 Combine Search + Filters
**Goal:** Make search and filters work together

**What to learn:**
- State management
- Complex query parameters
- Component communication

**What to do:**
1. Lift state up to parent component
2. Combine search term + filter values
3. Send all parameters to API
4. Update product list

---

## 📋 Phase 4: Shopping Cart

### 4.1 Set Up Cart State Management
**Goal:** Store cart items in React state

**What to learn:**
- Context API or simple state lifting
- Local storage (persist cart on refresh)

**What to do:**
1. Create cart state in App.jsx or use Context
2. Store array of cart items with quantities
3. Save to localStorage
4. Load from localStorage on mount

**Resources to learn:**
- React Context API: https://react.dev/learn/passing-data-deeply-with-context
- localStorage in React

---

### 4.2 Add to Cart Functionality
**Goal:** Let users add products to cart

**What to learn:**
- Array manipulation (add, update, remove)
- Quantity management

**What to do:**
1. Add "Add to Cart" button on ProductCard
2. Update cart state when clicked
3. Handle quantity (if already in cart, increase qty)
4. Show visual feedback (toast/notification)

---

### 4.3 Build Cart Page
**Goal:** Display cart contents and total

**What to learn:**
- Array methods (reduce, map)
- Calculating totals
- Formatting currency

**What to do:**
1. Create `CartPage.jsx`
2. List all cart items with:
   - Product name, price
   - Quantity selector
   - Remove button
3. Calculate and display subtotal
4. Add "Checkout" button (just navigation for now)

---

### 4.4 Cart Badge/Icon
**Goal:** Show cart item count in navigation

**What to learn:**
- Global state access
- Badge UI components

**What to do:**
1. Add cart icon to header/navbar
2. Display total item count
3. Link to cart page

---

## 📋 Phase 5: Polish & Enhancement

### 5.1 Add Loading States
**Goal:** Show spinners while data loads

**What to learn:**
- Loading states
- Conditional rendering
- UI feedback

**What to do:**
1. Add loading state to all API calls
2. Show spinner or skeleton screens
3. Handle errors gracefully

---

### 5.2 Improve Styling
**Goal:** Make it look professional

**What to learn:**
- CSS frameworks (optional: Tailwind, Bootstrap)
- Responsive design
- CSS modules or styled-components

**What to do:**
1. Choose a styling approach
2. Create consistent design system
3. Make mobile responsive
4. Add hover effects, transitions

---

### 5.3 Add Empty States
**Goal:** Handle when there's no data

**What to learn:**
- Conditional rendering
- UX best practices

**What to do:**
1. "No products found" message
2. "Cart is empty" state
3. Error states

---

### 5.4 Pagination (Optional)
**Goal:** Don't load all products at once

**What to learn:**
- Laravel pagination
- Page number handling
- "Load more" or numbered pages

**What to do:**
1. Update Laravel controller to use `paginate()`
2. Add pagination controls in React
3. Handle page changes

---

## 📋 Phase 6: Advanced Features (If Time)

### 6.1 User Authentication
**Goal:** Let users create accounts and login

**What to learn:**
- Laravel Sanctum
- JWT tokens
- Protected routes

**Tasks:**
- Laravel: Authentication endpoints
- React: Login/Register forms
- Store auth token
- Protected routes

---

### 6.2 User Orders
**Goal:** Save orders to database

**What to learn:**
- Database relationships
- Order processing
- Order history

**Tasks:**
- Create Order and OrderItem models
- Checkout process
- Order confirmation page
- User's order history

---

### 6.3 Admin Panel (Advanced)
**Goal:** Manage products from frontend

**What to learn:**
- CRUD operations
- Form validation
- Authorization

**Tasks:**
- Admin login
- Create/edit/delete products
- View orders

---

## 🎓 Learning Resources

### Laravel
- Official Docs: https://laravel.com/docs
- Laracasts (video tutorials): https://laracasts.com
- Laravel Daily (YouTube)

### React
- Official Docs: https://react.dev
- React Router: https://reactrouter.com
- JavaScript.info (JS fundamentals)

### General
- MDN Web Docs (HTML/CSS/JS reference)
- Stack Overflow (when stuck)
- YouTube tutorials for specific topics

---

## 💡 Tips for Success

1. **One thing at a time** - Don't try to do everything at once
2. **Test frequently** - Test each feature before moving on
3. **Console.log is your friend** - Use it to debug
4. **Read error messages carefully** - They usually tell you what's wrong
5. **Google the error** - Someone has likely had the same issue
6. **Take breaks** - Step away when frustrated
7. **Commit to Git regularly** - Save your progress
8. **Don't copy-paste without understanding** - Type code yourself
9. **Experiment** - Break things and fix them
10. **Ask for help** - But try to solve it first

---

## 🚦 Current Status Checklist

- [x] Backend installed (Laravel)
- [x] Frontend installed (React + Vite)
- [x] Backend running (`php artisan serve`)
- [ ] Database configured
- [ ] Products table created
- [ ] Sample data seeded
- [ ] API endpoints created
- [ ] React Router set up
- [ ] Products displayed on frontend
- [ ] Search implemented
- [ ] Filters implemented
- [ ] Shopping cart working
- [ ] Styling completed

---

## 📞 When to Ask for Help

Ask me when you:
- Don't understand a concept after researching
- Get stuck on an error you can't solve
- Need clarification on how something works
- Want code review or feedback
- Need to know "is this the right approach?"

Try yourself first when:
- You get an error (read it, Google it)
- You're not sure about syntax (check docs)
- Something isn't working (use console.log to debug)

**Good luck! Start with Phase 1.1 and work through it step by step. You've got this! 🚀**

