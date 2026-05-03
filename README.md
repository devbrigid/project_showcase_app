#  Project Showcase App

A simple React-based project showcase application that allows users to add, view, and search projects dynamically. Built with React and Vite.

---

## Features

-  Add new projects (title, image, description)
-  Live search/filter projects dynamically
-  Image preview before adding a project
-  Responsive card-based layout
- Instant UI updates without page reload
- Navigation (About & Projects sections)
- Clean and modern UI design

---

##  Tech Stack

- React (Hooks: useState)
- Vite
- JavaScript (ES6+)
- CSS (Flexbox & Grid)

---

##  Project Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── About.jsx
│ ├── Form.jsx
│ ├── ProjectList.jsx
│ ├── ProjectCard.jsx
│ └── Footer.jsx
│
├── data/
│ └── projects.js
│
├── styles/
│ ├── App.css
│ ├── Form.css
│ ├── Navbar.css
│ └── ProjectCard.css
│
├── App.jsx
└── main.jsx

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/DevBrigid/Project_Showcase_app.git
cd Showcase_Project

### 2. nstall dependencies
npm install

### 3. Start development server
npm run dev

### 4. Open in browser
http://localhost:5173/

## 🧪 Usage
### ➕ Add Project
- Fill in title, image URL, and description
- Click Add
- Project appears instantly in the list
### 🔍 Search Projects
- Type in search box
- Projects filter dynamically as you type
### 🖼️ Image Preview
- Image URL shows a live preview before submission

## ⚠️ Known Limitations
- No backend/database (data resets on refresh)
- No authentication system
- No image upload (only URLs supported)
- Basic search (no fuzzy matching)
- Data stored only in React state