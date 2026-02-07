# Match Day Task Manager - Backend

This is the backend API for the Match Day Task Manager. It handles task storage, updates, and provides a simple RESTful interface for the frontend.

## How to Setup

Follow these steps to get the server running:

1.  **Go to the backend folder**:

    ```bash
    cd match-day-task-manager-backend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Setup environment variables**:
    Create a `.env` file in the root of the backend folder and copy the content from `.env.example`. Make sure to add your MongoDB connection string.

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    NODE_ENV=development
    CORS_FRONTEND_URL=http://localhost:5173
    ```

4.  **Start the server**:
    ```bash
    npm run dev
    ```
    The server should now be running at `http://localhost:5000`.

## Decisions and Why

- **TypeScript**: I chose TypeScript to catch errors early. It makes the code much easier to read and maintain as the project grows.
- **MongoDB & Mongoose**: Since tasks can have different fields or might change later, a NoSQL database like MongoDB is perfect for flexibility.
- **Simple Folder Structure**: I kept the folder structure straightforward (controllers, routes, models) so anyone can jump in and understand where everything is.

## Trade-offs

- **No Auth for now**: I decided to skip authentication to focus on the core task management features. In a real app, this would be the first thing to add.
- **Basic Error Handling**: Used a global error handler but it's pretty simple. It gets the job done for this version but could be more detailed.

## What's Missing / Incomplete

- **User Accounts**: Right now, all tasks are global. There's no way to have private accounts.
- **Task Updates**: For now, you can't edit the title or description of a task once it's created.
- **One Way Transitions**: Tasks can't go back to a previous state (like moving from "In Progress" back to "Todo").
- **Input Validation**: I'm doing some basic checks, but it could be stricter to prevent bad data.
