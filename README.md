# Student Search App

A full-stack **Student Search Application** built using **React (Vite + Tailwind CSS)** for the frontend and **Node.js + Express** for the backend.

This project allows users to search students by name with:

- **Lazy loading** (search starts only after typing 3+ characters)
- **Debounce** (waits before sending API request)
- **Dropdown search results**
- **Student details card**
- **Responsive UI**

---

## Features

- Search students by name
- API request only after **3 or more characters**
- **Debounced search** to reduce unnecessary API calls
- Displays matching students in a dropdown
- Click a student to view details
- Clean responsive UI using Tailwind CSS
- Separate frontend and backend structure

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- CORS
- DotENV

## Project Structure

```bash
student-search-app/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── studentController.js
│   │   ├── routes/
│   │   │   └── studentRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchResults.jsx
│   │   │   └── StudentCard.jsx
│   │   ├── services/
│   │   │   └── studentApi.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── package-lock.json
│
└── README.md
```

## Installation & Running Instructions

Follow the steps below to run the project on your local machine.

---

### 1. Clone the Repository

```bash
git clone <https://github.com/Hitesh1789/Student-Search-App>
cd student-search-app
```
### 2. Environment variables
This project uses .env files for configuration. There are sample files included as .env.sample in both frontend and backend.
Create the real .env files from the samples

### 3. Open two terminals
You will run backend and frontend in two separate terminals:

Terminal A → backend

Terminal B → frontend

### Backend (Terminal A)

Change to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install 
```

If not already installed, install these (one-time):

```bash
npm install express dotenv cors
```

Ensure backend/package.json has scripts:

```bash
"scripts": {
  "dev": "node -r dotenv/config --experimental-json-modules src/server.js"
}
```

Start the backend:
```bash
npm run dev
```

### Frontend (Terminal B)

Change to frontend folder:
```bash
cd frontend
```
Install dependencies:

```bash
npm install
```

If not already installed, install these (one-time):

```bash
npm install axios
npm install tailwindcss @tailwindcss/vite
```

Start the frontend dev server:
```bash
npm run dev
```