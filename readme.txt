🛍️ E-Commerce Website

A full-stack e-commerce web application built with a modern frontend and a Laravel-based backend. The application is divided into two separate parts that communicate through a RESTful API.

📌 Overview

This project was developed as a full-stack e-commerce application with a clear separation between the frontend and backend.

The frontend is responsible for the user interface and user interactions, while the backend manages the application logic, database operations, and API endpoints.

🛠️ Technologies Used
Frontend
React
JavaScript
Tailwind CSS
Axios
Backend
Laravel
PHP
RESTful API
Database
MySQL
Development Tools
Node.js & npm
Composer
Git & GitHub
XAMPP
phpMyAdmin
✨ Features
🛒 E-commerce product browsing
📦 Product management through the backend API
🔄 Communication between frontend and backend through RESTful APIs
📱 Responsive user interface
🗄️ MySQL database integration
⚡ Dynamic data fetching using Axios
🔐 Laravel-based backend architecture
🧩 Separate frontend and backend architecture
📁 Project Structure

The project is divided into two main parts:

e-commerce-project/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── resources/
│   ├── .env
│   ├── composer.json
│   └── ...
│
└── README.md

The exact folder structure may vary depending on the project configuration.

🚀 Getting Started
Prerequisites

Before running the project, make sure you have the following installed:

Node.js
PHP
Composer
MySQL
XAMPP or another local PHP/MySQL development environment
🔧 Frontend Setup

Navigate to the frontend directory:

cd frontend

Install the required dependencies:

npm install

Start the development server:

npm start
⚙️ Backend Setup

Navigate to the backend directory:

cd backend

Install the PHP dependencies:

composer install

Generate the Laravel application key:

php artisan key:generate

Start the Laravel development server:

php artisan serve

The backend will be available at:

http://127.0.0.1:8000
🗄️ Database Setup

To load the sample products and other project data, import the provided database file into MySQL.

Using phpMyAdmin
Start Apache and MySQL using XAMPP.

Open phpMyAdmin:

http://localhost/phpmyadmin/

Log in with the following credentials:

Username: root
Password: (leave empty)
Create a new database for the project.
Select the database and open the Import tab.
Click Choose File and select the provided database file.
Click Import to complete the process.
🔐 Environment Configuration

Before running the backend, configure the .env file with your database credentials.

Example:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=

Make sure the database name matches the database you created in phpMyAdmin.

🖼️ Screenshots
Homepage

Add a screenshot of the homepage here.




Product Page

Add a screenshot of the product page here.




Shopping Cart

Add a screenshot of the shopping cart here.




Make sure the screenshots are stored in a screenshots folder in the root directory of the project.

🔗 Frontend–Backend Communication

The frontend communicates with the Laravel backend through API requests.

┌──────────────┐        API Requests        ┌──────────────┐
│              │  ───────────────────────▶  │              │
│   React      │                            │   Laravel    │
│   Frontend   │  ◀───────────────────────  │   Backend    │
│              │        API Responses       │              │
└──────────────┘                            └──────┬───────┘
                                                   │
                                                   ▼
                                            ┌──────────────┐
                                            │    MySQL     │
                                            │   Database   │
                                            └──────────────┘
📚 What I Learned

Through this project, I gained practical experience in:

Developing a full-stack web application
Building responsive user interfaces with React
Creating and consuming RESTful APIs
Connecting a React frontend to a Laravel backend
Working with relational databases and MySQL
Managing application data through API requests
Structuring a project with separate frontend and backend applications
👩‍💻 Author

Hediyeh Afzalzadeh

GitHub: @Hediyehafzalzadeh
