> # `Personal Portfolio Website`

An immersive, web-based portfolio that simulates the macOS Big Sur desktop environment. This project serves as an interactive resume for Adil Shamim, showcasing skills, projects, and experience through draggable windows, a working dock, and themed "apps".

## Features

- Desktop Environment: A realistic desktop with a customizable wallpaper, menu bar with a live clock, and a floating dock.

- Interactive Windows:

  - Draggable: Move windows anywhere on the screen.

  - Layering: Clicking a window brings it to the front (active state).

  - Controls: Functional "Traffic Light" buttons to Close (Red), Minimize (Yellow), and Maximize (Green) windows.

  - Minimization: Windows shrink into the dock and can be restored by clicking their icon.

- Themed Applications:

  - Finder: Displays "About Me", Education, and Achievements.

  - Terminal: Lists technical skills in a CLI-style interface.

  - Safari: A browser-style showcase of projects with GitHub links.

  - Calendar: A timeline view of work experience and certifications.

  - Mail: A contact form simulation with social media links (LinkedIn, GitHub, Kaggle, X, Medium).

- Responsive Design: Built with Tailwind CSS to look great on various screen sizes.

## Quick Start (Single File)

The easiest way to run this project is using the standalone HTML file.

1. Download the index.html file provided in the project.

2. Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).

3. Note: An internet connection is required to load the React, Tailwind, and Babel libraries via CDN.

## Tech Stack

- React.js: Core UI library for component-based architecture.

- Tailwind CSS: Utility-first CSS framework for styling and responsiveness.

- Lucide React: Beautiful, consistent icons for apps and UI elements.

- Babel (Standalone): Used in the HTML version to compile JSX in the browser.

## Customization

All content is managed via a central configuration object called RESUME_DATA inside the code. To update the portfolio with your own details:

1. Open index.html (or App.jsx) in a code editor.

2. Locate the const RESUME_DATA = { ... } object near the top of the script.

3. Modify the fields as needed:
```
const RESUME_DATA = {
  personal: {
    name: "Your Name",
    role: "Your Job Title",
    // ... update links, summary, avatar, etc.
  },
  skills: {
    languages: ["Skill 1", "Skill 2"],
    // ...
  },
  // ... update projects, experience, etc.
};
```

## Project Structure

- index.html: The complete, self-contained application. Contains HTML structure, CSS styles (via Tailwind), and the React application logic in a single file.
- App.jsx: The source React component (if moving to a Create React App or Vite environment).

## License

This open-source project is available under the [MIT License](License).

Developed by [Adil Shamim](https://adilshamim.me/)

[![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://www.kaggle.com/adilshamim8)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adilshamim8)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/adil_shamim8)

