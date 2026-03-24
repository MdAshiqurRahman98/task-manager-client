# 📌 Task Manager

A Task Manager web app built with React and Redux Toolkit, designed to help users efficiently manage daily tasks with a clean UI and seamless user experience.

---

# 🚀 Live Demo

Netlify Deployment:

```
https://taskmanager-live.netlify.app
```

---

# 🛠 Tech Stack

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| React           | Frontend library           |
| React Router    | Routing library            |
| Redux Toolkit   | State management           |
| Tailwind CSS    | UI styling                 |
| Headless UI     | UI components              |
| React Hook Form | Form handling & validation |
| Hero Icons      | Icons                      |
| Netlify         | Deployment                 |

---

# 📂 Project Architecture

```
task-manager-client/
│
├── public/                 # Static files
├── src/
│   ├── assets/             # Images, icons
│   ├── components/         # Reusable components
│   ├── pages/              # Page-level components
│   ├── redux/              # Redux slices / state management
│   ├── routes/             # Routing configuration
│   ├── utils/              # Helper utilities
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styling
│   └── main.jsx            # Entry point
│
├── .env.local              # Environment variables
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/MdAshiqurRahman98/task-manager-client.git
```

---

### 2️⃣ Navigate to Project Directory

```
cd task-manager-client
```

---

### 3️⃣ Install Dependencies

```
npm install
```

---

### 4️⃣ Run Development Server

```
npm run dev
```

Application will run at:

```
http://localhost:5173
```

---

# 🎨 Styling

Styling is implemented using **Tailwind CSS**.

Styles are located at:

```
src/index.css
```

---

# 🚀 Deployment

The application can be deployed using **Netlify**.

### Build Project

```
npm run build
```

### Deploy

Upload the **dist** folder to Netlify
or connect the GitHub repository for automatic deployment.