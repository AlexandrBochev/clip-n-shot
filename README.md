# Clip-n-Shot

## Description
**Clip-n-Shot** is a Chrome extension for capturing and editing screenshots. Built with React, Tailwind CSS, and Webpack, this extension provides an intuitive and seamless experience for capturing, cropping, and managing screenshots directly within the browser.

## Features
- Capture screenshots within Chrome
- Crop and edit images using `cropperjs`
- Lightweight and efficient performance
- Built with modern web technologies (React, Tailwind CSS, TypeScript, Webpack)

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/AlexandrBochev/clip-n-shot
cd clip-n-shot
```

### Install Dependencies
```sh
npm install
```

## Development
To start the development environment with Webpack watch mode, run:
```sh
npm run dev
```

## Build for Production
To create an optimized production build, run:
```sh
npm run build
```

## Clean Build Files
To remove the existing build files before starting a new build, run:
```sh
npm run clean
```

## Loading the Extension in Chrome
1. Open **Google Chrome** and go to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle in the top right corner).
3. Click **Load Unpacked**.
4. Select the `dist` folder from your project directory.
5. The extension will be installed and ready for use.

## Technologies Used
- **React** `^19.0.0`
- **React-DOM** `^19.0.0`
- **Cropper.js** `^1.6.2`
- **Tailwind CSS** `^4.0.1`
- **Webpack** `^5.97.1`
- **TypeScript** `^5.7.3`

## Author
**Alexandr Bochev**
