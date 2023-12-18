# Crew Dashboard

## Asignment A - B
These assignments are made on the same GUI. You can check them here:
https://task-dashboard-six.vercel.app/

## Assignment C - Potential Improvements

### API Structure:

The API responses exhibit inconsistency in naming conventions. While the REST API adheres to camel case (e.g., "statusMessage"), the WebSocket values use capitalization (e.g., "StatusMessage"). This discrepancy can complicate response handling. Consider standardizing naming conventions to enhance developer understanding and ease of integration.

### Comprehensive API Documentation

There was lack of clarity in ActOnSpectrum endpoint in assignment documentation, explaining the expected response structure and any potential nuances. Thorough and up-to-date documentation for all endpoints, including example requests and responses, is crucial for facilitating seamless integration for developers.

### Authentication and Authorization

Clarify and enhance documentation to include information on authentication and authorization. This ensures secure operations and provides developers with the necessary details.

### Error Handling

Ensuring consistent error handling across all endpoints, providing meaningful error messages and adhering to standard HTTP status codes. This consistency helps developers troubleshoot and understand issues efficiently.

# React App for Spectrum Rocket Monitoring

## Overview

This React application is designed to visualize and monitor the sensor data of the Spectrum rocket during its maiden flight. It communicates with the Isar Aerospace server through two endpoints: SpectrumStatus (REST API) and SpectrumWS (WebSocket API).

## Features

* Fetches sensor data from the Isar Aerospace server using the SpectrumStatus endpoint.
* Visualizes current velocity, altitude, temperature, status message, ascent/descent, and user action requirement.
* User can manually request updated data by clicking a button.
* Upgrades communication to WebSocket using the SpectrumWS endpoint for live data streaming.
* Continuously updates the UI with real-time sensor data from the WebSocket connection.
* Notifies the user in case of critical status changes, allowing them to take action.

## Getting Started

### On Local Machine

Clone the repository and navigate to the project directory:

```git clone https://github.com/ozgur-okt/task-dashboard```
```cd task-dashboard```

Install dependencies:

```npm install```

Start the React app:

```npm start```

Open your browser and visit http://localhost:3000 to view the Spectrum Rocket Monitoring app.

### On Docker

Build and start the Docker containers:

```docker-compose up```

This command builds the Docker images and starts the containers. The app will be available at http://localhost:5000.

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for managing the application's state.
- **react-apexcharts:** A React wrapper for ApexCharts, used for creating dynamic and interactive charts.
- **axios:** A promise-based HTTP client for making requests to the Isar Aerospace server.
- **react-redux:** Official React bindings for Redux, facilitating state management in React applications.
- **redux-thunk:** Middleware for handling asynchronous actions in Redux.
- **react-modal:** A React modal component for creating modals and dialogs.
- **prop-types:** Runtime type checking for React props to catch potential bugs.

### Styling

- **Sass:** A popular CSS preprocessor for enhancing stylesheets with variables, nesting, and more.

### Code Quality

- **ESLint:** A linting tool for identifying and fixing problems in JavaScript code.
- **eslint-plugin-react:** React-specific linting rules for ESLint.

### Data Visualization

- **react-apexcharts:** A modern JavaScript charting library for creating interactive visualizations.

### Development

- **react-scripts:** Scripts and configurations for Create React App.
- **babel-plugin-glsl:** Babel plugin for loading GLSL shader files in React components.

### State Persistence

- **redux-persist:** Library for persisting and rehydrating a Redux store.

## Project Structure

The project follows a structured organization to enhance maintainability and scalability. Here is an alphabetical overview of the main folders in the `src` directory:

### `src/assets`

This folder holds static assets such as images, fonts, or any other resources used in the application.

### `src/components`

This folder contains React components responsible for UI elements, including charts, modals, and other reusable components.

### `src/constants`

Constants or configuration files are stored in the `constants` folder. This helps centralize values that might be reused across different parts of the application.

### `src/redux`

The `redux` folder manages state-related files, including actions, reducers, and the store configuration. Redux is used for predictable state management across the application.

### `src/styles`

Styling-related files, including SASS files, are located in the `styles` folder. This centralizes styling logic and ensures consistency throughout the application.

### `src/utils`

Utility functions and helper modules are placed in the `utils` folder. These can include functions for data manipulation, formatting, or any general-purpose tasks.

### `src/views`

The `views` folder contains React components that represent different views or pages in the application. Each view may utilize components from the `components` fol


## Future Improvements

* Implement user authentication for secure access.

## License

This project is licensed under the MIT License.