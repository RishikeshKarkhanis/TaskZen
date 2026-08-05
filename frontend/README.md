# TaskZen Frontend

Modern and responsive frontend for **TaskZen**, a full-stack task management application built with **React**, **Vite**, and **Tailwind CSS**. The application provides an intuitive interface for managing tasks with real-time search, filtering, sorting, dashboard analytics, and seamless integration with the TaskZen Backend API.

---

## Features

* Create, update and delete tasks
* Real-time task search
* Filter tasks by priority, category and status
* Sort tasks by newest, oldest and priority
* Dashboard statistics
* Responsive user interface
* Toast notifications
* Reusable React components
* Custom React Hooks
* Utility-based architecture
* REST API integration with Axios

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* Lucide React

---

## Project Structure

```text
taskzen-frontend
│
├── public
│
├── src
│   ├── api
│   │   └── taskApi.js
│   │
│   ├── assets
│   │
│   ├── components
│   │   ├── common
│   │   ├── dashboard
│   │   ├── layout
│   │   ├── modals
│   │   └── task
│   │
│   ├── hooks
│   │   └── useTasks.js
│   │
│   ├── utils
│   │   ├── filterTasks.js
│   │   ├── formatDate.js
│   │   ├── sortTasks.js
│   │   └── taskStats.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/RishikeshKarkhanis/taskzen-frontend.git

cd taskzen-frontend
```

---

### Install dependencies

```bash
npm install
```

---

### Create a `.env` file

```env
VITE_API_URL=http://localhost:3000/api
```

> Update the URL if your backend is running on a different host or has been deployed.

---

### Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Backend API

TaskZen Frontend communicates with the following REST API endpoints:

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Retrieve all tasks      |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

---

## Environment Variables

| Variable       | Description                         |
| -------------- | ----------------------------------- |
| `VITE_API_URL` | Base URL of the TaskZen Backend API |

---

## Backend Repository

The backend for this project is available at:

```text
https://github.com/RishikeshKarkhanis/taskzen-backend
```

---

## Screenshots

You can add application screenshots here.

```text
screenshots/
├── dashboard.png
├── create-task.png
├── edit-task.png
├── mobile-view.png
```

---

## Future Improvements

* User Authentication
* Dark Mode
* Drag & Drop Task Management
* Calendar View
* Due Date Reminders
* Progressive Web App (PWA)
* Offline Support
* Pagination
* Server-side Filtering & Sorting

---

## Author

**Rishikesh Karkhanis**

B.Tech Computer Science Engineering (AI & ML)

---