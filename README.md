# Handoff Frontend Take-Home Challenge

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) as a starting point for the frontend engineering take-home challenge.

This project uses [Bun](https://bun.sh) as the package manager and runtime.

## Project Structure

```s
├── app/                  # Main application (file-based routing)
├── assets/               # Static assets
├── src/                  # Source code
│   ├── common/           # Shared components and utilities
│   │   ├── components/   # Reusable UI components
│   │   ├── lib/          # Utility functions and helpers
│   │   └── theme/        # Design system theme
│   │       ├── tokens/   # Design tokens (colors, spacing)
│   └── estimate/         # Feature-specific code
```

## Prerequisites

-   [Bun](https://bun.sh) - Install with: `curl -fsSL https://bun.sh/install | bash`
-   [Expo CLI](https://docs.expo.dev/get-started/installation/) - Installed automatically with dependencies

## Getting Started

1. Install dependencies

    ```bash
    bun install
    ```

2. Start the app

    ```bash
    bun start
    ```

    This will open the Expo development server. You can then:

    - Press `i` to open iOS simulator
    - Press `a` to open Android emulator
    - Press `w` to open in web browser

3. Run on specific platforms

    ```bash
    # iOS
    bun run ios

    # Android
    bun run android

    # Web
    bun run web
    ```

## Available Scripts

-   `bun start` - Start the Expo development server
-   `bun run ios` - Run on iOS simulator
-   `bun run android` - Run on Android emulator
-   `bun run web` - Run in web browser
-   `bun test` - Run tests in watch mode
-   `bun run lint` - Run ESLint

## Resources

-   [Figma Design](https://www.figma.com/design/Blk49Bk32ACk3yuDC2Vsq5/Take-Home-Assement---Front-End-Jan-2025?node-id=4044-145&t=4yKjBuOChIiCckTl-11) (Password: `H@ndoff#`)
-   [Expo Documentation](https://docs.expo.dev/)
-   [React Native Documentation](https://reactnative.dev/)
-   [Bun Documentation](https://bun.sh/docs)
