# Product Card Mockup

This small project reproduces a centered product card UI from a series of provided mockup images. Each screen mimics a simplistic handheld device interface with interactive buttons and a consistent color palette. Beyond static layout, the project introduces basic page-to-page navigation and modal-like overlays to demonstrate minimal interactivity without any frameworks.

Project goals:
- Recreate the mockup using semantic HTML and CSS.
- Keep the layout responsive and centered on a typical desktop-sized canvas.
- Implement navigable screens (`GetStarted.html`, `EditAvatar.html`) from the main index page.
- Add a sliding instructions overlay triggered by the RULES button.
- Keep JavaScript lightweight and focused on DOM events.

During development I tackled a few challenges:
- **Positioning the HOME button**: ensuring it floated outside the card while not colliding with underlying content required layering (`z-index`) and margin adjustments.
- **Reusable styling**: shared styles for buttons and the card had to accommodate multiple pages, so selectors were generalized and comments added for clarity.
- **Navigation logic**: light JavaScript handles URL changes and overlay toggling without interfering with normal link behavior.
- **Maintaining readability**: as the project grew, keeping the CSS concise and the markup semantic was a priority, avoiding unnecessary classes or inline styles.

Files:
- `Index.html` — the HTML markup for the main page.
- `GetStarted.html` — the secondary screen reached by clicking GET STARTED, with a 5x4 grid of dots.
- `EditAvatar.html` — the avatar editing screen reached by clicking EDIT AVATAR, with PROFILE and FIT buttons.
- `Product.css` — styles that implement the design and layout for all pages.
- `Product.js` — script that toggles the instructions overlay and handles navigation between pages.

How to view:
1. How to run: run this link in a web browser: https://github.com/Annayllil/PracticePrototyping

