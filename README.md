# E-Library Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

E-Library is a MERN stack application designed to manage a library of books. Users can view, add, update, and delete books, as well as sign up and log in to the application.

## Features

- User Authentication (Sign Up, Log In)
- View list of books
- Add new books
- Update book information
- Delete books
- View book details
- Admin functionalities

## Tech Stack

### Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=plastic&logoWidth=15&rounded=true" alt="React" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&style=plastic&logoWidth=15&rounded=true" alt="Tailwind CSS" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=plastic&logoWidth=15&rounded=true" alt="React Icons" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/React_Carousel-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=plastic&logoWidth=15&rounded=true" alt="React Carousel" height="30" style="border-radius:8px; margin-right:10px;"/>
</p>

### Backend

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white&style=plastic&logoWidth=15&rounded=true" alt="Node.js" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&style=plastic&logoWidth=15&rounded=true" alt="Express.js" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white&style=plastic&logoWidth=15&rounded=true" alt="MongoDB" height="30" style="border-radius:8px; margin-right:10px;"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white&style=plastic&logoWidth=15&rounded=true" alt="Mongoose" height="30" style="border-radius:8px; margin-right:10px;"/>
</p>

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/dev-ashukla/E-library.git
cd E-library
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes you'd like to make. We encourage developers from around the world to contribute and help us improve this project.
# Project Structure
```bash
E-library/
├── Backend/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── book.js
│   │   └── User.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── routes/
│       └── api/
│           ├── admin.js
│           ├── book.js
│           └── User.js
├── Frontend/
│   ├── book_library/
│   │   ├── .eslintrc.cjs
│   │   ├── .gitignore
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── postcss.config.js
│   │   ├── public/
│   │   │   └── vite.svg
│   │   ├── README.md
│   │   ├── src/
│   │   │   ├── App.css
│   │   │   ├── App.jsx
│   │   │   ├── assets/
│   │   │   │   ├── adult.jpg
│   │   │   │   ├── adventure.png
│   │   │   │   ├── books1.jpg
│   │   │   │   ├── books2.jpg
│   │   │   │   ├── books3.jpg
│   │   │   │   ├── fantasy.png
│   │   │   │   ├── girlBook.jpg
│   │   │   │   ├── historical.png
│   │   │   │   ├── logo.png
│   │   │   │   ├── react.svg
│   │   │   │   ├── scienceFiction.png
│   │   │   ├── components/
│   │   │   │   ├── Admin.jsx
│   │   │   │   ├── BookCard.jsx
│   │   │   │   ├── Carousel.jsx
│   │   │   │   ├── CreateBook.jsx
│   │   │   │   ├── Genres.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── HomePage.jsx
│   │   │   │   ├── LogIn.jsx
│   │   │   │   ├── ShowBookDetails.jsx
│   │   │   │   ├── ShowBookList.jsx
│   │   │   │   ├── SignUp.jsx
│   │   │   ├── index.css
│   │   │   ├── main.jsx
│   │   ├── tailwind.config.js
│   │   └── vite.config.js

