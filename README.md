# QuestAuto - Car Sales Platform

A modern car catalog platform built with vanilla JavaScript, featuring advanced filtering, search capabilities, and responsive design.

## 🚀 Deployment

- Vercel Static Hosting: https://quest-auto-js.vercel.app/

## 🏗️ Architecture

**Frontend-First Approach**: Uses static sample data for immediate functionality while backend code is included for portfolio demonstration.

### Tech Stack
- **Frontend**: JavaScript ES6+, CSS3, HTML5 (vanilla JS, no frameworks)
- **Backend** (Portfolio Reference): Node.js, Express, MongoDB

## 🚀 Features

- **Car Catalog**: Browse 12 luxury vehicles with images
- **Advanced Filtering**: By make, model, color, body type, price
- **Real-time Search**: Instant results as you type
- **Car Details**: Modal with specifications and features
- **Responsive Design**: Mobile-first approach

## 🛠️ Quick Start

### Demo Mode (Recommended)
```bash
cd client
npx http-server -p 8000 -c-1
# Access: http://172.27.160.1:8000/pages/cars.html
```

### Full-Stack (Requires MongoDB)
```bash
# Backend
cd server
npm install
npm start

# Frontend (new terminal)
cd client
npx http-server -p 8000 -c-1 .
```

## 📁 Project Structure

```
QuestAutoJS-main/
├── client/                 # Frontend application
│   ├── pages/             # HTML pages
│   ├── public/            # CSS, JS, images
│   └── data.js            # Sample data (12 cars)
├── server/                # Backend API (portfolio reference)
└── README.md
```

## 🎯 Portfolio Value

**What This Demonstrates:**
- Modern JavaScript skills (ES6 modules, async/await, array methods)
- Frontend architecture (modular design, component thinking)
- Full-stack understanding (backend code included)
- Real-world problem solving (static data conversion)

**Why This Approach:**
- **Immediate Impact**: Working demo in 30 seconds
- **No Setup Required**: Works immediately
- **Portfolio Ready**: Shows both frontend and backend capability
- **Clean Code**: Maintainable, well-structured
---

**Note**: Frontend is fully functional with static data. Backend code is included to demonstrate full-stack development skills.
