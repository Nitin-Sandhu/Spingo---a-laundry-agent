# 🧺 Spingo - Laundry Service Platform

Spingo is a full-stack laundry service web application that allows users to schedule laundry pickups, manage their orders, and track the status of their laundry. The project is built using the MERN stack and focuses on providing a clean, responsive, and user-friendly experience.

---

## 🚀 Features

* 🔐 User Authentication (Register/Login)
* 👤 User Dashboard
* 🧺 Laundry Service Booking
* 📍 Pickup & Delivery Details
* 💰 Pricing Page
* 📞 Contact & Enquiry Form
* ⭐ Feedback System
* 📱 Responsive Design
* 🔒 Secure API with JWT Authentication

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* bcrypt

---

## 📂 Project Structure

```text
Spingo/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/spingo.git
```

### 2. Move into the project directory

```bash
cd spingo
```

### 3. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

You can copy the example file:

### Linux / macOS

```bash
cp .env.example .env
```

### Windows

```cmd
copy .env.example .env
```

Example `.env`

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

> **Note:** Never commit your `.env` file to GitHub. It contains sensitive information.

---

## 🗄 MongoDB Setup

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Whitelist your IP address.
5. Copy your MongoDB connection string.
6. Paste it into the `MONGO_URI` variable in `.env`.

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is available for educational and personal use.

---

## 👨‍💻 Author

**Nitin Sandhu**

If you found this project useful, consider giving it a ⭐ on GitHub.
