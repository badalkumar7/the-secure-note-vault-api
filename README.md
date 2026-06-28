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

## 🚀 API Documentation

After starting the server, open:

```text
http://localhost:3000/api-docs
```

Swagger UI allows you to test all endpoints without using Postman.

---

# 📌 API Endpoints

## Authentication

### Register

**POST**

```http
/api/auth/register
```

Creates a new user account.

---

### Login

**POST**

```http
/api/auth/login
```

Authenticates a user and returns a JWT.

---

### Logout

**POST**

```http
/api/auth/logout
```

Logs out the currently authenticated user.

---

## Notes

### Get All Notes

**GET**

```http
/api/notes
```

Returns all notes created by the authenticated user.

---

### Create Note

**POST**

```http
/api/notes
```

Creates a new note.

---

### Get Note by ID

**GET**

```http
/api/notes/:id
```

Returns a specific note.

---

### Update Note

**PUT**

```http
/api/notes/:id
```

Updates an existing note.

---

### Delete Note

**DELETE**

```http
/api/notes/:id
```

Permanently deletes a note.
