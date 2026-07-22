# 🛍️ E-Commerce Web Application

A full-stack e-commerce web application built with **React** and **Laravel**. The application provides a responsive shopping experience and uses a separate frontend and backend architecture connected through RESTful APIs.

## 🚀 Project Overview

This project is a full-stack e-commerce application developed with a clear separation between the frontend and backend.

The frontend is responsible for displaying the user interface and handling user interactions, while the Laravel backend manages the application logic, database operations, and API communication.

The application uses a **MySQL database** to store and manage product-related data.

---

## 🛠️ Technologies Used

### Frontend

* React
* JavaScript
* Tailwind CSS
* Axios

### Backend

* Laravel
* PHP
* RESTful API

### Database

* MySQL

### Tools

* Node.js
* npm
* Composer
* XAMPP
* phpMyAdmin
* Git & GitHub

---

## ✨ Features

* 🛍️ Browse available products
* 🔍 View product information
* 🛒 Add products to the shopping cart
* 📦 Manage product data through the backend
* 🔄 Fetch data dynamically through API requests
* 📱 Responsive user interface
* 🗄️ MySQL database integration
* ⚡ React-based frontend
* 🔧 Laravel-powered backend
* 🔗 Separate frontend and backend architecture

---

## 📂 Project Structure

The project is organized into two main parts:

```text
ecommerce/
│
├── front/              # React frontend application
│
├── main-backend/       # Laravel backend application
│
├── laravel.sql         # Database dump
│
├── readme.txt
│
└── README.md
```

### Frontend

The `front` directory contains the React application, including the user interface, components, pages, and API communication logic.

### Backend

The `main-backend` directory contains the Laravel application, including:

* Application logic
* API routes
* Database configuration
* Models
* Controllers
* Migrations

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following tools are installed on your system:

* Node.js and npm
* PHP
* Composer
* MySQL
* XAMPP or another local PHP/MySQL environment

---

## 🔧 Frontend Setup

Navigate to the frontend directory:

```bash
cd front
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## ⚙️ Backend Setup

Navigate to the Laravel backend directory:

```bash
cd main-backend
```

Install the PHP dependencies:

```bash
composer install
```

Generate the Laravel application key:

```bash
php artisan key:generate
```

Start the Laravel development server:

```bash
php artisan serve
```

The backend server will be available at:

```text
http://127.0.0.1:8000
```

---

## 🗄️ Database Setup

The repository includes a database dump named:

```text
laravel.sql
```

### Importing the Database

1. Start **Apache** and **MySQL** using XAMPP.

2. Open phpMyAdmin:

```text
http://localhost/phpmyadmin/
```

3. Log in using:

```text
Username: root
Password: Leave empty
```

4. Create a new database for the project.

5. Select the database and open the **Import** tab.

6. Select the `laravel.sql` file.

7. Click **Import** to load the database.

---

## 🔐 Environment Configuration

Inside the `main-backend` directory, create or update the `.env` file with your database configuration:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

Make sure that `DB_DATABASE` matches the name of the database you created in phpMyAdmin.

---

## 🔗 Frontend–Backend Architecture

The frontend and backend are separate applications that communicate through API requests.

```text
┌──────────────────────┐
│                      │
│   React Frontend     │
│      /front           │
│                      │
└──────────┬───────────┘
           │
           │ REST API Requests
           ▼
┌──────────────────────┐
│                      │
│   Laravel Backend    │
│   /main-backend      │
│                      │
└──────────┬───────────┘
           │
           │
           ▼
┌──────────────────────┐
│                      │
│   MySQL Database     │
│                      │
└──────────────────────┘
```

---

## 📚 Key Learning Outcomes

Through this project, I gained practical experience in:

* Developing a full-stack web application
* Building responsive user interfaces with React
* Creating and consuming RESTful APIs
* Connecting a React frontend to a Laravel backend
* Working with MySQL databases
* Managing application data through API requests
* Structuring a project with separate frontend and backend applications
* Working with Git and GitHub

---

## 👩‍💻 Author

**Hediyeh Afzalzadeh**

[GitHub Profile](https://github.com/Hediyehafzalzadeh)
