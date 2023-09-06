# Repository Information

This repository contains two separate applications: a `frontend` and a `backend`.

## Frontend

The `frontend` of this project is a web application built using `React`, `Vite`, and `TailwindCSS`. It is responsible for the user interface and interactions of the application.

### Getting Started

To run the vite frontend server:

```bash
cd frontend
npm install
npm run dev
```

The frontend should now be accessible at http://localhost:5173.

## Backend

The `backend` of this project is a server application built using `Express.js` and `MongoDB`. It handles data storage, retrieval, and serves as the API for the frontend.

### Structure

The `backend` directory is organized as follows:

- `controllers`: Contains methods that normally handle HTTP requests and responses.
- `models`: Defines data models for MongoDB.
- `routes`: Contains route definitions for different API endpoints.

### Getting Started

To run the express application:

```bash
cd backend
npm install
npm start
```

The `backend` server should now be running at http://localhost:8000, which is used by frontend app.

## Others

- `rest.http`: This file mentions some of the the API endpoints. The format is directly compatible with VSCode's REST Client Extension
- `login/signup` system uses `JWT`. Its send both as `login/signup` response and as a cookie, either may be used to retrieve JWT token.

## Contributing

Contribute by forking the repo and making pull requests. Or email at zubaerahmed100@gmail.com to get contrubutor access.
