# EcoShare - Angular 17 Frontend

A stunning, modern Angular 17 web application for sharing and donating objects to reduce waste in Tunisia. Built with glassmorphism design, dark/light mode support, and comprehensive feature management.

## 🌱 Features

- **User Authentication**: Secure login/registration with JWT tokens
- **Annonces (Listings)**: Create, view, edit, and delete product listings with images
- **Demandes (Requests)**: Browse and respond to community requests
- **User Profile**: Track your listings and requests activity
- **Dark/Light Mode**: Toggle themes with localStorage persistence
- **Glassmorphism UI**: Modern frosted glass effect cards with backdrop blur
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Category Filtering**: Filter content by type
- **Search Functionality**: Find exactly what you need

## 🛠 Tech Stack

- **Angular 17** - Latest Angular framework with standalone components
- **Tailwind CSS v4** - Utility-first CSS with custom emerald theme
- **TypeScript** - Strict type safety
- **RxJS** - Reactive programming with Observables
- **Reactive Forms** - Advanced form validation
- **HTML5 & CSS3** - Semantic markup with modern CSS features

## 📋 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── api.service.ts          # HTTP client wrapper
│   │   │   ├── auth.service.ts         # JWT authentication
│   │   │   ├── annonce.service.ts      # Listings API
│   │   │   ├── demande.service.ts      # Requests API
│   │   │   ├── categorie.service.ts    # Categories caching
│   │   │   └── theme.service.ts        # Dark/light mode
│   │   └── guards/
│   │       └── auth.guard.ts           # Route protection
│   ├── features/
│   │   ├── auth/                       # Login & Register
│   │   ├── annonces/                   # Listing CRUD
│   │   ├── demandes/                   # Requests browsing
│   │   ├── profile/                    # User dashboard
│   │   └── about/                      # Info page
│   ├── shared/
│   │   ├── components/
│   │   │   └── navbar/                 # Navigation with theme toggle
│   │   └── layouts/
│   │       └── main-layout/            # Main wrapper layout
│   ├── app.routes.ts                   # Lazy-loaded routing
│   └── app.component.ts                # Root component
├── styles.css                          # Global styles & theme variables
├── tailwind.config.js                  # Tailwind customization
└── index.html                          # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Backend API running on `http://localhost:8080` (update in services if different)

### Installation & Development

```bash
# Navigate to project
cd ecoshare

# Install dependencies (already done)
npm install

# Start development server
npm start

# Open browser to http://localhost:4200
```

The app auto-reloads when you make changes!

### Backend Configuration

If your backend API is on a different URL, update:
- `/src/app/core/services/api.service.ts` - `apiUrl`
- `/src/app/core/services/auth.service.ts` - `apiUrl`

## 🎨 Design System

### Color Palette
- **Primary Green**: `#22c55e` - Main actions, highlights, calls-to-action
- **Secondary Sky**: `#0ea5e9` - Alternative actions and secondary elements
- **Dark Background**: Near-black (`#0a0a0a`) with glassmorphism cards
- **Text**: White/Gray variants with proper WCAG contrast
- **Accents**: Red, yellow, orange for status indicators

### Visual Language
- Glassmorphism cards with `backdrop-filter: blur(10px)`
- Smooth `transition: all 0.3s` on interactive elements
- Rounded corners (`rounded-lg` = 8px, `rounded-2xl` = 16px)
- Gradient text for headings
- Shadow effects for depth
- Custom scrollbar styling

### Responsive Breakpoints
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🔐 Authentication

### Login Flow
1. User enters email + password
2. Backend validates and returns JWT token + user data
3. Token stored in localStorage with user info
4. Token sent in Authorization header for all API requests
5. Auto-logout on token expiration

### Protected Routes
- `/annonces` - Requires auth
- `/demandes` - Requires auth
- `/profile` - Requires auth
- `/auth/login` & `/auth/register` - Public

## 📱 Key Routes

### Public Routes
- `/auth/login` - User login
- `/auth/register` - New user signup (7 fields validation)
- `/about` - Learn about EcoShare

### Protected Routes (Requires Login)
- `/annonces` - Browse all listings with search & filters
- `/annonces/create` - Create new listing with image upload
- `/annonces/:id` - View listing details with owner contact
- `/demandes` - Browse community requests
- `/profile` - Personal dashboard with your content

## 🎯 State Management

All state managed through RxJS services:

```typescript
// AuthService
currentUser$: Observable<any>              // Current user data
isAuthenticated$: Observable<boolean>      // Auth status

// ThemeService
theme$: Observable<'light' | 'dark'>      // Current theme

// CategorieService
categories$: Observable<Categorie[]>       // Category list (cached)
```

No NgRx needed - services handle all state management with RxJS observables.

## 🔧 Development Commands

```bash
# Development server (auto-reload)
npm start

# Production build
npm run build

# Run tests
npm test

# Linting
npm run lint
```

## 📦 Form Validation

All forms use Angular Reactive Forms with validators:
- **Email**: Format validation
- **Password**: Min 6 characters
- **Code Postal**: Exactly 5 digits (French format)
- **Telephone**: Supports international formats
- **Text fields**: Min length validation

Real-time error messages shown on blur/submit.

## 🖼 Image Handling

- Listings support image uploads
- Images converted to Base64 for API
- Preview shown before submit
- Fallback emoji icons if no image

## 🌐 Environment Setup

Create `.env` file (optional):
```
NG_APP_API_URL=http://localhost:8080/api
NG_APP_ENV=development
```

## 📊 API Integration

Services follow RESTful patterns:
- `GET /api/annonces` - Get all listings
- `POST /api/annonces` - Create listing
- `GET /api/annonces/:id` - Get listing detail
- `PUT /api/annonces/:id` - Update listing
- `DELETE /api/annonces/:id` - Delete listing
- `GET /api/demandes` - Get requests
- `GET /api/categories` - Get categories
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User signup

## 🎓 Learning Resources

- [Angular Docs](https://angular.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [RxJS Guide](https://rxjs.dev)
- [Standalone Components](https://angular.dev/guide/standalone-components)

## 📄 Project Generated

Generated with Angular CLI 17.3+ with:
- ✅ Routing enabled
- ✅ Tailwind CSS configured
- ✅ Standalone components
- ✅ TypeScript strict mode
- ✅ Modern CSS features

## 🚀 Deployment

### Build for Production
```bash
npm run build --configuration production
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Run `ng build --base-href=/repo-name/`
- **Docker**: Create Dockerfile with Node image

## 📝 Notes

- Tokens expire - implement refresh token logic if needed
- CORS must be enabled on backend for requests
- Images limited by API (check backend max file size)
- Categories loaded once at app startup

## 🤝 Contributing

1. Follow Angular style guide
2. Use standalone components
3. Keep services focused and single-responsibility
4. Add types for all function parameters
5. Use RxJS operators (map, filter, tap, etc.)

## 📞 Support

For backend setup, see the EcoShare backend repository.

---

**Built with ❤️ for a sustainable future** 🌍

Last Updated: July 2, 2026
