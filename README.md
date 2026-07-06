# Interactive Rating Component

![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-000000?logo=javascript&logoColor=F7DF1E)
![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-5C6BC0)
![Status](https://img.shields.io/badge/status-live-2ea44f)

![](./docs/github-preview.png)

An accessible and responsive interactive rating component built with semantic HTML, modern CSS, and vanilla JavaScript. The project focuses on native browser features, keyboard accessibility, and maintainable CSS architecture.

---

## Live Demo

- 🌎 [**Live Site**](https://vimpdev.github.io/fem-js-newbie-07-interactive-rating-component/)
<!-- - 📌 [**Frontend Mentor Solution**]() -->

---

## Demo

![](./docs/demo.gif)

---

## Screenshots

### Mobile

| Default | States | Result |
| :-----: | :----: | :-----: |
| ![](./docs/mobile-default.avif) | ![](./docs/mobile-states.avif) | ![](./docs/mobile-result.avif) |


### Tablet

| Default | States | Result |
| :-----: | :----: | :-----: |
| ![](./docs/tablet-default.avif) | ![](./docs/tablet-states.avif) | ![](./docs/tablet-result.avif) |


### Desktop

| Default | States | Result |
| :-----: | :----: | :-----: |
| ![](./docs/desktop-default.avif) | ![](./docs/desktop-states.avif) | ![](./docs/desktop-result.avif) |

---

## Features

- Select a rating from 1 to 5.
- Responsive layout following a mobile-first workflow.
- Accessible keyboard navigation.
- Native HTML form validation.
- Interactive hover, focus, and selected states.
- Updates the interface without reloading the page.

---

## Tech Stack

### Languages

- HTML5
- CSS3
- JavaScript (ES6+)

### CSS

- CSS Custom Properties (Design Tokens)
- CSS Nesting
- Cascade Layers
- Flexbox
- Mobile-first workflow

### Accessibility

- Semantic HTML
- Native radio group (`fieldset` + `legend`)
- Keyboard navigation
- Visible focus indicators
- Native form validation

### Tooling

- pnpm
- Servor
- Git
- GitHub Pages

---

## JavaScript Flow

The interaction is intentionally simple and relies on native browser behavior whenever possible.

```text
User submits the form
        │
        ▼
Read selected radio value
        │
        ▼
Update thank-you message
        │
        ▼
Hide rating card
        │
        ▼
Show thank-you card
```

---

## Development Highlights

- Built semantic HTML before writing styles.
- Organized styles using Cascade Layers.
- Created reusable Design Tokens with CSS Custom Properties.
- Preferred native HTML features over unnecessary JavaScript.
- Used vanilla JavaScript only for the interactive behavior.
- Structured commits as incremental development milestones.

---

## Lighthouse

![](./docs/lighthouse.avif)

Audited with Google Lighthouse via [PageSpeed Insights](https://pagespeed.web.dev/).

---

## AI Collaboration

AI was used as a technical mentor to review code, discuss architectural decisions, explore alternative implementations, and validate modern front-end practices.

The implementation, testing, and final technical decisions were made throughout the development process after understanding the underlying concepts.

---

## Author

- Frontend Mentor – [@vimpdev](https://www.frontendmentor.io/profile/vimpdev)

---

## Challenge Source

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).