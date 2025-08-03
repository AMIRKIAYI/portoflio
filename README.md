# Amir Osman - Professional Portfolio

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://amirosmankiayi.netlify.app)

## Professional Overview
A responsive portfolio website showcasing my work as a Full Stack Developer with expertise in React, Node.js, and database solutions. The site demonstrates both technical skills and design sensibility through interactive elements and clean aesthetics.

## Key Features
- **Dual Theme System**: Professional dark/light mode with localStorage persistence
- **Project Showcase**: Detailed case studies with technology tags and live demos
- **Responsive Design**: Fully adaptive layout for all device sizes
- **Interactive Elements**: Animated navigation and hover effects
- **Contact System**: Functional form with validation

## Technical Architecture
### Core Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6+), React
- **Styling**: CSS Variables, Flexbox, Grid, Tailwind CSS
- **Backend Integration**: Node.js, Express, Python/Flask
- **Databases**: MySQL, MongoDB

### Development Tools
- Version Control: Git/GitHub
- IDE: VS Code
- Design: Figma (for UI mockups)
- Testing: Browser DevTools, Lighthouse

## Project Highlights

### HerderHub Marketplace
**Technologies**: React, Node.js, MySQL  
**Key Features**:
- Geolocation-based livestock trading
- Secure payment gateway integration
- Real-time messaging system  
[View Live](https://herder-hub-application.vercel.app/) | [GitHub Repo](https://github.com/AMIRKIAYI/herderhub)

### KenyaLivestockConnect
**Technologies**: React, Flask, MongoDB  
**Key Features**:
- International trade platform
- Advanced filtering system
- Multilingual support

## Development Approach
```javascript
// Theme switching implementation example
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', 
    document.body.classList.contains('light-theme') ? 'light' : 'dark'
  );
}