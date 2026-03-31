# 🧩 Full Stack CRUD App (React + Express)

This project is a simple full-stack CRUD (Create, Read, Update, Delete) application built using:

* **React (Vite)** for the frontend
* **Express (Node.js)** for the backend API
* **In-memory data** (no database yet)

The purpose of this project is to learn and understand:

* React fundamentals (state, effects, routing)
* API design and routing with Express
* Full CRUD data flow between frontend and backend

---

# 🚀 Features

* View a list of actions
* Create a new action
* View action details
* Edit an existing action
* Delete an action

---

# 🧱 Project Structure

```
project-root/
  src/                  # React frontend
    components/
    pages/
    services/
    App.jsx

  server/               # Express backend
    routes/
      actions.js
    server.js
```

---

# ⚙️ Setup Instructions

## 1. Install frontend

```bash
npm install
```

## 2. Install backend

```bash
cd server
npm install
```

---

# ▶️ Running the app

## Start backend

```bash
cd server
npm start
```

Runs on:

```
http://localhost:3000
```

---

## Start frontend

```bash
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🌐 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /api/actions     | Get all actions     |
| GET    | /api/actions/:id | Get a single action |
| POST   | /api/actions     | Create a new action |
| PUT    | /api/actions/:id | Update an action    |
| DELETE | /api/actions/:id | Delete an action    |

---

# 🧠 Key Concepts Learned

## 1. Frontend vs Backend Routing

* React routes → control UI pages
* Express routes → control data endpoints

---

## 2. API Helpers

Reusable functions to call the backend:

```js
apiGet('/actions')
apiPost('/actions', data)
apiPut('/actions/1', data)
apiDelete('/actions/1')
```

---

## 3. React State & Effects

* `useState` → stores data
* `useEffect` → loads data on page load

---

## 4. Dynamic Routing

### Backend:

```js
router.get('/:id')
```

### Frontend:

```js
const { id } = useParams()
```

---

## 5. CRUD Data Flow

```
User action → API call → backend updates data → React state updates → UI updates
```

---

## 6. In-Memory Data

The app currently stores data in memory:

```js
let actions = [...]
```

* Changes persist while server is running
* Data resets when server restarts

---

# 🔁 CRUD Flow Summary

## Create

* Form → POST `/api/actions`
* Redirect to list

## Read

* GET `/api/actions` → list page
* GET `/api/actions/:id` → detail page

## Update

* Load existing data
* PUT `/api/actions/:id`

## Delete

* DELETE `/api/actions/:id`
* Update local state

---

# ⚠️ Limitations

* No database (data resets on server restart)
* No authentication
* Minimal validation
* Basic UI

---

# 🚀 Future Improvements

* Replace in-memory data with a database (SQLite / SQL Server / Azure SQL)
* Add authentication
* Extract reusable form components
* Improve UI (tables, styling, layout)
* Add loading and error states globally
* Split backend into controllers/services

---

# 🎯 Goal of This Project

This project is designed to build a solid understanding of:

* Full stack data flow
* CRUD operations
* React fundamentals
* API design

---

# 💬 Final Note

This is not about building a perfect app — it’s about understanding the *pattern*.

Once you understand this, you can:

* rebuild it quickly
* extend it easily
* apply it to real-world systems

---

## 🧠 Next Step

Rebuild this project from scratch without looking at the code — using only the concepts.

That’s where it really sticks.
