# ☕ Eslavath Narasimha Naik | Java Full-Stack Developer Portfolio

Welcome to the source code of my personal developer portfolio website. This project showcases my skills, experience, project case studies, and live GitHub contributions in a premium, high-performance, responsive single-page interface.

🚀 **Live Site:** [https://eslavathnarasimhanaik.github.io](https://eslavathnarasimhanaik.github.io)

---

## 🛠️ Architecture & Tech Stack

This website is designed with a modern decoupled full-stack architecture:

*   **Frontend:**
    *   **Core:** Semantic HTML5, Vanilla JavaScript (ES6+).
    *   **Styling:** Modern Vanilla CSS3 utilizing CSS custom properties (variables), radial gradients, glassmorphism, responsive grids, and scroll animations. No heavy CSS libraries (like Bootstrap or Tailwind) were used to guarantee lightning-fast page speed.
    *   **Hosting:** GitHub Pages.
*   **Backend & DB:**
    *   **Server:** Java Spring Boot (hosted on Render). See repository: [portfolio-backend](https://github.com/eslavathnarasimhanaik/portfolio-backend).
    *   **Database:** MySQL (Hosted on Aiven Cloud) with H2 in-memory option for local development.

---

## ✨ Key Features

### 1. High-Performance Navigation & Motion
*   **IntersectionObserver Spy Scroll:** Page-scroll tracking is built using the native browser `IntersectionObserver` API instead of synchronous scroll event listeners. This avoids layout thrashing (forced reflows) and ensures scrolling is buttery smooth.
*   **CSS Scroll Optimization:** Page smooth-scroll behavior is scoped to the `html` element rather than the universal selector `*`, reducing browser layout calculation overhead.
*   **Scroll-Triggered Animations:** Page sections fade and slide up gracefully as they enter the user's viewport.

### 2. Interactive Forms & Integrations
*   **Double-Submission Prevention:** Form submit actions automatically disable all input fields and display loading texts (`Sending...` / `Booking...`) to prevent duplicate database entries.
*   **Google Calendar Auto-Booking:** For users booking a meeting with a Gmail address, the form automatically generates a Google Calendar template link. Saving this event automatically invites both parties and schedules a Google Meet conference.
*   **Fail-Safe Backends:** The forms dynamically direct submissions to the live Render MySQL Spring Boot API when online, with fallback configurations.

### 3. Live GitHub Integration
*   **Live Repository Count:** Dynamically fetches my public repository count using the GitHub REST API.
*   **Recent Activity Feed:** Displays a live micro-feed of my latest public GitHub events (pushes, stars, repository creation).
*   **Contribution Chart:** Embeds my live open-source contribution calendar grid.

### 4. Dynamic Theme Switcher
*   Supports a premium Dark Mode (default) and a clean Light Mode with tailored color palettes, smooth transitions, and persistent storage via `localStorage`.

---

## 📂 Project Structure

```
eslavathnarasimhanaik.github.io/
├── index.html                           # Main portfolio markup, CSS styles & JS logic
├── manifest.json                        # Progressive Web App configuration
├── sw.js                                # Service Worker template
├── Eslavath_Narasimha_Naik_Resume.pdf  # Downloadable PDF Resume
├── profile-avatar.jpg                   # Profile picture
├── robots.txt                           # Search engine indexing rules
└── sitemap.xml                          # Site map for Google Search Console SEO
```

---

## 🚀 Running Locally

To run the frontend portfolio locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/eslavathnarasimhanaik/eslavathnarasimhanaik.github.io.git
    cd eslavathnarasimhanaik.github.io
    ```

2.  **Open the Webpage:**
    Simply open the `index.html` file in any modern web browser or run it using a local development server (such as VS Code's **Live Server** extension).

3.  **Local Backend Support:**
    To enable local form submissions to save directly to a database, start the Spring Boot server in the companion `portfolio-backend` repository. By default, `index.html` will detect if you are running on `localhost` and automatically direct API calls to `http://localhost:8080/api/contact` and `http://localhost:8080/api/meetings`.