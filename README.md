# 🚀 Alfido Tech Internship - Full Stack JavaScript Project

**Name:** Ayushi Aswal  
**Internship:** Alfido Tech  
**Duration:** 4-6 Weeks  
**Stack:** MERN (MongoDB, Express.js, React.js, Node.js)

---

## 📋 Project Overview

This repository contains my complete internship work building a full-stack JavaScript application. The project demonstrates proficiency in:

- ✅ RESTful API development with Node.js & Express
- ✅ Database design with MongoDB & Mongoose
- ✅ React frontend with modern UI/UX
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Client-server communication
- ✅ Error handling & validation

---

## 📁 Project Structure
Alfido-Tech-Internship/
│
├── task1-rest-api/ # Backend REST API
│ ├── models/ # MongoDB schemas
│ │ └── Product.js
│ ├── routes/ # API routes
│ │ └── products.js
│ ├── middleware/ # Custom middleware
│ ├── server.js # Entry point
│ ├── .env.example # Environment template
│ ├── package.json # Dependencies
│ └── README.md # API documentation
│
├── task2-react-frontend/ # React Frontend SPA
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── Navbar.js
│ │ │ ├── ProductList.js
│ │ │ ├── ProductForm.js
│ │ │ ├── ProductDetail.js
│ │ │ └── LoadingSpinner.js
│ │ ├── pages/ # Page components
│ │ │ ├── HomePage.js
│ │ │ ├── AddProductPage.js
│ │ │ ├── EditProductPage.js
│ │ │ └── ProductDetailPage.js
│ │ ├── services/ # API services
│ │ │ └── api.js
│ │ ├── App.js # Main app
│ │ ├── App.css # Global styles
│ │ └── index.js # Entry point
│ ├── public/ # Static files
│ ├── package.json # Dependencies
│ └── README.md # Frontend documentation
│
└── README.md # This file

text

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v18+ | JavaScript runtime |
| **Express.js** | v5.x | Backend framework |
| **MongoDB** | v8.x | NoSQL database |
| **Mongoose** | v9.x | ODM for MongoDB |
| **React** | v18.x | Frontend library |
| **React Router** | v6.x | Navigation |
| **Axios** | v1.x | HTTP client |
| **Nodemon** | v3.x | Development auto-restart |

---

## ✨ Features Implemented

### Task 1: RESTful API
- ✅ Full CRUD operations (GET, POST, PUT, DELETE)
- ✅ MongoDB database integration
- ✅ Mongoose schema with validation
- ✅ Error handling & logging
- ✅ Category filtering
- ✅ Postman test collection

### Task 2: React Frontend
- ✅ Responsive product grid display
- ✅ Add/Edit/Delete products
- ✅ Product detail view
- ✅ Category filter
- ✅ Loading states & error handling
- ✅ Modern glassmorphism UI
- ✅ Smooth animations & transitions

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
  ```bash
  node --version
MongoDB (v8 or higher)

bash
mongod --version
Git (for cloning)

bash
git --version
Installation
1. Clone the repository
bash
git clone https://github.com/Ayushi-iAD/Alfido-Tech-Internship.git
cd Alfido-Tech-Internship
2. Set up and run the Backend (Task 1)
bash
cd task1-rest-api
npm install
cp .env.example .env  # Create .env file
Edit .env file:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task1_db
Start MongoDB:

bash
mongod
Start the API server (in a new terminal):

bash
cd task1-rest-api
npm run dev
Expected output:

text
✅ Connected to MongoDB
🚀 Server running on port 5000
📝 API URL: http://localhost:5000/api/products
3. Set up and run the Frontend (Task 2)
bash
cd ../task2-react-frontend
npm install
npm start
Open browser: http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
GET	/api/products?category=electronics	Filter by category
POST	/api/products	Create new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
Sample API Request (POST)
json
{
  "name": "Gaming Laptop",
  "price": 1299.99,
  "description": "High performance gaming laptop",
  "category": "electronics",
  "inStock": true
}
Sample API Response
json
{
  "success": true,
  "data": {
    "_id": "65a1b2c3d4e5f67890abcd12",
    "name": "Gaming Laptop",
    "price": 1299.99,
    "description": "High performance gaming laptop",
    "category": "electronics",
    "inStock": true,
    "createdAt": "2026-01-15T10:30:00.000Z",
    "updatedAt": "2026-01-15T10:30:00.000Z"
  }
}
🎨 Frontend Features
Pages
Route	Page	Description
/	HomePage	Display all products
/add	AddProductPage	Create new product
/edit/:id	EditProductPage	Update existing product
/product/:id	ProductDetailPage	View single product
Components
Navbar - Navigation with glassmorphism effect

ProductList - Grid display with category filter

ProductForm - Form for add/edit operations

ProductDetail - Detailed product view

LoadingSpinner - Animated loading indicator

UI Highlights
🎨 Gradient backgrounds and text

💎 Glassmorphism effects

✨ Smooth animations (fade, slide, pulse)

🌈 Category-based color coding

📱 Fully responsive design

🔥 Hover effects on cards and buttons

🧪 Testing
Test Backend API with Postman
Import the Postman collection from task1-rest-api/task1-products-api.postman_collection.json

Test endpoints:

POST /api/products - Create product

GET /api/products - Get all products

GET /api/products/:id - Get single product

PUT /api/products/:id - Update product

DELETE /api/products/:id - Delete product

Test with curl
bash
# Create a product
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","price":99,"description":"Test","category":"electronics","inStock":true}'

# Get all products
curl http://localhost:5000/api/products
📸 Screenshots
Backend API (Postman)
https://screenshots/api-response.png

Frontend UI
https://screenshots/product-listing.png
https://screenshots/product-form.png
https://screenshots/product-detail.png

🐛 Troubleshooting
Common Issues & Solutions
Issue	Solution
MongoDB connection error	Start MongoDB: mongod
Port 5000 already in use	Change PORT in .env
React can't connect to API	Check API is running on port 5000
CORS error	Ensure cors() middleware is enabled
Module not found	Run npm install in the respective folder
Useful Commands
bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Clear npm cache
npm cache clean --force
📦 Dependencies
Backend (task1-rest-api)
json
{
  "express": "^5.2.1",
  "mongoose": "^9.7.0",
  "dotenv": "^17.4.2",
  "cors": "^2.8.6",
  "bcryptjs": "^3.0.3",
  "jsonwebtoken": "^9.0.3",
  "nodemon": "^3.1.14"
}
Frontend (task2-react-frontend)
json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.23.1",
  "axios": "^1.7.2",
  "react-scripts": "5.0.1"
}
📈 Future Enhancements
Task 3: JWT Authentication & Authorization

Task 4: Docker Containerization & Deployment

User shopping cart functionality

Product search with debouncing

Pagination for large datasets

Dark/Light theme toggle

Product image upload

User reviews & ratings

Email notifications

Payment gateway integration

📝 License
This project is created for educational purposes as part of the Alfido Tech internship program.

👩‍💻 Author
Ayushi Aswal

GitHub: @Ayushi-WD

Internship: Alfido Tech

Date: June 2026
