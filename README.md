# 🔐 Secure Note Vault API

A secure REST API for storing and managing text notes. Built with **Node.js**, **Express.js**, and **MongoDB**, this project provides user authentication using JWT, complete CRUD operations for notes, and interactive API documentation using Swagger UI.

---

## 🌐 Live Demo

- **Swagger UI:** <a href="https://the-secure-note-vault-api.onrender.com/api-docs">🚀Live API</a>

---

## ✨ Features

### 🔐 User Authentication

* Register a new user
* Login with JWT authentication
* Logout user
* Password hashing using **bcrypt**

### 📝 Notes Management

* Create a note
* View all notes
* Update a note
* Delete a note

### 📖 API Documentation

* Interactive Swagger UI
* Test APIs directly from your browser

---

## 🛠️ Tech Stack

| Technology            | Description          |
| --------------------- | -------------------- |
| Runtime               | Node.js              |
| Framework             | Express.js           |
| Database              | MongoDB              |
| Authentication        | JWT (JSON Web Token) |
| Password Hashing      | bcrypt               |
| Documentation         | Swagger UI           |
| Environment Variables | dotenv               |

---


## 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user and return a JWT |
| POST | `/api/auth/logout` | Logout the current user |

## 📝 Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |
