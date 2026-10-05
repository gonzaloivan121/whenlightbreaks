# When Light Breaks - Official Website

This repository contains the source code for the official website of When Light Breaks, an alternative metal project combining traditional heavy metal instrumentation with modern electronic elements and wide vocal dynamics.

Built with [Angular](https://angular.dev/), this application serves as the central digital hub for the band's music releases, merchandise, press kits, and touring information.

## Features

- **Media Integrations:** Custom embed components for Spotify and YouTube to stream music directly on the site.

- **Press Kit Access:** Dedicated portal for media professionals to download the band's official electronic press kit (EPK).

- **Dynamic Sections:** Modular architecture featuring About, Music, Store, Contact, and Highlight promotional components.

- **Progressive Web App (PWA):** Fully configured web manifest and maskable icons for a native app-like experience on mobile devices.

- **SEO Optimized:** Structured meta tags and Open Graph data for optimal sharing across social platforms.

## Tech Stack

- **Framework:** Angular 22+
- **Icons:** `@ng-icons/core` (Ionicons & Simple Icons)
- **Testing:** Vitest

## Local Development

Ensure you have Node.js and the Angular CLI installed on your machine.

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm start
    # OR use the Angular CLI directly:
    ng serve
    ```

    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

3. Expose to local network:

    To test the site on other devices (like your phone) connected to the same Wi-Fi network, run:

    ```bash
    ng serve --host 0.0.0.0
    ```

## Building for Production

To compile the project for production, run:

```bash
npm run build
# OR
ng build
```

The build artifacts will be stored in the `dist/` directory. The production build optimizes the application for performance, speed, and standard Web Vitals.

## Testing

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component <component-name>
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.