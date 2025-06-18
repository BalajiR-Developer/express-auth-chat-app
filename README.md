# Chat App API

## Features
- ✅ User Registration/Login (with JWT)
- ✅ Task Filtering (all, completed, pending)
- ✅ Excel Chat Import

## Setup Instructions

1. Clone & install:
```bash
git clone <repo_url>
cd express-auth-chat-app
npm install

1. Set up .env file:
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=chat_app
JWT_SECRET=supersecretkey

3.Start the app:
npm run dev

API Endpoints:

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| POST   | /api/auth/register      | Register user                       |
| POST   | /api/auth/login         | Login user                          |
| GET    | /api/tasks/task?status= | Filter tasks(all,completed,pending) |
| POST   | /api/chat/import        | Upload Excel with chat data         |



