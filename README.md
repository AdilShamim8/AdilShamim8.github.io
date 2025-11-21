# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This website showcases my skills, projects, and contact information in a visually appealing and interactive way. 

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Dynamic Content**: Projects are loaded dynamically from JavaScript
- **Animated Elements**: Smooth animations and transitions
- **Interactive UI**: Filtering projects, form validation, and more
- **Modern Design**: Clean and professional layout

## Sections

1. **Home**: Introduction with a typing animation
2. **About**: Personal information and background
3. **Projects**: Portfolio of work with filtering options
4. **Skills**: Technical and professional skills with progress bars
5. **Contact**: Contact form and information

## Technologies Used

- **HTML5**: Structure of the website
- **CSS3**: Styling with custom properties (variables) for theming
- **JavaScript**: Dynamic functionality and interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Typography


### Styling

The website uses CSS variables for easy customization:

- Colors can be changed in the `:root` section of `styles.css`
- Dark theme colors can be modified in the `[data-theme="dark"]` section

## Browser Support

The website is compatible with all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Customize the content to make it your own

## License
This open-source project is available under the [MIT License](License).

## Acknowledgements

- Font Awesome for icons
- Google Fonts for typography
- Placeholder.com for placeholder images 









# Personal Portfolio Website

An immersive, web-based portfolio that simulates the macOS Big Sur desktop environment. This project serves as an interactive resume for Adil Shamim, showcasing skills, projects, and experience through draggable windows, a working dock, and themed "apps".

## Features

Desktop Environment: A realistic desktop with a customizable wallpaper, menu bar with a live clock, and a floating dock.

Interactive Windows:

Draggable: Move windows anywhere on the screen.

Layering: Clicking a window brings it to the front (active state).

Controls: Functional "Traffic Light" buttons to Close (Red), Minimize (Yellow), and Maximize (Green) windows.

Minimization: Windows shrink into the dock and can be restored by clicking their icon.

Themed Applications:

Finder: Displays "About Me", Education, and Achievements.

Terminal: Lists technical skills in a CLI-style interface.

Safari: A browser-style showcase of projects with GitHub links.

Calendar: A timeline view of work experience and certifications.

Mail: A contact form simulation with social media links (LinkedIn, GitHub, Kaggle, X, Medium).

Responsive Design: Built with Tailwind CSS to look great on various screen sizes.

## Quick Start (Single File)

The easiest way to run this project is using the standalone HTML file.

Download the index.html file provided in the project.

Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).

Note: An internet connection is required to load the React, Tailwind, and Babel libraries via CDN.

## Tech Stack

React.js: Core UI library for component-based architecture.

Tailwind CSS: Utility-first CSS framework for styling and responsiveness.

Lucide React: Beautiful, consistent icons for apps and UI elements.

Babel (Standalone): Used in the HTML version to compile JSX in the browser.

## Customization

All content is managed via a central configuration object called RESUME_DATA inside the code. To update the portfolio with your own details:

Open index.html (or App.jsx) in a code editor.

Locate the const RESUME_DATA = { ... } object near the top of the script.

Modify the fields as needed:
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

index.html: The complete, self-contained application. Contains HTML structure, CSS styles (via Tailwind), and the React application logic in a single file.

App.jsx: The source React component (if moving to a Create React App or Vite environment).

## Author

Adil Shamim

Website: adilshamim.me

LinkedIn: @adilshamim8

GitHub: @AdilShamim8

Built with ❤️ using React and Tailwind CSS.
