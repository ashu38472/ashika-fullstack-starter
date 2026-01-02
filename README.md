# Ashika Fullstack

Ashika Fullstack consists of:

- **Frontend** → Next.js 15 (App Router)
- **Backend** → Spring Boot (Java 21)

Together they form a modern, scalable full-stack starter kit.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

---

# 🖥️ Frontend Setup (Next.js)

This contains the **frontend** of Ashika Fullstack Starter, built using **Next.js (App Router)**.  
It connects to a backend API and provides a modern, scalable project foundation.

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd ashika-fullstack-starter/frontend
```

### 2️⃣ Use Node.js 20+

Node.js **20 or higher** is required.

```bash
nvm use 20
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create `.env` file:

```bash
cp .env.example .env
```

Then open `.env` and update:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:9595/api
```

> Ensure your backend API is running at the above URL.

---

### 5️⃣ Start Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser to see the app.

---

## 🧩 Frontend Tech Stack

- **Next.js**
- **TypeScript**
- **App Router**
- **next/font (Geist)**

---

# ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Go to Backend Folder

```bash
cd ../backend
```

### 2️⃣ Create Database

Create a database in MySQL/PostgreSQL (depending on your configuration).

### 3️⃣ Add DB Credentials in `application.yml`

Update:

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/your_db_name
    username: your_username
    password: your_password
```

(Adjust config according to your DB)

### 4️⃣ Run Backend

```bash
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:9595
```

---

## 📚 Learn More

- Next.js Docs → https://nextjs.org/docs  
- Learn Next.js → https://nextjs.org/learn  
- Next.js GitHub → https://github.com/vercel/next.js  
- Spring Boot Docs → https://spring.io/projects/spring-boot  

---

## 🚀 Deployment

- Frontend deploy using **Vercel**
- Backend deploy on server / cloud of your choice

---

Happy building! 🎯
