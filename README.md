# Online Store

An educational team project built as part of the [RS School](https://rs.school/) curriculum. It is a fully client-side single-page application (SPA) that simulates a real online store with a product catalogue, product detail pages, a shopping cart, and a checkout flow.

🔗 **Live demo:** [https://amgstrider.github.io/online-store/](https://amgstrider.github.io/online-store/)

---

## Features

- **Start / Landing page** – welcome screen with navigation to the store
- **Store page** – product catalogue with filtering, sorting, and search
- **Product page** – detailed view of an individual product
- **Basket / Cart page** – manage selected products, adjust quantities, apply promo codes
- **Checkout modal** – order form with client-side validation
- **404 / Error page** – graceful handling of unknown routes
- URL query-string state persistence (filters, cart, etc.)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| TypeScript | Main language |
| Webpack 5 | Bundler & dev server |
| Sass / SCSS | Styling |
| ESLint + Prettier | Linting & formatting |
| Jest + ts-jest | Unit testing |
| GitHub Pages | Deployment |

---

## Project Structure

```
src/
├── app/
│   ├── core/        # Router, state management, base classes
│   ├── pages/       # start · store · product · basket · modal-window · error
│   └── shared/      # Reusable components and utilities
├── assets/          # Images and static resources
├── public/          # Public static files
└── index.html       # HTML entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Installation

```bash
git clone https://github.com/amgSTRIDeR/online-store.git
cd online-store
npm install
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Lint, then build the production bundle |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run format` | Format all files with Prettier |
| `npm test` | Run unit tests with Jest |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Authors

- [amgSTRIDeR](https://github.com/amgSTRIDeR)
- Team collaborators (RS School, 2022–2023)

---

## License

This project was created for educational purposes as part of the RS School program.