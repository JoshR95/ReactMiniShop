# React Mini Shop

A modern e-commerce application built with React frontend and Laravel backend API.

## 🏗️ Project Structure

```
ReactMiniShop/
├── frontend/          # React + Vite frontend application
└── backend/           # Laravel API backend
```

## 🚀 Technologies Used

### Frontend
- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client (to be installed)
- **React Router** - Client-side routing (to be installed)

### Backend
- **Laravel** - PHP framework
- **Laravel Sanctum** - API authentication
- **SQLite/MySQL** - Database

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **PHP** (v8.1 or higher)
- **Composer** - PHP dependency manager

## 🛠️ Setup Instructions

### 1. Clone or Navigate to Project
```bash
cd C:\myProjects\ReactMiniShop
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Copy environment file
copy .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Start the Laravel server
php artisan serve
```

The backend API will run on `http://localhost:8000`

### 3. Frontend Setup

```bash
# Navigate to frontend (from project root)
cd frontend

# Install dependencies
npm install

# Install additional packages
npm install axios react-router-dom

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## ⚙️ Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```bash
# Frontend environment variables
REACT_APP_API_URL=http://localhost:8000
```

**Important Notes:**
- The `.env` file is automatically ignored by Git for security
- Each developer needs to create their own `.env` file
- For production, change `REACT_APP_API_URL` to your production API URL

### Backend Environment Variables

The backend uses Laravel's `.env` file (already configured):
- Database connection settings
- Application key
- API configuration

## 🎯 Features (Planned)

- [ ] Product listing and display
- [ ] Search functionality
- [ ] Filter by category, price, etc.
- [ ] Shopping cart
- [ ] User authentication
- [ ] Checkout process
- [ ] Order management

## 🔌 API Endpoints

### Test Endpoint
- `GET /api/test` - Verify API is running

### Products (To be implemented)
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Authentication (To be implemented)
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout

## 📝 Development Notes

- Backend runs on port **8000** (`php artisan serve`)
- Frontend runs on port **5173** (`npm run dev`)
- API routes are in `backend/routes/api.php`
- React components are in `frontend/src/`

## 🧪 Testing the Setup

1. Start the backend server:
   ```bash
   cd backend
   php artisan serve
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Test the API:
   - Visit `http://localhost:8000/api/test` in your browser
   - You should see a JSON response

## 📚 Next Steps

1. Set up database models and migrations for products
2. Create product controllers and API endpoints
3. Build React components for product display
4. Implement search and filter functionality
5. Add authentication with Laravel Sanctum
6. Create shopping cart functionality.

## 🤝 Contributing

This is a personal project for learning purposes.

## 📄 License

This project is open source and available under the MIT License.


