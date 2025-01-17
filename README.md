# Project Name

A desktop application built with Wails and Go.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Go](https://golang.org/doc/install) (1.23 or later)
- [Wails](https://wails.io/docs/gettingstarted/installation)
- [Node.js](https://nodejs.org/) (For frontend development)

## Getting Started

### System Check

First, verify your system meets all requirements by running:

```bash
wails doctor
```

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd [project-directory]
```

2. Install dependencies:

```bash
go mod tidy
```

### Development

To start the development server:

```bash
wails dev
```

This will:

- Start the backend server
- Launch the frontend development environment
- Enable hot-reloading for both frontend and backend changes

## Building

To build the production version:

```bash
wails build
```

The compiled application will be available in the `build` directory.

## Project Structure

```
├── frontend/         # Frontend source code
├── main.go          # Application entry point
└── wails.json       # Wails configuration file
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
