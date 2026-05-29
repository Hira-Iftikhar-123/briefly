# Briefly

**AI-powered meeting intelligence and team productivity workspace** 

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

---

## Overview

**Briefly** is a full-stack collaboration platform inspired by the gap between *having a meeting* and *actually following through*. Remote teams lose time to unclear action items, scattered notes, manual task creation, and weak visibility into what was decided and who owns what next.

Briefly targets that workflow end-to-end: capture meeting notes, summarize discussions with AI, extract tasks automatically, manage work on a lightweight board, and surface productivity signals in a dashboard — conceptually **Slack + Notion AI + Jira Lite**, built as a deliberate learning project on the **MEAN-style stack** (MongoDB, Express, Angular, Node).

---

## Problem & solution

| Problem | How Briefly addresses it |
|--------|---------------------------|
| Meetings without clear outcomes | Structured meetings with notes, summaries, and linked tasks |
| Manual follow-up and task creation | AI-assisted summary and action-item extraction |
| Scattered context across tools | Single workspace: meetings, tasks, analytics, AI assistant |
| Limited visibility for leads | Role-based access and analytics-oriented dashboard (planned) |

---

## Why I'm building this (and why Angular)

This repository is my **primary vehicle for mastering Angular** — not a throwaway tutorial, but a real product-shaped codebase where I practice enterprise patterns on purpose:

- **Standalone components**, lazy routing, and a feature-based folder layout (`core` / `shared` / `features`)
- **Signals** and services for auth state, with room to grow into interceptors, guards, and reactive forms
- **HTTP integration** against a real REST API, plus future work on charts, drag-and-drop (CDK), and real-time UI

I chose Angular because it mirrors how large teams ship frontends: strong structure, typed templates, RxJS for async flows, and a path into SSR (this app is scaffolded with Angular SSR). Building Briefly end-to-end — UI, API, database, and AI hooks — gives me a **full-stack learning path** with recruiter-visible depth: architecture, auth, dashboards, and integration boundaries, not just isolated components.

---

## Key features (product vision)

From the product spec, Briefly is organized into these modules:

| Module | Capabilities |
|--------|----------------|
| **Authentication** | Register / login, JWT, bcrypt, role-based access (`admin`, `manager`, `employee`) |
| **Meetings** | CRUD, notes, participants, AI summary, link generated tasks |
| **Tasks** | Priorities, statuses (`todo` → `completed`), assignments, due dates |
| **AI assistant** | Summarize notes, extract action items, contextual chat |
| **Analytics** | Team velocity, overdue work, meeting outcomes (charts) |
| **Admin** | Users, teams, workspace settings |
| **Real-time** *(planned)* | Collaborative notes and notifications via Socket.IO |

---

## Tech stack

| Layer | Technologies |
|-------|----------------|
| **Frontend** | Angular 21, standalone components, Angular Router, Signals, SCSS, SSR-ready build |
| **Backend** | Node.js, Express 5, JWT, bcrypt, REST API |
| **Database** | MongoDB (local or Atlas), Mongoose |
| **AI** | Google Gemini API *(integration in progress; placeholder service today)* |
| **Real-time** | Socket.IO *(scaffolded on server and client)* |

---

## Architecture

```text
briefly/
├── client/                 # Angular SPA (feature modules, workspace layout)
│   └── src/app/
│       ├── core/           # layouts, auth/api/socket services
│       ├── shared/         # reusable UI (e.g. feature shell)
│       └── features/       # auth, dashboard, meetings, tasks, analytics, ai, admin
│
└── server/                 # Express API
    └── src/
        ├── config/         # env, database
        ├── controllers/    # auth, meetings, tasks, ai
        ├── middleware/     # JWT auth, roles
        ├── models/         # User, Meeting, Task → Users, Meetings, Tasks collections
        ├── routes/         # /api/*
        ├── ai/             # Gemini client (placeholder)
        └── sockets/        # real-time handlers (stub)
```

**Data flow (AI path, target state):** meeting notes → API → Gemini → summary + tasks persisted in MongoDB → Angular dashboard.

**API surface (implemented):**

- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/profile`
- `POST|GET|PUT|DELETE /api/meetings`, `GET /api/meetings/:id`
- `POST|GET|PUT /api/tasks`
- `POST /api/ai/summarize`, `POST /api/ai/extract-tasks`, `POST /api/ai/chat`
- `GET /health`

Protected routes require a `Authorization: Bearer <token>` header.

---

## Current status

Honest snapshot of the repo today:

| Area | Status |
|------|--------|
| Angular app shell, routing, workspace layout, feature pages | Done (UI scaffold) |
| Express API, Mongoose models aligned to Atlas collections | Done |
| Auth API (register, login, profile) + JWT middleware | Done |
| Meetings & tasks CRUD APIs | Done |
| AI endpoints | Stubbed (placeholder responses; Gemini wiring next) |
| Angular ↔ API wiring (forms, lists, guards, interceptors) | Next |
| Kanban board, charts, Socket.IO collaboration | Planned |
| Deployment (e.g. Vercel + Railway) | Planned |

The foundation is intentionally **production-shaped** (layered server, feature-based Angular tree) so each learning milestone maps to a real module recruiters can click through.

---

## Getting started

### Prerequisites

- **Node.js** 20+ and npm
- **MongoDB** — local (`mongodb://127.0.0.1:27017/briefly`) or [MongoDB Atlas](https://www.mongodb.com/atlas)

### 1. Clone and install

```bash
git clone <your-repo-url>
cd briefly

cd client && npm install
cd ../server && npm install
```

### 2. Server environment

Copy the example env file and fill in your values (never commit `.env`):

```bash
cd server
cp .env.example .env   # Windows: copy .env.example .env
```

| Variable | Purpose |
|----------|---------|
| `PORT` | API port (default `4000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing JWTs |
| `CLIENT_ORIGIN` | Angular dev URL (default `http://localhost:4200`) |

See `server/.env.example` for Atlas setup notes (IP allowlist, URL-encoded passwords, database name).

### 3. Run the API

```bash
cd server
npm run dev
```

On success you should see `MongoDB connected` and `Briefly API running on http://localhost:4000`.

### 4. Run the Angular client

In a second terminal:

```bash
cd client
npm start
```

Open [http://localhost:4200](http://localhost:4200). The API base URL is configured in `client/src/app/core/services/api.ts` (`http://localhost:4000/api`).

### Production build (client)

```bash
cd client
npm run build
```

---

## Roadmap

Aligned with the product plan; order may shift as Angular learning goals dictate:

1. **Phase 1 — Foundation** — Auth UI, HTTP interceptors, guards, connect meetings/tasks to API
2. **Phase 2 — Core product** — Meeting notes editor, task board (CDK drag-and-drop), dashboard metrics
3. **Phase 3 — AI** — Gemini summaries, task extraction, assistant chat with meeting context
4. **Phase 4 — Real-time** — Socket.IO for live notes and notifications
5. **Phase 5 — Polish** — Charts (Chart.js / ApexCharts), responsive UI, deployment

---

## What this project demonstrates

- **Product thinking** — solving meeting → action-item → accountability, not generic CRUD
- **Enterprise-style Angular structure** — features, core services, lazy routes
- **Backend design** — REST layers, auth, MongoDB modeling, AI integration boundary
- **Growth mindset** — shipping incrementally while deepening framework mastery

---

## License

Private learning project unless otherwise noted.
