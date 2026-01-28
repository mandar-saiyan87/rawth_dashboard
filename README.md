# AI Testing Platform – Full Stack Assignment

This project is a **full‑stack web application** built as part of a technical assignment. The application allows users to manage and test **AI scenarios** associated with different agents, including creation, listing, pagination, and deletion of scenarios.

The focus of this implementation is keeping the scope intentionally limited to meet assignment requirements within the given timeframe.

---

## 🚀 Features

- Dashboard layout with sidebar navigation
- Scenario management
  - Create scenario
  - List scenarios
  - Delete scenario (with confirmation)
- Agent‑based scenario filtering
- Pagination with configurable page size (5 / 10 / 20)
- Responsive layout (basic)
- Error‑safe API handling
- Persistent UI preferences (agent & page size)

---

## 🛠 Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- State‑based routing (no React Router)

### Backend
- **Node.js + Express**
- **Prisma ORM**
- **PostgreSQL (NeonDB – serverless)**

---

---

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone <repository-url>
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file:
```env
DATABASE_URL=<NeonDB PostgreSQL connection string>
PORT=3000
```

Run migrations and seed data:
```bash
npx prisma migrate deploy
node prisma/seed.js
```

Start backend server:
```bash
npm run dev
```

---

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:3000
```

Start frontend:
```bash
npm run dev
```

---

## 🔁 Pagination Behavior

- Server‑side pagination
- Supported page sizes: **5, 10, 20** (default = 20)
- Pagination resets automatically when agent or page size changes

---

## 🧠 Design Choices & Technical Decisions

### 1. Routing Strategy
Routing is handled using **local component state** instead of React Router.

**Reasoning:**
- Keeps the application simple and focused on assignment requirements
- Avoids unnecessary routing complexity
- Sufficient for current dashboard‑style UI

---

### 2. State Management
No centralized state management library (Redux, Zustand, Context API) is used.

**Reasoning:**
- The application has a limited number of API calls and shared states
- Local state management keeps the codebase lightweight and readable


---

### 3. Responsiveness
The application supports **basic responsiveness**:
- Sidebar adapts for mobile using a toggle (hamburger menu)
- Content area scrolls independently on desktop
- Mobile layout prioritizes usability over pixel‑perfect design

**Note:**
Advanced responsive behaviors and animations were intentionally excluded to stay within scope.

---

## ⚠️ Known Limitations & Issues

### 1. NeonDB (Serverless PostgreSQL) Behavior
The backend uses **NeonDB (free tier)**, which may:
- Enter idle state after inactivity
- Returning `500` errors but returns data after few retries (Couldn't get enough time to resolve)

**Mitigation Applied:**
- Defensive API handling on frontend
- Graceful error states to prevent UI crashes

---

### 2. Limited Feature Scope
- Authentication and authorization are not implemented
- Some dashboard tabs are placeholders (as allowed by assignment)
- Scenario detail view is intentionally omitted

---

## ✅ Assignment Coverage Summary

- ✔ Scenario CRUD (Create, Read, Delete)
- ✔ Pagination & filtering
- ✔ Agent association
- ✔ Backend + database integration
- ✔ Error handling
- ✔ Clean UI & code organization

---

## 🧪 Testing Notes

- APIs tested using browser and Postman
- UI tested across desktop and mobile breakpoints

---


