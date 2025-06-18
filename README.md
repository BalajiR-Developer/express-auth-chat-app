# Express Chat Task API

A full-featured Express.js REST API built with TypeScript and MySQL that includes:

- ✅ User Registration & Login (with JWT Authentication)
- ✅ Chat History Import via Excel (.xlsx)
- ✅ Task Filtering (All / Completed / Pending)
- ✅ TypeORM Integration
- ✅ Environment-based Configuration
- ✅ Secure Password Hashing

---

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MySQL
- **ORM**: TypeORM
- **Auth**: JWT
- **Excel Parsing**: xlsx
- **Middleware**: Multer, Bcrypt

---

## 📁 Project Structure
express-auth-chat-app/
├── src/
│ ├── config/ # Database configuration
│ ├── controllers/ # Logic for Auth, Chat, and Tasks
│ ├── middleware/ # JWT Auth Middleware
│ ├── models/ # TypeORM Entities
│ ├── routes/ # Route definitions
│ ├── index.ts # Entry point
├── uploads/ # Temporary Excel file storage
├── .env # Environment variables
├── tsconfig.json # TypeScript config
├── package.json # Project metadata and scripts

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/BalajiR-Developer/express-auth-chat-app.git
cd express-auth-chat-app

2. Install Dependencies

npm install

3. Create .env File

touch .env

Update .env:
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=yourpassword
DB_NAME=chat_app
JWT_SECRET=your_jwt_secret
PORT=3800

4. Run the Application

npm run dev

Server will start on http://localhost:3800

API Endpoints:
Auth:
Method	Endpoint	          Description
POST	/api/auth/register	  Register a new user
POST	/api/auth/login	      Login & receive token

Chat Import:
Method	Endpoint	      Description	             Auth Required
POST	/api/chat/import	Upload Excel file	       Yes

Tasks:
Method	Endpoint	        Description
GET	   /api/tasks/task	  List all tasks (optional `?filter=completed

Sample Excel Format:
sender	message	          timestamp
John	  Hello there!	    2024-06-01 10:00 AM
Alice	  Welcome aboard!	  2024-06-01 10:05 AM

 Features Checklist:
 a.Register with hashed password

 b.JWT login and secure authentication

 c.Excel (.xlsx) upload + parsing

 d.Task filtering by status

 e.Modular, typed codebase using TypeScript

 f.TypeORM with MySQL integration

Build for Production:
npm run build
npm start

License:
MIT License









