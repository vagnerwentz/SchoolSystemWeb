# SchoolSystemWeb

![SchoolSystemWeb](https://img.shields.io/badge/SchoolSystemWeb-1.0.0-blue.svg)
![React](https://img.shields.io/badge/Frontend-React-blue.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![Atomic Design](https://img.shields.io/badge/Design-Atomic%20Design-yellowgreen.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Atomic Design](#atomic-design)

## Introduction

**SchoolSystemWeb** is the frontend application for the School System project, developed using React and TypeScript. It interacts with the backend API to manage various school-related data such as student enrollment and grading. This project follows the Atomic Design methodology to create reusable and maintainable UI components.

## Features

- User-friendly interface for student management
- Integration with backend APIs for data handling
- Modular component design using Atomic Design principles

## Technologies

- **Frontend:** React, TypeScript
- **Design Methodology:** Atomic Design
- **Styling:** CSS modules
- **Version Control:** GitHub

## Setup

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your machine.
- **npm or yarn:** Package manager to install dependencies.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vagnerwentz/SchoolSystemWeb.git
    cd SchoolSystemWeb
    ```

2. **Install dependencies:**

    If you're using npm:

    ```bash
    npm install
    ```

    Or if you're using yarn:

    ```bash
    yarn install
    ```

### Running the Project

To start the development server:

```bash
npm start
```
Or if you prefer yarn
```bash
yarn start
```

## Project Structure
```
SchoolSystemWeb/
├── public/                       # Public assets
├── src/                          # Source files
│   ├── components/               # Atomic Design components
│   │   ├── atoms/                # Smallest building blocks (buttons, inputs, etc.)
│   │   ├── molecules/            # Groups of atoms working together (form groups, card layouts, etc.)
│   │   ├── organisms/            # Complex components (navbars, forms, etc.)
│   │   ├── templates/            # Page layout templates
│   │   └── pages/                # Actual pages
│   ├── services/                 # API service calls
│   ├── styles/                   # Global styles
│   ├── App.tsx                   # Root component
│   └── index.tsx                 # Entry point
├── package.json                  # Project metadata and dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation

```

## Atomic Design
This project uses the Atomic Design methodology, which helps in creating a structured and maintainable component library. The Atomic Design is broken down into five distinct levels:

1. Atoms: Basic building blocks (e.g., buttons, inputs, labels).
2. Molecules: Groups of atoms bonded together (e.g., a form group with a label and input).
3. Organisms: More complex UI components composed of molecules and/or atoms (e.g., a navbar, card components).
4. Templates: Page-level structures that combine organisms (e.g., a full page layout without content).
5. Pages: Complete pages that include templates filled with real content and data.

This structure promotes reusability, consistency, and scalability within the application.

