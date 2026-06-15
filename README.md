# Task 1 - RESTful API with Node.js, Express & MongoDB

## Features
- Complete CRUD operations
- Mongoose validation
- Error handling
- RESTful API design

## Tech Stack
- Node.js + Express.js
- MongoDB + Mongoose
- Postman for testing

## Setup Instructions
1. Clone repository
2. Run `npm install`
3. Create `.env` with `MONGODB_URI=mongodb://localhost:27017/task1_db`
4. Start MongoDB: `mongod`
5. Run `npm run dev`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products?category=electronics | Filter by category |

## Sample API Response
{
  "success": true,
  "data": {
    "_id": "6a2ad42fb21a06c9945444ec",
    "name": "Gaming Laptop",
    "price": 1299.99,
    "description": "High performance gaming laptop",
    "category": "electronics",
    "inStock": true
  }
}
