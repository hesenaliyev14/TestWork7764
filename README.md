# E-Commerce App

A modern e-commerce application built with Next.js, TypeScript, and SCSS modules. Features user authentication and product catalog using the DummyJSON API.

## Features

- 🔐 **User Authentication** - JWT-based login system
- 🛍️ **Product Catalog** - Display products with images, prices, and categories
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful gradient designs and smooth animations
- ⚡ **Fast Performance** - Built with Next.js App Router
- 🔧 **Type Safety** - Full TypeScript support
- 📝 **Code Quality** - ESLint, Prettier, and Stylelint configured

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: Zustand
- **HTTP Client**: Axios
- **API**: DummyJSON
- **Code Quality**: ESLint, Prettier, Stylelint

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Credentials

Use these credentials to test the login functionality:

- **Username**: `kminchelle`
- **Password**: `0lelplR`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run stylelint` - Run Stylelint
- `npm run stylelint:fix` - Fix Stylelint issues

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── login/          # Login page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Page footer
│   ├── ProductCard/    # Product display card
│   ├── LoadingSpinner/ # Loading indicator
│   └── ErrorMessage/   # Error display
├── hooks/              # Custom React hooks
├── services/           # API services
├── store/              # Zustand stores
├── styles/             # Global SCSS styles
└── types/              # TypeScript type definitions
```

## Features Implementation

### Authentication

- JWT token-based authentication
- Form validation (minimum 3 characters)
- Persistent login state
- Automatic redirect after login

### Product Display

- Grid layout with responsive design
- Product cards with images, titles, categories, and prices
- Discount percentage display
- "Add to Cart" button for authenticated users

### UI/UX

- Modern gradient design
- Smooth hover animations
- Loading states and error handling
- Mobile-responsive layout
- Accessible focus states

## API Integration

The app uses the [DummyJSON API](https://dummyjson.com/) for:

- User authentication (`/auth/login`)
- Product catalog (`/products`)

## Code Quality

The project follows strict code quality standards:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Stylelint** for SCSS linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.
