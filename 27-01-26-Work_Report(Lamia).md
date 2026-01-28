# Learning Milestones - Next.js App Router & TypeScript
**Developer:** Rifa Sanjita Lamia
**Date:** 27-01-26
**Status:** Completed
**Team:** AI Team, Unisoft Systems Limited

---

## MILESTONE 1: NEXT.JS PROJECT SETUP & CONFIGURATION
**Focus:** Setting up Next.js 16 with TypeScript and configuring development environment
**Status:** ✅ COMPLETED

### Overview
Set up a Next.js 16 project with TypeScript, configured ESLint, Tailwind CSS v4, and React Compiler for optimized performance.

### Objectives Achieved
- ✅ Initialize Next.js 16 project with TypeScript
- ✅ Configure ESLint with Next.js rules
- ✅ Set up Tailwind CSS v4
- ✅ Configure React Compiler
- ✅ Set up TypeScript configuration

### Completed Tasks

#### Task 1.1: Project Initialization ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Next.js Setup
  - [x] Created Next.js 16 project
  - [x] Configured TypeScript
  - [x] Set up React 19
  - [x] Installed dependencies
- [x] Configuration Files
  - [x] Configured next.config.ts
  - [x] Set up tsconfig.json
  - [x] Configured eslint.config.mjs
  - [x] Set up Tailwind CSS

### Success Criteria Met
- ✅ Next.js project created successfully
- ✅ TypeScript configured correctly
- ✅ ESLint working properly
- ✅ Tailwind CSS integrated
- ✅ React Compiler enabled

### Deliverables
1. **Configuration Files**
   - next.config.ts - Next.js configuration
   - tsconfig.json - TypeScript configuration
   - eslint.config.mjs - ESLint configuration
   - package.json - Project dependencies

---

## MILESTONE 2: NEXT.JS APP ROUTER STRUCTURE
**Focus:** Understanding and implementing App Router with route groups
**Status:** ✅ COMPLETED

### Overview
Learned Next.js App Router structure including route groups, layouts, and nested routing to organize application structure effectively.

### Objectives Achieved
- ✅ Understand App Router file structure
- ✅ Learn route groups (parentheses)
- ✅ Master layouts and nested layouts
- ✅ Understand page components
- ✅ Learn dynamic routes

### Completed Tasks

#### Task 2.1: Route Groups & Layouts ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Root Layout
  - [x] Created root layout with fonts
  - [x] Configured Geist fonts
  - [x] Set up metadata
  - [x] Applied CSS classes
- [x] Route Groups
  - [x] Created (root) route group
  - [x] Created (dashboard) route group
  - [x] Added layouts for each group
  - [x] Organized routes by functionality

### Success Criteria Met
- ✅ Understand App Router structure
- ✅ Can create route groups
- ✅ Can implement layouts
- ✅ Can organize routes
- ✅ Understand nested routing

### Deliverables
1. **Layout Files**
   - app/layout.tsx - Root layout
   - app/(root)/layout.tsx - Root group layout
   - app/(dashboard)/layout.tsx - Dashboard group layout

---

## MILESTONE 3: API ROUTES & CRUD OPERATIONS
**Focus:** Building RESTful API routes with Next.js App Router
**Status:** ✅ COMPLETED

### Overview
Implemented API routes using Next.js App Router for CRUD operations on a books resource, including GET, POST, PUT, and DELETE methods.

### Objectives Achieved
- ✅ Understand Next.js API routes
- ✅ Learn route handlers (GET, POST, PUT, DELETE)
- ✅ Master dynamic API routes
- ✅ Learn request/response handling
- ✅ Understand JSON data handling

### Completed Tasks

#### Task 3.1: API Route Implementation ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Database Setup
  - [x] Created mock database (app/api/db.ts)
  - [x] Defined book data structure
  - [x] Exported data array
- [x] GET & POST Routes
  - [x] Implemented GET handler
  - [x] Implemented POST handler
  - [x] Handled JSON responses
  - [x] Added new books to database
- [x] Dynamic API Routes
  - [x] Created [id] dynamic route
  - [x] Implemented PUT handler
  - [x] Implemented DELETE handler
  - [x] Handled parameter extraction

### Success Criteria Met
- ✅ Can create API routes
- ✅ Understand route handlers
- ✅ Can implement CRUD operations
- ✅ Can handle dynamic routes
- ✅ Can parse request data

### Deliverables
1. **API Files**
   - app/api/db.ts - Mock database
   - app/api/books/route.ts - Books collection API
   - app/api/books/[id]/route.ts - Single book API

---

## MILESTONE 4: DYNAMIC ROUTES & PAGE COMPONENTS
**Focus:** Creating dynamic routes and page components with data fetching
**Status:** ✅ COMPLETED

### Overview
Implemented dynamic routes for user details and created page components with server-side data fetching using Next.js App Router.

### Objectives Achieved
- ✅ Understand dynamic routes
- ✅ Learn page components
- ✅ Master server-side data fetching
- ✅ Learn async components
- ✅ Understand params handling

### Completed Tasks

#### Task 4.1: Dynamic Routes & Pages ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] User Pages
  - [x] Created users listing page
  - [x] Implemented user links
  - [x] Used Next.js Link component
  - [x] Styled with Tailwind CSS
- [x] Dynamic User Details
  - [x] Created [id] dynamic route
  - [x] Implemented async page component
  - [x] Extracted params from Promise
  - [x] Displayed user ID
- [x] Books Page with Data Fetching
  - [x] Created books page
  - [x] Implemented async data fetching
  - [x] Fetched from API route
  - [x] Displayed JSON data

### Success Criteria Met
- ✅ Can create dynamic routes
- ✅ Can implement async components
- ✅ Can fetch data server-side
- ✅ Can handle route params
- ✅ Can display data in components

### Deliverables
1. **Page Components**
   - app/(dashboard)/dashboard/users/page.tsx - Users listing
   - app/(dashboard)/dashboard/users/[id]/page.tsx - User details
   - app/(root)/books/page.tsx - Books with API data

---

## MILESTONE 5: ERROR HANDLING & COMPONENTS
**Focus:** Implementing error boundaries and reusable components
**Status:** ✅ COMPLETED

### Overview
Created error boundary components and reusable components for better error handling and code organization in Next.js.

### Objectives Achieved
- ✅ Understand error boundaries
- ✅ Learn client components
- ✅ Master error handling
- ✅ Learn useEffect hooks
- ✅ Understand component reusability

### Completed Tasks

#### Task 5.1: Error Handling & Components ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Error Boundary
  - [x] Created error component
  - [x] Implemented 'use client' directive
  - [x] Added error logging
  - [x] Implemented reset functionality
- [x] Reusable Components
  - [x] Created Hello component
  - [x] Created Loader component
  - [x] Used client-side directives
  - [x] Exported components

### Success Criteria Met
- ✅ Can create error boundaries
- ✅ Understand client components
- ✅ Can handle errors
- ✅ Can create reusable components
- ✅ Understand component lifecycle

### Deliverables
1. **Component Files**
   - app/(root)/error.tsx - Error boundary
   - components/hello.tsx - Hello component
   - app/loader.tsx - Loader component

---

## MILESTONE 6: TYPESCRIPT TYPE DEFINITIONS & ESLINT FIX
**Focus:** Managing TypeScript declarations and fixing linting issues
**Status:** ✅ COMPLETED

### Overview
Configured global TypeScript declarations for module resolution and fixed ESLint issues in the codebase.

### Objectives Achieved
- ✅ Understand module declarations
- ✅ Learn global type definitions
- ✅ Master ESLint configuration
- ✅ Fix linting issues
- ✅ Understand type safety

### Completed Tasks

#### Task 6.1: Type Definitions & Linting ✅
**Duration:** [X] hours | **Status:** Completed

**Completed Steps:**
- [x] Global Type Definitions
  - [x] Created global.d.ts file
  - [x] Declared CSS modules
  - [x] Declared image modules
  - [x] Configured asset imports
- [x] ESLint Fix
  - [x] Identified unused variable
  - [x] Removed unused 'src' declaration
  - [x] Verified linting passes
  - [x] Maintained type safety

### Success Criteria Met
- ✅ Can create module declarations
- ✅ Understand type definitions
- ✅ Can fix linting issues
- ✅ Can configure ESLint
- ✅ Maintain code quality

### Deliverables
1. **Type Definition Files**
   - global.d.ts - Global TypeScript declarations

---

## OVERALL LEARNING COMPLETION SUMMARY

### Completion Status
- **Milestone 1:** ✅ Next.js Project Setup - COMPLETED
- **Milestone 2:** ✅ Next.js App Router Structure - COMPLETED
- **Milestone 3:** ✅ API Routes & CRUD Operations - COMPLETED
- **Milestone 4:** ✅ Dynamic Routes & Page Components - COMPLETED
- **Milestone 5:** ✅ Error Handling & Components - COMPLETED
- **Milestone 6:** ✅ TypeScript Type Definitions & ESLint Fix - COMPLETED

### Skills Acquired
1. **Next.js App Router**
   - ✅ Route groups and layouts
   - ✅ Dynamic routes
   - ✅ Nested routing
   - ✅ Page components

2. **API Development**
   - ✅ Route handlers
   - ✅ CRUD operations
   - ✅ Dynamic API routes
   - ✅ JSON handling

3. **TypeScript**
   - ✅ Type definitions
   - ✅ Module declarations
   - ✅ Async/await patterns
   - ✅ Type safety

4. **React Components**
   - ✅ Client components
   - ✅ Server components
   - ✅ Error boundaries
   - ✅ Reusable components

5. **Development Tools**
   - ✅ ESLint configuration
   - ✅ Tailwind CSS v4
   - ✅ React Compiler
   - ✅ TypeScript configuration

### Key Topics Covered
- **Next.js 16:** App Router, Route Groups, Dynamic Routes, API Routes
- **React 19:** Server Components, Client Components, Error Boundaries
- **TypeScript:** Type Definitions, Module Declarations, Async Components
- **API Development:** RESTful Routes, CRUD Operations, JSON Handling
- **Styling:** Tailwind CSS v4, CSS Modules, Global CSS

### Practice Files Completed
1. ✅ next.config.ts - Next.js configuration with React Compiler
2. ✅ tsconfig.json - TypeScript configuration
3. ✅ eslint.config.mjs - ESLint configuration
4. ✅ package.json - Project dependencies
5. ✅ app/layout.tsx - Root layout with fonts
6. ✅ app/(root)/layout.tsx - Root group layout
7. ✅ app/(dashboard)/layout.tsx - Dashboard group layout
8. ✅ app/(root)/about/page.tsx - About page
9. ✅ app/(dashboard)/dashboard/analytics/page.tsx - Analytics page
10. ✅ app/(dashboard)/dashboard/users/page.tsx - Users listing
11. ✅ app/(dashboard)/dashboard/users/[id]/page.tsx - User details
12. ✅ app/(root)/books/page.tsx - Books with API data
13. ✅ app/api/db.ts - Mock database
14. ✅ app/api/books/route.ts - Books collection API
15. ✅ app/api/books/[id]/route.ts - Single book API
16. ✅ app/(root)/error.tsx - Error boundary
17. ✅ components/hello.tsx - Hello component
18. ✅ app/loader.tsx - Loader component
19. ✅ global.d.ts - Global type definitions

### Learning Resources Used
- Next.js 16 Documentation
- TypeScript Handbook
- Tailwind CSS v4 Documentation
- React 19 Documentation

### Next Steps
- Implement authentication with NextAuth.js
- Add database integration (PostgreSQL/Prisma)
- Implement state management with Zustand/Redux
- Add form validation with Zod
- Deploy to Vercel
- Add testing with Jest/Playwright

---

## CODE EXAMPLES

### next.config.ts Code Examples
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
```

### tsconfig.json Code Examples
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "global.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### eslint.config.mjs Code Examples
```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### package.json Code Examples
```json
{
  "name": "gitnnextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "babel-plugin-react-compiler": "^1.0.0",
    "next": "16.1.5",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### app/layout.tsx Code Examples
```typescript
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

### app/(root)/layout.tsx Code Examples
```typescript
import React from 'react';

const layout = ( { children}: { children: React.ReactNode}) => {
  return (
    <div>
        <p>Navbar</p>
        {children}
    </div>
  )
}

export default layout
```

### app/(dashboard)/layout.tsx Code Examples
```typescript
import React from 'react';

const layout = ( { children}: { children: React.ReactNode}) => {
  return (
    <div>
        <p>Dashboard Navbar</p>
        {children}
    </div>
  )
}

export default layout
```

### app/(root)/about/page.tsx Code Examples
```typescript
const hello = () => {
  throw new Error('Not implemented');

  return (        
    <h1>I am About page</h1>
  )
}

export default hello
```

### app/(dashboard)/dashboard/analytics/page.tsx Code Examples
```typescript
const Analytics = () => {
  return (
    <div>Analytics</div>
  )
}

export default Analytics
```

### app/(dashboard)/dashboard/users/page.tsx Code Examples
```typescript
import Link from "next/dist/client/link"

const Users = () => {
  return (
    <div>
      <h1>dashboard Users</h1>

      <ul className="mt-10">
        <li><Link href="/dashboard/users/1">User 1</Link></li>
        <li><Link href="/dashboard/users/2">User 2</Link></li>
        <li><Link href="/dashboard/users/3">User 3</Link></li>
        <li><Link href="/dashboard/users/4">User 4</Link></li>
      </ul>
    </div>
  )
}

export default Users
```

### app/(dashboard)/dashboard/users/[id]/page.tsx Code Examples
```typescript
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Showing user details of #{id}</h1>
    </div>
  );
};

export default UserDetails;
```

### app/(root)/books/page.tsx Code Examples
```typescript
async function Page() {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();

    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    );
}

export default Page;
```

### app/api/db.ts Code Examples
```typescript
const books = [
    { id: 1, title: "1984" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "The Great Gatsby" },
    { id: 4, title: "Pride and Prejudice" },
];

export default books;
```

### app/api/books/route.ts Code Examples
```typescript
import books from "@/app/api/db";

export async function GET() {
    return Response.json(books);
}

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);

    return Response.json(books);
}
```

### app/api/books/[id]/route.ts Code Examples
```typescript
import books from "@/app/api/db";

export async function PUT(
    request: Request,
    context: { params: { id: string } },
) {
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((b) => b.id === id);

    books[index] = book;

    return Response.json(books);
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } },
) {
    const id = +context.params.id;

    const index = books.findIndex((b) => b.id === id);

    books.splice(index, 1);

    return Response.json(books);
}
```

### app/(root)/error.tsx Code Examples
```typescript
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```

### components/hello.tsx Code Examples
```typescript
'use client';

const hello = () => {
    console.log('I am hello component');
  return (
    <div>hello</div>
  )
}

export default hello
```

### app/loader.tsx Code Examples
```typescript
import React from 'react'

const Loader = () => {
  return (
    <div>___ Spinner ___</div>
  )
}

export default Loader
```

### global.d.ts Code Examples
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// Global CSS
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

// Other asset types
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
```

### app/globals.css Code Examples
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

---

## THEORY & CONCEPTS

### Next.js App Router

#### What is App Router?
The App Router is a new routing system in Next.js 13+ that uses the `app/` directory. It provides:
- **File-system based routing**: Routes are defined by files and folders
- **Server Components by default**: Better performance and SEO
- **Nested layouts**: Shared UI between routes
- **Streaming**: Progressive rendering for better UX
- **Route Groups**: Organize routes without affecting URL structure

#### Route Groups
Route groups are created by wrapping folder names in parentheses `(group-name)`. They allow you to:
- Organize files without affecting URL structure
- Create multiple layouts in the same route segment
- Co-locate files logically

Example:
```
app/
├── (root)/          # Route group - doesn't appear in URL
│   ├── layout.tsx   # Layout for root group
│   ├── about/page.tsx
│   └── books/page.tsx
└── (dashboard)/     # Route group - doesn't appear in URL
    ├── layout.tsx   # Layout for dashboard group
    └── dashboard/
        ├── analytics/page.tsx
        └── users/
            ├── page.tsx
            └── [id]/page.tsx  # Dynamic route
```

#### Dynamic Routes
Dynamic routes use square brackets `[param]` to create dynamic segments:
```typescript
// app/dashboard/users/[id]/page.tsx
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Extract dynamic parameter
  return <div>User ID: {id}</div>;
};
```

### API Routes in App Router

#### Route Handlers
Route handlers are defined in `route.ts` files within the `app/api/` directory. They support HTTP methods:

```typescript
// app/api/books/route.ts
export async function GET() {
  return Response.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ success: true });
}
```

#### Dynamic API Routes
Dynamic API routes use `[param]` in the folder name:
```typescript
// app/api/books/[id]/route.ts
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  // Update logic
}
```

### Server vs Client Components

#### Server Components (Default)
- Render on the server
- Can access databases and APIs directly
- Smaller bundle size (no JS sent to client)
- Better SEO

```typescript
// Default - Server Component
const Page = async () => {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
};
```

#### Client Components
- Render in the browser
- Can use hooks (useState, useEffect)
- Can handle user interactions
- Marked with `'use client'` directive

```typescript
'use client'; // Client Component

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

### TypeScript Module Declarations

#### Why Module Declarations?
TypeScript needs to know the types of imported files. Module declarations tell TypeScript what to expect when importing non-TypeScript files.

```typescript
// Declare CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Declare image imports
declare module '*.png' {
  const src: string;
  export default src;
}
```

### React Compiler

#### What is React Compiler?
React Compiler is an automatic optimization tool that:
- Automatically memoizes components
- Optimizes re-renders
- Eliminates need for useMemo/useCallback in many cases
- Enabled in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

### Tailwind CSS v4

#### New Features in v4
- **Native CSS-first configuration**: Use CSS instead of JavaScript
- **@theme inline**: Define theme in CSS
- **@import "tailwindcss"**: Import Tailwind directly
- **Better performance**: Faster build times

```css
@import "tailwindcss";

@theme inline {
  --color-primary: #3b82f6;
  --font-sans: var(--font-geist-sans);
}
```

### Error Boundaries

#### What are Error Boundaries?
Error boundaries catch JavaScript errors in component trees and display a fallback UI instead of crashing the app.

```typescript
'use client'; // Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

---

**Document Created:** 27-01-26
**Developer:** Rifa Sanjita Lamia
**Status:** Completed
**Updated:** Added all code examples and theory for Next.js App Router, API Routes, and TypeScript configuration
