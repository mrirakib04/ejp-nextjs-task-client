# EJP-Task: GameHub – Modern Gaming Marketplace

GameHub is a modern gaming marketplace where users can explore the latest games, view detailed product information, and enjoy a smooth and responsive user experience. The frontend is built using React, Next.js (App Router) and Tailwind CSS.

---

## Features

- Games Listing
  Fetches all available games from the `/games` endpoint. Fully responsive layout with clean UI.

- Game Details Page
  Dynamic route `/games/[id]`
  Shows game cover, title, description, genre, price, rating, and upload date.

- Optimized Data Fetching
  Includes loading, error handling, retry logic, and smooth transitions.

- Modern UI/UX
  Minimal, professional layout styled with Tailwind CSS.
  Includes animations (optional) and a polished responsive design.

---

## Technologies Used

- Frontend: React.js, Next.js (App Router), Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Deployment: Vercel

---

### Live Site Link

- [https://mrirakib-ejp-nextjs-task-client.vercel.app/](https://mrirakib-ejp-nextjs-task-client.vercel.app/)

### Client Repository

- [https://github.com/mrirakib04/ejp-nextjs-task-client](https://github.com/mrirakib04/ejp-nextjs-task-client)

### Server Repository

- [https://github.com/mrirakib04/ejp-nextjs-task-server](https://github.com/mrirakib04/ejp-nextjs-task-server)

---

## Routing

- `/` → Homepage
- `/games` → All Games
- `/games/[id]` → Single product details page
- `/add` → Add Game (Protected)
- `/manage` → Manage My Games (Protected)

---

## Dev Dependencies

```json
 "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/material": "^7.3.5",
    "aos": "^2.3.4",
    "dotenv": "^17.2.3",
    "next": "16.0.3",
    "next-auth": "^4.24.13",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "^4"
  }
```

---

# Installation Guide (Client)

## 1) Clone the Repository

git clone [https://github.com/your-username/gamehub-client](https://github.com/your-username/gamehub-client)
cd gamehub-client

---

## 2) Install Dependencies

npm install

---

## 3) Create Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_BASE_URL=[http://localhost:6510](http://localhost:6510)

---

## 4) Run the Client

npm run dev
