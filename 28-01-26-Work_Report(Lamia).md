# Learning Milestones - Next.js CRUD with Prisma & MySQL
**Developer:** Rifa Sanjita Lamia
**Date:** 28-01-26
**Status:** Completed
**Team:** AI Team, Unisoft Systems Limited

---

## MILESTONE 1: PRISMA ORM & DATABASE SETUP
**Focus:** Setting up Prisma ORM with MySQL database and configuring environment
**Status:** ✅ COMPLETED

### Overview
Integrated Prisma ORM with MySQL database to handle data persistence. Configured database connection, created schema, and set up Prisma Client for database operations.

### Objectives Achieved
- ✅ Install and configure Prisma ORM
- ✅ Set up MySQL database connection
- ✅ Create database schema with User model
- ✅ Configure environment variables
- ✅ Generate Prisma Client
- ✅ Set up database migrations

### Completed Tasks

#### Task 1.1: Prisma Installation & Configuration ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Prisma Installation
  - [x] Installed Prisma CLI and Client
  - [x] Added Prisma dependencies to package.json
  - [x] Configured Prisma scripts
- [x] Database Configuration
  - [x] Set up MySQL connection string
  - [x] Configured environment variables (.env)
  - [x] Set up Prisma schema
- [x] Migration Setup
  - [x] Created initial migration
  - [x] Generated Prisma Client
  - [x] Verified database connection

### Success Criteria Met
- ✅ Prisma installed successfully
- ✅ Database connection configured
- ✅ Schema created with User model
- ✅ Migration generated and applied
- ✅ Prisma Client working properly

### Deliverables
1. **Configuration Files**
   - prisma/schema.prisma - Database schema definition
   - .env - Environment variables
   - package.json - Updated with Prisma dependencies

---

## MILESTONE 2: PRISMA CLIENT SETUP
**Focus:** Creating a singleton Prisma Client instance for database operations
**Status:** ✅ COMPLETED

### Overview
Created a reusable Prisma Client instance using the singleton pattern to prevent multiple database connections in development mode.

### Objectives Achieved
- ✅ Understand Prisma Client singleton pattern
- ✅ Learn globalThis for hot-reload support
- ✅ Master database connection management
- ✅ Understand development vs production behavior

### Completed Tasks

#### Task 2.1: Prisma Client Configuration ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Client Setup
  - [x] Created Prisma Client instance
  - [x] Implemented singleton pattern
  - [x] Configured globalThis for development
  - [x] Exported client for app-wide use

### Success Criteria Met
- ✅ Prisma Client created
- ✅ Singleton pattern implemented
- ✅ Hot-reload supported
- ✅ Production-ready configuration

### Deliverables
1. **Client Files**
   - app/lib/prisma.js - Prisma Client singleton

---

## MILESTONE 3: USER CRUD API ROUTES
**Focus:** Building RESTful API routes for User CRUD operations with Prisma
**Status:** ✅ COMPLETED

### Overview
Implemented complete CRUD API routes for User resource using Next.js App Router and Prisma ORM, including proper error handling and validation.

### Objectives Achieved
- ✅ Understand Prisma query methods
- ✅ Learn API route handlers with database
- ✅ Master error handling patterns
- ✅ Learn data validation
- ✅ Understand HTTP status codes

### Completed Tasks

#### Task 3.1: Users Collection API ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] GET All Users
  - [x] Implemented findMany query
  - [x] Added ordering by createdAt
  - [x] Handled database errors
  - [x] Returned JSON response
- [x] POST Create User
  - [x] Implemented create query
  - [x] Added email validation
  - [x] Handled duplicate email (P2002)
  - [x] Returned created user with 201 status

#### Task 3.2: Single User API ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] GET Single User
  - [x] Implemented findUnique query
  - [x] Extracted ID from params
  - [x] Handled not found (P2025)
  - [x] Returned user or 404
- [x] PUT Update User
  - [x] Implemented update query
  - [x] Updated email, name, age
  - [x] Handled not found and duplicate
  - [x] Returned updated user
- [x] DELETE User
  - [x] Implemented delete query
  - [x] Handled not found
  - [x] Returned success message

### Success Criteria Met
- ✅ Can create API routes with Prisma
- ✅ Understand Prisma query methods
- ✅ Can implement CRUD operations
- ✅ Can handle errors properly
- ✅ Can validate input data

### Deliverables
1. **API Files**
   - app/api/users/route.js - Users collection API
   - app/api/users/[id]/route.js - Single user API

---

## MILESTONE 4: USER MANAGEMENT FRONTEND
**Focus:** Building a complete user management interface with React
**Status:** ✅ COMPLETED

### Overview
Created a full-featured user management frontend with create, read, update, and delete functionality using React hooks and Tailwind CSS.

### Objectives Achieved
- ✅ Understand React hooks (useState, useEffect)
- ✅ Learn client-side data fetching
- ✅ Master form handling
- ✅ Learn conditional rendering
- ✅ Understand error handling in UI

### Completed Tasks

#### Task 4.1: User Management Interface ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] State Management
  - [x] Set up users state
  - [x] Set up form data state
  - [x] Set up editing mode state
  - [x] Set up loading and error states
- [x] Data Fetching
  - [x] Implemented fetchUsers function
  - [x] Added useEffect for initial load
  - [x] Handled fetch errors
- [x] Form Handling
  - [x] Implemented handleChange
  - [x] Implemented handleSubmit
  - [x] Added create and update logic
  - [x] Implemented form reset
- [x] User Operations
  - [x] Implemented handleEdit
  - [x] Implemented handleDelete
  - [x] Added confirmation dialog
  - [x] Implemented handleCancel
- [x] UI Components
  - [x] Created loading state
  - [x] Created error display
  - [x] Created user form
  - [x] Created users table
  - [x] Added edit/delete buttons

### Success Criteria Met
- ✅ Can create React forms
- ✅ Can fetch data from API
- ✅ Can handle form submission
- ✅ Can manage application state
- ✅ Can create responsive UI with Tailwind

### Deliverables
1. **Frontend Files**
   - app/page.js - User management interface

---

## OVERALL LEARNING COMPLETION SUMMARY

### Completion Status
- **Milestone 1:** ✅ Prisma ORM & Database Setup - COMPLETED
- **Milestone 2:** ✅ Prisma Client Setup - COMPLETED
- **Milestone 3:** ✅ User CRUD API Routes - COMPLETED
- **Milestone 4:** ✅ User Management Frontend - COMPLETED

### Skills Acquired
1. **Prisma ORM**
   - ✅ Schema definition
   - ✅ Client configuration
   - ✅ Query methods (findMany, findUnique, create, update, delete)
   - ✅ Error handling (P2002, P2025)

2. **Database Integration**
   - ✅ MySQL connection setup
   - ✅ Environment variables
   - ✅ Database migrations
   - ✅ Data modeling

3. **API Development**
   - ✅ RESTful API design
   - ✅ CRUD operations
   - ✅ Dynamic routes
   - ✅ Error handling

4. **React Development**
   - ✅ Hooks (useState, useEffect)
   - ✅ Client-side data fetching
   - ✅ Form handling
   - ✅ Conditional rendering

5. **Full Stack Integration**
   - ✅ Frontend-backend communication
   - ✅ State management
   - ✅ Error handling
   - ✅ Loading states

### Key Topics Covered
- **Prisma 6:** Schema, Client, Migrations, Query Methods
- **MySQL:** Database connection, Data modeling
- **Next.js 16:** API Routes, Dynamic Routes, Route Handlers
- **React 19:** Client Components, Hooks, State Management
- **Tailwind CSS v4:** Styling, Responsive Design

### Practice Files Completed
1. ✅ prisma/schema.prisma - Database schema with User model
2. ✅ .env - Environment variables for database connection
3. ✅ package.json - Updated with Prisma dependencies and scripts
4. ✅ app/lib/prisma.js - Prisma Client singleton
5. ✅ app/api/users/route.js - Users collection API (GET, POST)
6. ✅ app/api/users/[id]/route.js - Single user API (GET, PUT, DELETE)
7. ✅ app/page.js - Complete user management frontend
8. ✅ app/layout.js - Root layout with fonts

### Learning Resources Used
- Prisma Documentation
- Next.js 16 Documentation
- React 19 Documentation
- Tailwind CSS v4 Documentation

### Next Steps
- Add user authentication with NextAuth.js
- Implement search and filtering functionality
- Add pagination for users list
- Implement form validation with Zod
- Add unit and integration tests
- Deploy to production with Vercel

---

## CODE EXAMPLES

### prisma/schema.prisma Code Examples
```prisma
generator client {
  provider   = "prisma-client-js"
  engineType = "binary"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  age       Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### .env Code Examples
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

### package.json Code Examples
```json
{
  "name": "next-crud",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "prisma:generate": "prisma generate",
    "prisma:studio": "prisma studio",
    "prisma:migrate": "prisma migrate dev",
    "prisma:push": "prisma db push",
    "prisma:pull": "prisma db pull",
    "prisma:seed": "prisma db seed",
    "prisma:reset": "prisma migrate reset"
  },
  "dependencies": {
    "@prisma/client": "6.19.2",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "25.0.10",
    "@types/react": "19.2.10",
    "dotenv": "^17.2.3",
    "prisma": "6.19.2",
    "tailwindcss": "^4",
    "typescript": "5.9.3"
  }
}
```

### app/lib/prisma.js Code Examples
```javascript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```

### app/api/users/route.js Code Examples
```javascript
import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST create new user
export async function POST(request) {
  try {
    const body = await request.json()
    const { email, name, age } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        age: age ? parseInt(age) : null
      }
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
```

### app/api/users/[id]/route.js Code Examples
```javascript
import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

// GET single user by ID
export async function GET(request, { params }) {
  try {
    const { id } = params
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    )
  }
}

// PUT update user by ID
export async function PUT(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()
    const { email, name, age } = body

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        email,
        name,
        age: age ? parseInt(age) : null
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// DELETE user by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = params
    await prisma.user.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
```

### app/page.js Code Examples
```javascript
'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    id: null,
    email: '',
    name: '',
    age: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
      setError('')
    } catch (err) {
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const url = isEditing ? `/api/users/${formData.id}` : '/api/users'
      const method = isEditing ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name || null,
          age: formData.age || null
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Operation failed')
      }

      // Reset form and fetch updated users
      setFormData({ id: null, email: '', name: '', age: '' })
      setIsEditing(false)
      fetchUsers()
    } catch (err) {
      setError(err.message)
    }
  }

  // Handle edit user
  const handleEdit = (user) => {
    setFormData({
      id: user.id,
      email: user.email,
      name: user.name || '',
      age: user.age || ''
    })
    setIsEditing(true)
    setError('')
  }

  // Handle delete user
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this user?')) {
      return
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to delete user')
      }

      fetchUsers()
    } catch (err) {
      setError(err.message)
    }
  }

  // Handle cancel edit
  const handleCancel = () => {
    setFormData({ id: null, email: '', name: '', age: '' })
    setIsEditing(false)
    setError('')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          User Management System
        </h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {isEditing ? 'Edit User' : 'Add New User'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isEditing ? 'Update User' : 'Add User'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold">
              Users ({users.length})
            </h2>
          </div>
          {users.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              No users found. Add your first user above!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.name || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.age || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
```

### app/layout.js Code Examples
```javascript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## THEORY & CONCEPTS

### Prisma ORM

#### What is Prisma?
Prisma is a next-generation ORM (Object-Relational Mapping) tool for Node.js and TypeScript that provides:
- **Type-safe database access**: Auto-generated types based on your schema
- **Intuitive API**: Clean and readable query methods
- **Database migrations**: Easy schema evolution
- **Excellent developer experience**: Autocompletion, error highlighting

#### Prisma Schema
The Prisma schema defines your data model in a declarative way:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  age       Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Key attributes:**
- `@id`: Primary key
- `@default(autoincrement())`: Auto-incrementing default value
- `@unique`: Unique constraint
- `?`: Optional field
- `@default(now())`: Default to current timestamp
- `@updatedAt`: Auto-update on changes

#### Prisma Client
Prisma Client is an auto-generated query builder:

```javascript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Find many
const users = await prisma.user.findMany()

// Find unique
const user = await prisma.user.findUnique({
  where: { id: 1 }
})

// Create
const newUser = await prisma.user.create({
  data: { email: 'user@example.com', name: 'John Doe' }
})

// Update
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Jane Doe' }
})

// Delete
await prisma.user.delete({
  where: { id: 1 }
})
```

### Singleton Pattern for Prisma Client

#### Why Singleton Pattern?
In Next.js development mode, the hot-reload feature can create multiple Prisma Client instances, which can cause:
- Database connection exhaustion
- Memory leaks
- Performance issues

#### Implementation
```javascript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
```

### Prisma Error Codes

#### Common Error Codes
- **P2002**: Unique constraint violation
  ```javascript
  if (error.code === 'P2002') {
    return NextResponse.json(
      { error: 'Email already exists' },
      { status: 409 }
    )
  }
  ```

- **P2025**: Record not found
  ```javascript
  if (error.code === 'P2025') {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }
  ```

### Next.js API Routes with Prisma

#### Route Handlers
Next.js App Router uses route handlers for API endpoints:

```javascript
import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request) {
  const body = await request.json()
  const user = await prisma.user.create({ data: body })
  return NextResponse.json(user, { status: 201 })
}
```

#### Dynamic Routes
Dynamic routes use `[param]` in the folder name:

```javascript
export async function GET(request, { params }) {
  const { id } = params
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) }
  })
  return NextResponse.json(user)
}
```

### React Hooks for Data Fetching

#### useState Hook
```javascript
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
```

#### useEffect Hook
```javascript
useEffect(() => {
  fetchUsers()
}, []) // Empty dependency array = run once on mount
```

### Client-Side Form Handling

#### Controlled Components
```javascript
const [formData, setFormData] = useState({
  email: '',
  name: '',
  age: ''
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
```

#### Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    fetchUsers() // Refresh data
    setFormData({ email: '', name: '', age: '' }) // Reset form
  }
}
```

### Environment Variables

#### Why .env File?
Environment variables keep sensitive data (like database credentials) out of your codebase.

#### Usage in Prisma
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

#### Access in Code
```javascript
// Prisma automatically reads from .env
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

---

**Document Created:** 28-01-26
**Developer:** Rifa Sanjita Lamia
**Status:** Completed
**Updated:** Added all code examples and theory for Prisma ORM, MySQL integration, CRUD API routes, and User Management frontend
