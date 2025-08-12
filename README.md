# React Native Expo Template with TanStack Query

A clean React Native Expo starter template with TanStack Query, complete with ESLint, Prettier, Husky hooks, and lint-staged for code quality.

## Features

- ⚡ **React Native Expo** - Cross-platform mobile development
- 🔄 **TanStack Query** - Powerful data fetching and caching
- 📱 **Clean Template** - Minimal starter code ready for development
- 🔧 **Development Tools** - All essential tools pre-configured
- 🛠️ **ESLint & Prettier** - Code quality and formatting
- 🪝 **Husky & lint-staged** - Pre-commit hooks for code quality
- 📱 **TypeScript** - Type-safe development
- 🎨 **Modern UI** - Clean and responsive design

## Project Structure

```
react-native-expo-template/
├── src/
│   ├── components/
│   │   └── ExampleComponent.tsx      # Example component
│   ├── hooks/
│   │   └── useExampleQuery.ts        # Example TanStack Query hook
│   ├── providers/
│   │   └── QueryProvider.tsx         # TanStack Query provider
│   └── screens/
│       └── HomeScreen.tsx            # Example screen
├── .eslintrc.js
├── .prettierrc.js
├── .husky/
│   └── pre-commit
├── App.tsx
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chat-module
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS
   pnpm ios

   # Android
   pnpm android

   # Web
   pnpm web
   ```

## Development Tools

### Code Quality

- **ESLint**: Code linting with TypeScript and React Native rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit validation
- **lint-staged**: Run linters on staged files only

### Available Scripts

```bash
# Development
pnpm start          # Start Expo development server
pnpm ios            # Run on iOS simulator
pnpm android        # Run on Android emulator
pnpm web            # Run on web browser

# Code Quality
pnpm lint           # Run ESLint
pnpm lint:fix       # Run ESLint with auto-fix
pnpm format         # Format code with Prettier
pnpm format:check   # Check code formatting
pnpm type-check     # Run TypeScript type checking
```

### Git Hooks

The project uses Husky to run pre-commit hooks that:

- Lint staged TypeScript/JavaScript files
- Format staged files with Prettier
- Ensure code quality before commits

## TanStack Query Integration

### QueryProvider Setup

The app is wrapped with `QueryProvider` that configures TanStack Query with optimal settings:

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

### Example Query Hook

Simple example of using TanStack Query:

```typescript
const { data, isLoading, error } = useExampleQuery();
```

### Usage Example

```typescript
// In your component
const { data, isLoading, error } = useExampleQuery();

// Handle loading state
if (isLoading) return <LoadingSpinner />;

// Handle error state
if (error) return <ErrorMessage error={error} />;

// Use data
return <Text>{data}</Text>;
```

## Template Structure

The template includes:

- **ExampleComponent**: Basic component structure
- **useExampleQuery**: TanStack Query hook example
- **HomeScreen**: Screen with query demonstration
- **QueryProvider**: TanStack Query setup

### Components

### ExampleComponent

A simple component that demonstrates:

- TypeScript interfaces
- Props handling
- StyleSheet usage
- Component structure

### HomeScreen

An example screen that shows:

- TanStack Query integration
- Loading states
- Error handling
- Component composition

## Customization

### Styling

The project uses StyleSheet for styling. You can customize:

- Colors in component styles
- Typography in theme files
- Layout and spacing

### API Integration

Replace the example query with real API calls:

1. Update `src/hooks/useExampleQuery.ts`
2. Replace the mock function with real API calls
3. Update TypeScript interfaces
4. Test with real data

### Adding New Features

1. **New Screens**: Add to `src/screens/`
2. **New Components**: Add to `src/components/`
3. **New Hooks**: Add to `src/hooks/`
4. **New Services**: Add to `src/services/` (create this directory)

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `pnpm start --clear`
2. **TypeScript errors**: Run `pnpm type-check` to identify issues
3. **Linting errors**: Run `pnpm lint:fix` to auto-fix issues
4. **Formatting issues**: Run `pnpm format` to format code

### Performance Tips

- Use `React.memo` for expensive components
- Implement proper key props for lists
- Optimize images and assets
- Use React Query's caching effectively

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## License

This project is licensed under the MIT License.
